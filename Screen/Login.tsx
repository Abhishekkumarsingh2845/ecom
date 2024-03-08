import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Dimensions } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const Login = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput style={styles.containerInput} placeholder='Name' />
      <TextInput style={styles.containerInput} placeholder='Email' />
      <TextInput style={styles.containerInput} placeholder='Password' />
      <Text style={styles.textp} onPress={()=>navigation.navigate('Forgot')}>Forgot Password</Text>
      <Button title='LOGIN' onPress={() => navigation.navigate('Visual')} color="red" />
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
  },
  textp:{
    fontSize: Dimensions.get('window').width * 0.1, // Responsive font size
    color: "black",
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default Login;



