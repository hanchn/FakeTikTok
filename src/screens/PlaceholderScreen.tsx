import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function PlaceholderScreen({ route }: { route: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{route.name} Page</Text>
      <Text style={styles.subText}>Coming Soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subText: {
      marginTop: 10,
      color: 'gray'
  }
});
