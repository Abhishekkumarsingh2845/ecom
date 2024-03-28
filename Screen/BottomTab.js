// App.js or index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './Screen/Bottom'; // Assuming this is your main navigator

const App = () => {
  return (
    <NavigationContainer>
      <MainTabNavigator />
    </NavigationContainer>
  );
};

export default App;

