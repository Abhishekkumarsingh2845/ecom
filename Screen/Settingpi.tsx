import React,{useState} from 'react';
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView,Switch } from 'react-native';

function signup() {

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.text}>Settings</Text>
      <Text style={styles.te}>Personal information</Text>
      <TextInput style={styles.containerInput} placeholder="Name" />
      <TextInput style={styles.containerInput} placeholder="Email" />
      <TextInput style={styles.containerInput} placeholder="Password" />
      <Text style={styles.aaa}>Notifications</Text>
      <Text style={styles.aa}>Sales</Text>
      <Text style={styles.aa}>New arrival</Text>
      <Text style={styles.aa}>Delivery Status Change</Text>
      <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.ii}
      />
            <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.ii}
      />
      <Switch
      trackColor={{ false: "#767577", true: "#81b0ff" }}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={styles.ii}
      />


    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    bottom: 80,
    right: 140,
  },
  te: {
    fontSize: 18,
    bottom: 70,
    left: -127,
  },
  containerInput: {
    width: 390,
    height: 50,
    marginTop: 55,
    backgroundColor: 'white',
    bottom: 110,
  },
  aaa: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 22,
    right: 134,
  },
  aa: {
    fontSize: 22,
    marginTop: 22,
    right: 134,
    paddingLeft: 45,
  },
  ii:{
    left:182,
    bottom:151,
    marginTop: 22,

  }
});

export default signup;
