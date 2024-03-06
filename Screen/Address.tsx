import react, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,ScrollView
} from 'react-native';

function signup() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
     
      <View style={styles.aa}>
        <Text style={styles.ft}>Harsh</Text>
        <TouchableOpacity>
        <Text style={styles.pp}>Edit</Text>
        </TouchableOpacity>
        
        <Text style={styles.ff}>D-107 .{'\n'}Vasundhara,Ghaziabad,U.P</Text>

        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          style={styles.ch}
        />
        <Text style={styles.fttt}>Use This Address</Text>
      </View>
      <View style={styles.aa}>
        <Text style={styles.ft}>Harsh</Text>
        <TouchableOpacity>
        <Text style={styles.pp}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.ff}>D-107 .{'\n'}Vasundhara,Ghaziabad,U.P</Text>

        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          style={styles.ch}
        />
        <Text style={styles.fttt}>Use This Address</Text>
      </View>
      <View style={styles.aa}>
        <Text style={styles.ft}>Harsh</Text>
        <TouchableOpacity>
        <Text style={styles.pp}>Edit</Text>
        </TouchableOpacity>
        <Text style={styles.ff}>D-107 .{'\n'}Vasundhara,Ghaziabad,U.P</Text>

        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          style={styles.ch}
        />
        <Text style={styles.fttt}>Use This Address</Text>
      </View>
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
  aa: {
    width: 390,
    height: 200,
    borderWidth: 0.2,
    backgroundColor: 'white',
    bottom: 108,
    marginTop: 22,
  },
  ft: {
    fontSize: 22,
    left: 15,
  },
  ff: {
    fontSize: 18,
    left: 15,
    marginTop: 23,
  },
  ch: {
    left: 12,
    top: 26,
  },
  fttt: {
    fontSize: 16,
    left: 53,
    top:-2,
  },
  pp:{
    left:355,
    color: 'red'
  }
});

export default signup;
