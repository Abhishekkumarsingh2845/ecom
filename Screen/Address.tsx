import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,Button // Import Dimensions for screen size detection
} from 'react-native';

const Address = ({ navigation }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.addressContainer}>
        <Text style={styles.name}>Harsh</Text>
        <TouchableOpacity>
          <Text style={styles.edit} >Edit</Text>
        </TouchableOpacity>
        <Text style={styles.address}>D-107{'\n'}Vasundhara, Ghaziabad, U.P</Text>
        <View style={styles.checkBoxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={styles.checkBox}
          />
          <Text style={styles.useAddressText}>Use This Address</Text>
          <Button title='LOGIN' onPress={() => navigation.navigate('Profile')} color="red" />
        </View>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window'); // Get the width of the screen

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  addressContainer: {
    width: width - 20, // Adjusted width to fit screen size
    height: 200,
    borderWidth: 0.2,
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 5,
  },
  edit: {
    position: 'absolute',
    right: 5,
    top: 5,
    color: 'red'
  },
  address: {
    fontSize: 18,
    marginBottom: 20,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    marginRight: 10,
  },
  useAddressText: {
    fontSize: 16,
  },
});

export default Address;
