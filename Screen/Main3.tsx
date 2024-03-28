import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const Address = ({ navigation }) => {
  return (
    <View style={styles.addressContainer}>
      <Image
        source={require('./assets/main.png')}
        style={styles.backgroundImage}
        resizeMode='contain'
      />
      <Text style={styles.tt}>Summar{'\n'} Sale</Text>
      <Image
        source={require('./assets/ye.png')}
        style={styles.Image}
        resizeMode='contain'
      />
      <Image
        source={require('./assets/ag.png')}
        style={styles.Ie}
        resizeMode='contain'
      />
      
    </View>
  );
};

const { width } = Dimensions.get('window'); // Get the width of the screen

const styles = StyleSheet.create({
  addressContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    position: 'absolute',
    top: -163.9,
    left: 0,
    width: '100%',
    height: '100%',
  },
  imageRow: {
    flexDirection: 'row', // Arrange images horizontally
    marginBottom: 10, // Add margin between rows
  },
  text: {
    fontSize: 24, // Adjust as needed
    color: 'black',
    textAlign: 'right',
    marginTop: 20, // Adjust as needed
    marginRight: 20, // Adjust as needed
  },
  Image:{
    position: 'absolute',
    top: 155,
    left: 160,
    width: '50%',
    height: '100%',
  },
  Ie:{
    position: 'absolute',
    top: 237,
    left: -10,
    
    width: '50%',
    height: '100%',
  },
  tt:{
    fontSize:33,
    color:'red',
    top :330,
    right:70,
    fontWeight:'bold',
  },
});

export default Address;


