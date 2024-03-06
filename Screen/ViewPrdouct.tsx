import react from 'react';
import {Text,View,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native';

function signup (){
  return (
      <View style={styles.container}>
        <TouchableOpacity  style={{ backgroundColor: 'red', padding: 20, borderRadius: 55,left:4,top:-10,width:390,height:70 }}>
        <Text style={{ color: 'white', fontWeight: 'bold' ,left:92,fontSize:22,}}>View All Product</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput}>Tops</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput} >Jeans</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput} >Shirt</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput} >Trouser</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput} >Knitwear</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput} >Blazer</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput}>outwear</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput} >skrit</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style={styles.containerInput} >Dresses</Text>
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
  containerInput: {
    width:390,
    height:70,
    backgroundColor:'white',
    fontWeight: 'bold',
    fontSize:20,
    bottom:-40,
  
  }
});

  export default signup;