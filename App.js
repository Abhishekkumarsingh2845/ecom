import React from 'react';
import { Text, View, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { launchCamera } from 'react-native-image-picker'; // Import launchCamera from react-native-image-picker

const Visual = ({ navigation }) => {

  // Function to handle opening the camera
  const openCamera = () => {
    launchCamera({ mediaType: 'photo' }, (response) => {
      if (!response.didCancel) {
        // Navigate to ViewProduct screen and pass the captured image URI
        navigation.navigate('ViewProduct', { imageUri: response.uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/aa.png")} style={styles.backgroundImage}>
        <Text style={styles.text}>Search for an outfit by{"\n"} taking a photo or uploading{"\n"} an image</Text>
        <TouchableOpacity style={styles.button} onPress={openCamera}>
          <Text style={styles.buttonText}>Take a Photo</Text>
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
