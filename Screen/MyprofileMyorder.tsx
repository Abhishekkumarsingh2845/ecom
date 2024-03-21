import React from 'react';
import { Tab, Text } from '@rneui/themed';
import { View, StyleSheet, ScrollView } from 'react-native';

export default () => {
  const [index, setIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.t1}>My Orders</Text>
      <View style={styles.tabContainer}>
        <Tab
          value={index}
          onChange={(e) => setIndex(e)}
          indicatorStyle={{
            backgroundColor: 'whitesmoke',
            height: 3,
          }}
          variant="primary"
        >
          <Tab.Item title="Delivered" titleStyle={{ fontSize: 12 }} />
          <Tab.Item title="Processing" titleStyle={{ fontSize: 12 }} />
          <Tab.Item title="Cancelled" titleStyle={{ fontSize: 12 }} />
        </Tab>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.c1}>
            {/* Repeat your content as needed */}
            {/* First View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Order No:465456</Text>
              <Text style={styles.value}>21-03-2024</Text>
            </View>
            {/* Second View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Tracking No:IWNCKNCKJWND33</Text>
              
            </View>
            {/* Third View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Quantity:</Text>
              <Text style={styles.value}>1</Text>
              <Text style={styles.label}>Amount:</Text>
              <Text style={styles.value}>$50</Text>
            </View>
            {/* Fourth View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.detail}>Details</Text>
              <Text style={styles.delivered}>Delivered</Text>
            </View>
            {/* Repeat your content as needed */}
          </View>

          <View style={styles.c1}>
            {/* Repeat your content as needed */}
            {/* First View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Order No:</Text>
              <Text style={styles.value}>123456</Text>
              <Text style={styles.value}>21-03-2024</Text>
            </View>
            {/* Second View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Tracking No:</Text>
              <Text style={styles.value}>IWNCKNCKJWND33</Text>
            </View>
            {/* Third View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Quantity:</Text>
              <Text style={styles.value}>1</Text>
              <Text style={styles.label}>Amount:</Text>
              <Text style={styles.value}>$50</Text>
            </View>
            {/* Fourth View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.detail}>Details</Text>
              <Text style={styles.delivered}>Delivered</Text>
            </View>
            {/* Repeat your content as needed */}
          </View>
          <View style={styles.c1}>
            {/* Repeat your content as needed */}
            {/* First View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Order No:</Text>
              <Text style={styles.value}>123456</Text>
              <Text style={styles.value}>21-03-2024</Text>
            </View>
            {/* Second View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Tracking No:</Text>
              <Text style={styles.value}>IWNCKNCKJWND33</Text>
            </View>
            {/* Third View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Quantity:</Text>
              <Text style={styles.value}>1</Text>
              <Text style={styles.label}>Amount:</Text>
              <Text style={styles.value}>$50</Text>
            </View>
            {/* Fourth View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.detail}>Details</Text>
              <Text style={styles.delivered}>Delivered</Text>
            </View>
            {/* Repeat your content as needed */}
          </View>
          <View style={styles.c1}>
            {/* Repeat your content as needed */}
            {/* First View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Order No:</Text>
              <Text style={styles.value}>123456</Text>
              <Text style={styles.value}>21-03-2024</Text>
            </View>
            {/* Second View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Tracking No:</Text>
              <Text style={styles.value}>IWNCKNCKJWND33</Text>
            </View>
            {/* Third View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.label}>Quantity:</Text>
              <Text style={styles.value}>1</Text>
              <Text style={styles.label}>Amount:</Text>
              <Text style={styles.value}>$50</Text>
            </View>
            {/* Fourth View Container */}
            <View style={styles.rowContainer}>
              <Text style={styles.detail}>Details</Text>
              <Text style={styles.delivered}>Delivered</Text>
            </View>
            {/* Repeat your content as needed */}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  tabContainer: {
    marginTop: 10,
    flex: 1,
  },
  t1: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
  },
  c1: {
    width: '90%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    paddingVertical: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    fontSize: 16,
  },
  detail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  delivered: {
    fontSize: 16,
    color: 'green',
  },
  scrollContainer: {
    flex: 1,
  },
});
