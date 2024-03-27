import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={()=>navigation.navigate('Favorite')}>Profile</Text>
      <Text style={styles.userInfo}>HARSH.{'\n'}singhrnq231217@gmail.com</Text>
      <MenuButton title="My Order" />
      <MenuButton title="Shipping Address" />
      <MenuButton title="Payment Method" />
      <MenuButton title="Promo Code" />
      <MenuButton title="My Review" />
      <MenuButton title="Settings" />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuButton: {
    width: width - 40,
    height: 70,
    backgroundColor: 'white',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  menuButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const MenuButton = ({ title }) => (
  <TouchableOpacity style={styles.menuButton}>
    <Text style={styles.menuButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default Profile;
