import React from 'react';
import { Tab, Text } from '@rneui/themed';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
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
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.promotion}>
            <Text style={styles.promotionText}>SUMMER SALES</Text>
            <Text style={styles.promotionSubtitle}>Up to 50% off</Text>
          </View>
          {[...Array(4)].map((_, index) => (
            <View style={styles.box} key={index}>
              <Text style={styles.aa}>NEW</Text>
              <Image source={require("./assets/black.png")} style={styles.image} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  scrollView: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  promotion: {
    width: '100%',
    height: 100,
    borderRadius: 13,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
    width: '100%',
    height: 150,
    marginBottom: 20,
    borderRadius: 13,
    backgroundColor: 'azure',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    left:66,
    borderBottomRightRadius: 13,
  },
aa:{
 fontSize:22,
 fontWeight:'bold',
 left:-99,
 top:52,
}
});
