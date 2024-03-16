





// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './Screen/Signup';
import Login from './Screen/Login';
import Forgot from './Screen/ForgotPassword';
import Visual from './Screen/VisualSearch';
import ViewP from './Screen/ViewPrdouct';
import Success from './Screen/Success';
import Address from './Screen/Address';
import Profile from './Screen/Profile';
import Setting from './Screen/Settingpi';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={Forgot}/>
        <Stack.Screen name="Visual" component={Visual}/>
        <Stack.Screen name="ViewProduct" component={ViewP}/>
        <Stack.Screen name="Success" component={Success}/>
        <Stack.Screen name="Address" component={Address}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Setting" component={Setting}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;