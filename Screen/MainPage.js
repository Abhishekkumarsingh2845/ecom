import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

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
    </View>
  );
};

const { width } = Dimensions.get('window'); // Get the width of the screen

const styles = StyleSheet.create({
  addressContainer: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  aa: {
    bottom: 59,
    width: '100%',
    height: '84%',
  },
  scrollView: {
    flex: 1,
    bottom:44
  },
  scrollViewContent: {
    paddingRight: 60, // Add padding to the right side
  },
  image: {
     
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    marginLeft: 5,
  },
});

export default Address;
