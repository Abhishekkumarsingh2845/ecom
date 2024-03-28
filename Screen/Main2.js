import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';

const main = ({ navigation }) => {
  return (
    <View style={styles.addressContainer}>
      <Image
        source={require('./assets/girl1.png')}
        style={styles.backgroundImage}
        resizeMode='contain'
      />
      <ScrollView style={styles.scrollView} horizontal={true} contentContainerStyle={styles.scrollViewContent}>
        {/* First Row of Images */}
        <View style={styles.imageRow}>
          <Image
            source={require('./assets/girl.png')}
            style={styles.image}
            resizeMode="cover" // Adjust the resizeMode as needed
          />
          <Image
            source={require('./assets/girl.png')}
            style={styles.image}
            resizeMode="cover" // Adjust the resizeMode as needed
          />
          <Image
            source={require('./assets/girl.png')}
            style={styles.image}
            resizeMode="cover" // Adjust the resizeMode as needed
          />
        </View>
        {/* Second Row of Images */}
        <View style={styles.imageRow}>
          <Image
            source={require('./assets/girl.png')}
            style={styles.image}
            resizeMode="cover" // Adjust the resizeMode as needed
          />
          <Image
            source={require('./assets/girl.png')}
            style={styles.image}
            resizeMode="cover" // Adjust the resizeMode as needed
          />
          <Image
            source={require('./assets/girl.png')}
            style={styles.image}
            resizeMode="cover" // Adjust the resizeMode as needed
          />
        </View>
      </ScrollView>
    </View>
  );
};

const { width } = Dimensions.get('window'); // Get the width of the screen

const styles = StyleSheet.create({
  addressContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  backgroundImage: {
    position: 'absolute',
    top: -235,
    left: 0,
    width: '100%',
    height: '100%',
  },
  imageRow: {
    flexDirection: 'row', // Arrange images horizontally
    marginBottom: 10, // Add margin between rows
  },
  text: {
    fontSize: 24, // Adjust as needed
    color: 'black',
    textAlign: 'right',
    marginTop: 20, // Adjust as needed
    marginRight: 20, // Adjust as needed
  },
  image: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    marginLeft: 5,
    top: 240,
  },
  scrollView: {
    flex: 1,
    bottom: 44,
  },
  scrollViewContent: {
    paddingRight: 80, // Add padding to the right side
  },
});

export default main;
