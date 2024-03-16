import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Slider from "@react-native-community/slider";

const App = () => {
  const [price, setPrice] = useState(0);
  const ColorCircle = ({ color, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.colorCircle, { backgroundColor: color }]} />
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Prince range</Text>
        <View style={styles.contentContainer}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={1000}
            step={1}
            value={price}
            onValueChange={setPrice}
            minimumTrackTintColor="red"
            maximumTrackTintColor="grey"
          />
          <View style={styles.sliderLabels}>
            <Text style={styles.sliderLabel}>{price}</Text>
            <Text style={styles.sliderLabel}>1000</Text>
          </View>
        </View>

        <Text style={styles.title}>Color</Text>
        <View style={styles.contentContainer}>
          <ColorCircle color="red" onPress={() => setSelectedColor("red")} />
          <ColorCircle color="yellow" onPress={() => setSelectedColor("yellow")} />
          <ColorCircle color="orange" onPress={() => setSelectedColor("orange")} />
          <ColorCircle color="pink" onPress={() => setSelectedColor("pink")} />
          <ColorCircle color="blue" onPress={() => setSelectedColor("blue")} />
        </View>

        <Text style={styles.title}>Sizes</Text>
        <View style={styles.contentContainer}>
          {/* Content for Sizes */}
        </View>

        <Text style={styles.title}>Category</Text>
        <View style={styles.contentContainer}>
          {/* Content for Category */}
        </View>

        <Text style={styles.title}>Brand</Text>
        <View style={styles.contentContainer}>
          {/* Content for Brand */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  container: {
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  contentContainer: {
    backgroundColor: 'white',
    borderColor: 'black',
    padding: 10,
    marginTop: 10,
    width: 300,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  slider: {
    width: '110%', // Adjusted width to fit within the container
    marginTop: 10,
    left:62
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  sliderLabel: {
    fontSize: 16,
    color: 'black',
  },
  colorCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default App;




