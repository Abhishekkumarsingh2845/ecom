import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const photoWidth = (width - 40) / 2; // Assuming 10 units of margin on each side

const Fav = () => {
  const [ratings, setRatings] = useState([0, 0, 0, 0, 0]); // Initial rating state for each photo

  const handleStarPress = (index) => {
    const newRatings = [...ratings];
    newRatings[index] = newRatings[index] === 1 ? 0 : 1; // Toggle between 0 and 1
    setRatings(newRatings);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.row}>
          {[...Array(2)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.item}>
              <Image source={require('../assets/photo.png')} style={styles.photo} />
              <View style={styles.starContainer}>
                {[...Array(5)].map((_, starIndex) => (
                  <TouchableOpacity
                    key={starIndex}
                    onPress={() => handleStarPress(rowIndex * 2 + starIndex)}
                  >
                    <Icon
                      name={ratings[rowIndex * 2 + starIndex] ? 'staro' : 'ios-star-outline'}
                      size={23}
                      color={ratings[rowIndex * 2 + starIndex] ? 'gold' : 'gray'}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.mai}>
                <Text style={styles.aa}>LIME</Text>
                <Text style={styles.aaa}>SHIRT</Text>
                <Text style={styles.aap}>COLOR:BLUE SIZE:L</Text>
                <Text style={styles.aaaa}>10$</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {[...Array(2)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.item}>
          
              <View style={styles.starContainer}>
                {[...Array(5)].map((_, starIndex) => (
                  <TouchableOpacity
                    key={starIndex}
                    onPress={() => handleStarPress(rowIndex * 2 + starIndex)}
                  >
                    <Icon
                      name={ratings[rowIndex * 2 + starIndex] ? 'staro' : 'ios-star-outline'}
                      size={23}
                      color={ratings[rowIndex * 2 + starIndex] ? 'gold' : 'gray'}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.mai}>
                <Text style={styles.aa}>LIME</Text>
                <Text style={styles.aaa}>SHIRT</Text>
                <Text style={styles.aap}>COLOR:BLUE SIZE:L</Text>
                <Text style={styles.aaaa}>10$</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.row}>
          {[...Array(2)].map((_, rowIndex) => (
            <View key={rowIndex} style={styles.item}>
             
              <View style={styles.starContainer}>
                {[...Array(5)].map((_, starIndex) => (
                  <TouchableOpacity
                    key={starIndex}
                    onPress={() => handleStarPress(rowIndex * 2 + starIndex)}
                  >
                    <Icon
                      name={ratings[rowIndex * 2 + starIndex] ? 'staro' : 'ios-star-outline'}
                      size={23}
                      color={ratings[rowIndex * 2 + starIndex] ? 'gold' : 'gray'}
                    />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.mai}>
                <Text style={styles.aa}>LIME</Text>
                <Text style={styles.aaa}>SHIRT</Text>
                <Text style={styles.aap}>COLOR:BLUE SIZE:L</Text>
                <Text style={styles.aaaa}>10$</Text>
              </View>
            </View>
          ))}
        </View>
        {/* Add more rows as needed */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item: {
    alignItems: 'center',
  },
  photo: {
    width: photoWidth,
    height: photoWidth,
    borderRadius: 5,
    marginBottom: -5,
  },
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginLeft: -62,
  },
  mai: {
    flexDirection: 'column',
    marginTop: -1,
    marginLeft:-19,
  },
  aa: {
    fontSize: 11,
    color: '#9B9B9B',
  },
  aaa: {
    fontSize: 13,
    color: 'black',
  },
  aap: {
    fontSize: 11,
    color: '#9B9B9B',
    letterSpacing: 2,
  },
  aaaa: {
    fontSize: 15,
    color: 'black',
  },
});

export default Fav;
