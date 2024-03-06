import react from 'react';
import {Text,View,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';

function signup (){
  return (
      <View style={styles.container}>
        <Image source={require("./assets/bags.png")} style={styles.aa}/>
        <Text style={styles.aaa}>SUCCESS !</Text>
        <TouchableOpacity  style={{ backgroundColor: 'red', padding: 20, borderRadius: 5,left:12,top:162,width:390,height:70,borderRadius:33 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' ,left:125,fontSize:22 }}>Press Me</Text>
      </TouchableOpacity>
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
  aa:{
    width:200,
    height:200,
    top:-30,
    right:30,
  },
  aaa:{
    fontSize:40,
    top:12,
  }
});

  export default signup;