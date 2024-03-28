import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Address from '../Screen/Address';

import Profile from '../Screen/Profile';
import Fav  from '../Screen/Favourite';
import  MyBagScreen from '../Screen/MyBagScreen';
import MainPage from '../Screen/MainPage';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          display: 'flex',
          backgroundColor:'white',
          borderRadius:30,
          width:'100%',
          height:'10%',
        
        },
      }}
    >
      <Tab.Screen name="Home" component={MainPage} />
      <Tab.Screen name="Ho" component={Address} />
    
      <Tab.Screen name="Bag" component={MyBagScreen} />
      <Tab.Screen name="Favorite" component={Fav} />
      <Tab.Screen name="Profile" component={Profile} />

      

    </Tab.Navigator>
  );
};

export default MainTabNavigator;
