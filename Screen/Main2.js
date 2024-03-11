import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

const Address = ({ navigation }) => {
  return (
    <View style={styles.addressContainer}>
      <ImageBackground
        source={require('./assets/girl1.png')}
        style={styles.aa}
        resizeMode='contain'
      >
      </ImageBackground>
      <Text style={styles.text}>Street Clothes</Text>
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
    width: "100%",
    height: "100%",
    bottom: 335,
  },
  text: {
    fontSize:100,
    color: 'black',
    textAlign: 'right',
    
  },
});

export default Address;
