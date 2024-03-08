import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Dimensions } from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign UP</Text>
      <TextInput style={styles.containerInput} placeholder='Name' />
      <TextInput style={styles.containerInput} placeholder='Email' />
      <TextInput style={styles.containerInput} placeholder='Password' />
      <Button title='SIGN UP' onPress={() => navigation.navigate('Login')} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: Dimensions.get('window').width * 0.1, // Responsive font size
    color: "black",
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerInput: {
    width: Dimensions.get('window').width * 0.8, // Responsive width
    height: 50,
    marginTop: 15,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 10,
  }
});

export default Signup;
