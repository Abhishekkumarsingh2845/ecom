import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Address from '../Screen/Address';
import Login from '../Screen/Login';
import Profile from '../Screen/Profile';
import Fav  from '../Screen/Favourite';
import  MyBagScreen from '../Screen/MyBagScreen';


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
      <Tab.Screen name="Home" component={Address} />
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Favorite" component={Fav} />
      <Tab.Screen name="Bag" component={MyBagScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
