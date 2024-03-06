import react from 'react';
import {Text,View,StyleSheet,TextInput,Button} from 'react-native';

function signup (){
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
    fontSize:40,
    color:"black",
    fontWeight: 'bold',
    bottom:200,
    left:-42,
  },
  qq: {
    fontSize:18,
    bottom:44,
    color:'black',

  },
  containerInput: {
    width:390,
    height:70,
    marginTop:15, 
    backgroundColor:'white',

    bottom:20,
  
  }
});

  export default signup;