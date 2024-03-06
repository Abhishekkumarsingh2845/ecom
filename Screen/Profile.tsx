import react from 'react';
import {Text,View,StyleSheet,TextInput,Button} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const Profile: React.FC<Props> = ({ navigation }) => {
  return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
        <Text style={styles.cc}>HARSH.{'\n'}singhrnq231217@gmail.com</Text>
        <Text style={styles.containerInput}>My oder</Text>
        <Text style={styles.containerInput} >Shipping Address</Text>
        <Text style={styles.containerInput} >Payment Method</Text>
        <Text style={styles.containerInput} >PromoCode</Text>
        <Text style={styles.containerInput} >My Review</Text>
        <Text style={styles.containerInput} >Setting</Text>
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
  cc: {
      left:121,
      bottom:42,
  },
  text : {
    fontSize:40,
    color:"black",
    fontWeight: 'bold',
    bottom:60,
    right:140,
  },
  containerInput: {
    width:390,
    height:70,
    backgroundColor:'white',
    marginTop:33,
    fontWeight: 'bold',
    bottom:20,
    fontSize:20,
  
  }
});

  export default Profile;