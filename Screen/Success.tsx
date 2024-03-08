import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

const Success = ({navigation}) => {
  return (
    <View style={styles.container}>
     
      <Text style={styles.text}>SUCCESS!</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={()=>navigation.navigate('Address')}>Press Me</Text>
      </TouchableOpacity>
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
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 33,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
  },
});

export default Success;
