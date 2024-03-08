import React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const Visual = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/aa.png")} style={styles.backgroundImage}>
        <Text style={styles.text}>Search for an outfit by{"\n"} taking a photo or uploading{"\n"} an image</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={()=>navigation.navigate('ViewProduct')}>Take a Photo</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: width * 0.05, // Responsive font size
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: height * 0.2, // Responsive margin top
  },
  button: {
    backgroundColor: 'red',
    width: width * 0.8, // Responsive width
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: height * 0.05, // Responsive margin top
  },
  buttonText: {
    fontSize: width * 0.04, // Responsive font size
    color: '#333',
    textAlign: 'center',
  },
});

export default Visual;
