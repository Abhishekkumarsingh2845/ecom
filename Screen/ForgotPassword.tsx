import react from 'react';
import {Text,View,StyleSheet,TextInput,Button,Dimensions} from 'react-native';

const Forgot = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Forgot Password</Text>
        <Text style={styles.qq}>Please enter your email address You will receive .{'\n'}a link to create a new passsword via email</Text>
        <TextInput style={styles.containerInput} placeholder='Email'/>
        <Button title='SEND' color="red" />
      </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text : {
    fontSize:Dimensions.get('window').width * 0.1,
    color:"black",
    fontWeight: 'bold',
    bottom:200,
    left:-42,
  },
  qq: {
    fontSize:Dimensions.get('window').width *  0.1, 
    bottom:44,
    color:'black',

  },
  containerInput: {
    width:Dimensions.get('window').width * 0.8, 
    height:70,
    marginTop:15, 
    backgroundColor:'white',

    bottom:20,
  
  }
});

  export default Forgot;