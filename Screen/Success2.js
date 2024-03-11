import React from "react";
import { View, ImageBackground, StyleSheet, StatusBar,Text,TouchableOpacity } from "react-native";

const Success = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/uu.png')} style={styles.imageBackground}>
        <StatusBar // StatusBar component
          backgroundColor="gold" // Set background color of status bar
          barStyle="dark-content" // Set style of status bar content (dark or light)
        />
        <Text style={styles.aa}>Success!</Text>
        <Text style={styles.ap}>Your order will be delivered soon.{'\n'}
Thank you for choosing our app!</Text>
<TouchableOpacity style={styles.button} >
      <Text style={styles.buttonText}>Continue shopping</Text>
    </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    // Additional styles for the ImageBackground if needed
  },
  aa:{
    fontSize:34,
    color: 'black',
    fontWeight:'bold',
    fontFamily:"Metropolis",
    left:155,
    top:121,
  },
  ap:{
    fontSize:16,
    textAlign:'center',
    top:135,
    color: 'black',
    fontFamily: 'Metropolis', 
    fontWeight:'semi-Bold',
  },
  dd:{
    width:111,
    height:33,
    borderWidth:1,
    },
    button: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 15,
      alignItems: 'center',
      top:155,
      left:"25%",
      width:"50%"
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
});

export default Success;
