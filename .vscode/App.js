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
  Dimensions,Button // Import Dimensions for screen size detection
} from 'react-native';

const Address = ({ navigation }) => {
  return (
  
      <View style={styles.addressContainer}>
        <Image source={require('./assets/bb.png')} style={styles.aa}
           resizeMode="contain" ></Image>
      
      </View>
  );
};

const { width } = Dimensions.get('window'); // Get the width of the screen

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  aa:{
    bottom:46,
    width:'100%',
    height:"84%",
  }

});

export default Address;
