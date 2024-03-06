import react from 'react';
import {Text,View,StyleSheet,TextInput,Button} from 'react-native';

function signup (){
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign UP</Text>
        <TextInput style={styles.containerInput} placeholder='Name'/>
        <TextInput style={styles.containerInput} placeholder='Email'/>
        <TextInput style={styles.containerInput} placeholder='password'/>
        <Button title='SIGN UP' color="red" />
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
    bottom:180,
    right:140,
  },
  containerInput: {
    width:390,
    height:50,
    marginTop:15, 
    backgroundColor:'white',

    bottom:20,
  
  }
});

  export default signup;