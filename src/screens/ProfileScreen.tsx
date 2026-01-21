import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CURRENT_USER } from '../data/mock';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width / 3 - 1;

export default function ProfileScreen() {
  const user = CURRENT_USER;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{user.username}</Text>
        <Ionicons name="menu-outline" size={24} color="black" />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileInfo}>
          <Image source={{ uri: user.avatar }} style={styles.avatar} />
          <Text style={styles.username}>@{user.username}</Text>
          
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.following}</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.followers}</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.likes}</Text>
              <Text style={styles.statLabel}>Likes</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.buttonText}>Edit profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Ionicons name="share-social-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.tabs}>
           <View style={[styles.tabItem, styles.activeTab]}>
                <Ionicons name="grid-outline" size={20} color="black" />
           </View>
           <View style={styles.tabItem}>
                <Ionicons name="heart-outline" size={20} color="gray" />
           </View>
        </View>

        <View style={styles.grid}>
             {/* Mock Grid Items */}
             {[...Array(9)].map((_, i) => (
                 <View key={i} style={styles.gridItem}>
                     <Image 
                        source={{uri: `https://picsum.photos/200/300?random=${i}`}} 
                        style={StyleSheet.absoluteFill} 
                     />
                     <View style={styles.playCount}>
                        <Ionicons name="play-outline" size={12} color="white" />
                        <Text style={{color: 'white', fontSize: 12}}> {Math.floor(Math.random() * 1000)}</Text>
                     </View>
                 </View>
             ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
      paddingBottom: 50,
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: 'gray',
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  editButton: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
  shareButton: {
      padding: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 4,
  },
  buttonText: {
    fontWeight: '600',
  },
  tabs: {
      flexDirection: 'row',
      borderTopWidth: 0.5,
      borderTopColor: '#eee',
      borderBottomWidth: 0.5,
      borderBottomColor: '#eee',
  },
  tabItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10,
  },
  activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: 'black',
  },
  grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
  },
  gridItem: {
      width: ITEM_WIDTH,
      height: ITEM_WIDTH * 1.3,
      marginRight: 1,
      marginBottom: 1,
      backgroundColor: '#eee',
      position: 'relative'
  },
  playCount: {
      position: 'absolute',
      bottom: 5,
      left: 5,
      flexDirection: 'row',
      alignItems: 'center'
  }
});
