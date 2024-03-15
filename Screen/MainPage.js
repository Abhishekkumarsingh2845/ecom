import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View, ScrollView } from 'react-native';
import HomeScreen from './Screen/Login'; // Check the correct path for your HomeScreen
import ProfileScreen from './Screen/Address'; // Check the correct path for your ProfileScreen
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const Address = ({ navigation }) => {
  return (
    <View style={styles.addressContainer}>
      <Image
        source={require('./assets/bb.png')}
        style={styles.aa}
        resizeMode="contain"
      />
      <ScrollView style={styles.scrollView} horizontal={true} contentContainerStyle={styles.scrollViewContent}>
        <Image
          source={require('./assets/girl.png')}
          style={styles.image}
          resizeMode="cover" // Adjust the resizeMode as needed
        />
        <Image
          source={require('./assets/girl.png')}
          style={styles.image}
          resizeMode="cover" // Adjust the resizeMode as needed
        />
        <Image
          source={require('./assets/girl.png')}
          style={styles.image}
          resizeMode="cover" // Adjust the resizeMode as needed
        />
      </ScrollView>
      <NavigationContainer>
      {/* Tab Navigator */}
      <Tab.Navigator
     
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/aa.png')}
                style={[styles.icon, { tintColor: color }]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/aa.png')}
                style={[styles.icon, { tintColor: color }]}
              />
            ),
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  addressContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  aa: {
    bottom: 59,
    width: '100%',
    height: '84%',
  },
  scrollView: {
    flex: 1,
    bottom: 44,
  },
  scrollViewContent: {
    paddingRight: 60, // Add padding to the right side
  },
  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    marginLeft: 5,
  },
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
  },
  icon: {
    width: 24,
    height: 24,
  },
  
});

export default Address;
