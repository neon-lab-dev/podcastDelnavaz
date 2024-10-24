/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Profile';
import CategoriesScreen from '../Screens/Categories';
import StreamingScreen from '../Screens/Streaming';
import GetIcon from '../utils/GetIcon';
import {vs} from 'react-native-size-matters';

const AppTab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <AppTab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home-solid' : 'home-outline';
              break;
            case 'Profile':
              iconName = focused ? 'profile-solid' : 'profile-outline';
              break;
            case 'Streaming':
              iconName = focused ? 'streaming-solid' : 'streaming-outline';
              break;
            case 'Categories':
              iconName = focused ? 'category-solid' : 'category-outline';
              break;
            default:
              iconName = 'home-outline'; // Fallback icon
          }
          return <GetIcon name={iconName} />;
        },
        tabBarLabel: () => null, // Keep labels hidden; change if needed
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {backgroundColor: '#fff', height: vs(60)},
      })}>
      <AppTab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <AppTab.Screen name="Categories" component={CategoriesScreen} />
      <AppTab.Screen name="Streaming" component={StreamingScreen} />
      <AppTab.Screen name="Profile" component={ProfileScreen} />
    </AppTab.Navigator>
  );
};

export default AppNavigator;
