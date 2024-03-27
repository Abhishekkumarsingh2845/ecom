import React, { useState } from 'react';
import { Tab, Text } from '@rneui/themed';
import { View, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const Catalog = () => {
  const [isTShirtClicked, setIsTShirtClicked] = useState(false);
  const [isCklemkeClicked, setIsCklemkeClicked] = useState(false);
  const [isMcmClicked, setIsMcmClicked] = useState(false);
  const [isCekmcClicked, setIsCekmcClicked] = useState(false);

  const handleButtonClick = (buttonName, setIsButtonClicked) => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.promotion}>
            <Text style={styles.t1}>WOMEN'S TOPS</Text>
            <View style={styles.topContainer}>
              {/* Content for the container inside "WOMEN'S TOPS" here */}
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={[styles.tabButton, isTShirtClicked ? styles.tabButtonClicked : null]}
                  onPress={() => handleButtonClick("T SHIRT", setIsTShirtClicked)}
                >
                  <Text style={styles.tabButtonText}>T SHIRT</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tabButton, isCklemkeClicked ? styles.tabButtonClicked : null]}
                  onPress={() => handleButtonClick("CKLEMKE", setIsCklemkeClicked)}
                >
                  <Text style={styles.tabButtonText}>Crop Top</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tabButton, isMcmClicked ? styles.tabButtonClicked : null]}
                  onPress={() => handleButtonClick("MCM", setIsMcmClicked)}
                >
                  <Text style={styles.tabButtonText}>Sleeveless</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.tabButton, isCekmcClicked ? styles.tabButtonClicked : null]}
                  onPress={() => handleButtonClick("CEKMC", setIsCekmcClicked)}
                >
                  <Text style={styles.tabButtonText}>Shirt</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
            <View style={styles.bottomContainer}>
              {/* Content for the container below the buttons */}
            </View>
          </View>
          {/* Your other content goes here */}
        </View>

      

           <View>
         
          {[...Array(4)].map((_, index) => (
            <View style={styles.box} key={index}>
              <Text style={styles.aa}>NEW</Text>
              <Image source={require("../assets/black.png")} style={styles.image} />
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
    height: 200, // Adjust height as needed
    borderRadius: 13,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
 
  
  t1: {
    fontSize: 22,
    top: 10, // Adjust top position as needed
  },
  tabButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginRight: 10,
    top: 22,
  },
  tabButtonClicked: {
    backgroundColor: 'black',
  },
  tabButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  topContainer: {
    // Style the container inside "WOMEN'S TOPS" here
  },
  bottomContainer: {
    backgroundColor: 'lightgray',
    padding: 20,
    width:390,
    top:12,
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
    left: 66,
    borderBottomRightRadius: 13,
  },
  aa: {
    fontSize: 22,
    fontWeight: 'bold',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'black',
    color: 'white',
  },
});
export default Catalog;