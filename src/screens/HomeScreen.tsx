import React, { useRef, useState, useCallback } from 'react';
import { StyleSheet, View, Text, Dimensions, StatusBar, FlatList } from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Video, ResizeMode } from 'expo-av';
import { Image } from 'expo-image';
import { MOCK_FEED } from '../data/mock';
import { FeedItem } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useStore } from '../store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const FeedItemComponent = React.memo(({ item, isActive }: { item: FeedItem; isActive: boolean }) => {
  const videoRef = useRef<Video>(null);
  const { toggleLike, toggleBookmark, isLiked, isBookmarked } = useStore();
  const liked = isLiked(item.id);
  const bookmarked = isBookmarked(item.id);
  const insets = useSafeAreaInsets();
  const bottomTabHeight = useBottomTabBarHeight();

  // 简单的播放控制
  React.useEffect(() => {
    if (isActive && item.type === 'video') {
      videoRef.current?.playAsync();
    } else if (item.type === 'video') {
      videoRef.current?.pauseAsync();
    }
  }, [isActive, item.type]);

  const renderContent = () => {
    switch (item.type) {
      case 'video':
        return (
          <Video
            ref={videoRef}
            source={{ uri: item.videoUrl }}
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            isLooping
            shouldPlay={isActive}
            posterSource={{ uri: item.posterUrl }}
          />
        );
      case 'image':
        return (
          <Image
            source={{ uri: item.imageUrls[0] }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
          />
        );
      case 'ad':
        return (
            <Image
                source={{ uri: item.imageUrl }}
                style={StyleSheet.absoluteFill}
                contentFit="cover"
            />
        );
        case 'survey':
            return (
                <View style={[StyleSheet.absoluteFill, { backgroundColor: '#333', justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>{item.question}</Text>
                    {item.options.map(opt => (
                        <View key={opt.id} style={{backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, margin: 5, borderRadius: 5, width: '80%'}}>
                            <Text style={{color: 'white'}}>{opt.text} ({opt.votes})</Text>
                        </View>
                    ))}
                </View>
            )
      default:
        return <View style={{ backgroundColor: 'black', flex: 1 }} />;
    }
  };

  return (
    <View style={{ width, height: height - bottomTabHeight, backgroundColor: 'black' }}>
      {renderContent()}

      {/* Overlay Info */}
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.6)']}
        style={[styles.overlay, { paddingBottom: 20 }]}
      >
        <View style={styles.leftContainer}>
          <Text style={styles.username}>@{item.user.username}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>

        <View style={styles.rightContainer}>
          <View style={styles.actionItem}>
             <Image source={{uri: item.user.avatar}} style={styles.avatar} />
          </View>
          
          <View style={styles.actionItem}>
            <Ionicons
              name={liked ? "heart" : "heart-outline"}
              size={35}
              color={liked ? "red" : "white"}
              onPress={() => toggleLike(item.id)}
            />
            <Text style={styles.actionText}>{item.likesCount + (liked ? 1 : 0)}</Text>
          </View>

          <View style={styles.actionItem}>
            <Ionicons name="chatbubble-ellipses-outline" size={35} color="white" />
            <Text style={styles.actionText}>{item.commentsCount}</Text>
          </View>

          <View style={styles.actionItem}>
            <Ionicons 
                name={bookmarked ? "bookmark" : "bookmark-outline"} 
                size={35} 
                color={bookmarked ? "gold" : "white"} 
                onPress={() => toggleBookmark(item.id)}
            />
            <Text style={styles.actionText}>Fav</Text>
          </View>

           <View style={styles.actionItem}>
            <Ionicons name="share-social-outline" size={35} color="white" />
            <Text style={styles.actionText}>{item.sharesCount}</Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
});

export default function HomeScreen() {
  const [viewableItems, setViewableItems] = useState<any[]>([]);
  const bottomTabHeight = useBottomTabBarHeight();

  const onViewableItemsChanged = useCallback(({ viewableItems }: { viewableItems: any[] }) => {
    setViewableItems(viewableItems);
  }, []);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 80,
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={MOCK_FEED}
        renderItem={({ item }) => (
          <FeedItemComponent 
            item={item} 
            isActive={viewableItems.length > 0 && viewableItems[0].item.id === item.id} 
          />
        )}
        pagingEnabled
        decelerationRate="fast"
        keyExtractor={(item) => item.id}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  leftContainer: {
    flex: 1,
    marginRight: 60,
    marginBottom: 20,
  },
  rightContainer: {
    width: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  username: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: 'white',
    fontSize: 14,
  },
  actionItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    marginTop: 5,
  },
  avatar: {
      width: 45,
      height: 45,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: 'white'
  }
});
