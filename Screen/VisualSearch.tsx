import react from 'react';
import {Text,View,StyleSheet,TextInput,ImageBackground,TouchableOpacity} from 'react-native';

function signup (){
  return (
      
        <ImageBackground source={require("./assets/aa.png")} style={styles.aa}>
          <Text style={styles.tex}>Search for an outfit by{"\n"} taking a photo or uploading{"\n"} a Image</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Take a Photo</Text>
        </TouchableOpacity>
        </ImageBackground>
  );
}
const styles=StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tex:{
  fontSize:24,
  fontWeight:'bold',
  color:"white",
  top:442,
  left:22,
  marginTop:22,
  
  },
  aa:{
    width:'100%',
    height:"100%",
  },
  
  button: {
    backgroundColor: 'red',
     width:"95%",
     height:"5%",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 160,
    top:552,
    left:20,
   
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginTop: 20,
  },
});

  export default signup;