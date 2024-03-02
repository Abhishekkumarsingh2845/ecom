import React from 'react';
import { Tab, Text, TabView, Image } from '@rneui/themed';
import { View, StyleSheet, ScrollView } from 'react-native';
import imag1 from "./src/Screen/Images/image 3.png";

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <>
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item title="Women" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="Man" titleStyle={{ fontSize: 12 }} />
        <Tab.Item title="Kids" titleStyle={{ fontSize: 12 }} />
      </Tab>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.promotion}>
            <Text style={styles.promotionText}>SUMMER SALES</Text>
            <Text style={styles.promotionSubtitle}>Up to 50% off</Text>
          </View>
          <View style={styles.box}>
            <Image src={imag1}/>
          </View>
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
          <View style={styles.box} />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,

  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  promotion: {
    width: 343,
    height: 100,
    borderRadius: 13,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    left:30,
  },
  promotionText: {
    fontSize: 22,
    color: 'white',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  promotionSubtitle: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
    width: 343,
    height: 100,
    backgroundColor: 'skyblue',
    marginBottom: 20,
    left:30,
    borderRadius: 13,
    
  },
});
