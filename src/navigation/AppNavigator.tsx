import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';

const Tab = createBottomTabNavigator();

const CustomAddButton = () => (
  <View style={{
    width: 45,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#25F4EE',
    borderRightWidth: 4,
    borderRightColor: '#FE2C55',
  }}>
    <Ionicons name="add" size={24} color="black" />
  </View>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: route.name === 'Home' ? 'black' : 'white',
            borderTopColor: route.name === 'Home' ? '#333' : '#eee',
            height: 85,
            paddingTop: 10,
          },
          tabBarActiveTintColor: route.name === 'Home' ? 'white' : 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
              fontWeight: '600',
              fontSize: 10,
              marginBottom: 5
          }
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Friends" 
          component={PlaceholderScreen} 
          options={{
            tabBarLabel: 'Friends',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "people" : "people-outline"} size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Add" 
          component={PlaceholderScreen} 
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <CustomAddButton />,
          }}
        />
        <Tab.Screen 
          name="Inbox" 
          component={PlaceholderScreen} 
          options={{
            tabBarLabel: 'Inbox',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"} size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? "person" : "person-outline"} size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
