import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>SELECT SIZE</Text>
            <View style={styles.sizeOptionsContainer}>
              <Pressable
                style={[styles.sizeButton]}
                onPress={() => console.log('XL selected')}
              >
                <Text style={styles.sizeButtonText}>XL</Text>
              </Pressable>
              <Pressable
                style={[styles.sizeButton]}
                onPress={() => console.log('XXL selected')}
              >
                <Text style={styles.sizeButtonText}>XXL</Text>
              </Pressable>
              <Pressable
                style={[styles.sizeButton]}
                onPress={() => console.log('L selected')}
              >
                <Text style={styles.sizeButtonText}>L</Text>
              </Pressable>
              <Pressable
                style={[styles.sizeButton]}
                onPress={() => console.log('SL selected')}
              >
                <Text style={styles.sizeButtonText}>SL</Text>
                </Pressable>
                <View style={styles.sizeInfoContainer}>
                <Text style={styles.sizeInfoText}>SIZE INFO</Text>
              </View>
              <Pressable
                style={[styles.sizeButtonn, styles.addToFavoritesButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.sizeButtonTextt}>ADD TO FAVORITES</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'whitesmoke',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '60%',
    top: 170,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonOpen: {
    backgroundColor: '#2196F3',
  },
  buttonClose: {
    backgroundColor: '#f44336',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  sizeOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  sizeButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,

   
  },
  sizeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    left:22,
  },
  addToFavoritesButton: {
    backgroundColor: 'red', // Change color as needed
  },
  sizeButtonn: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    
    width:'115%',
    borderRadius: 10,
   left:-330,
    top:170
  },
  sizeButtonTextt: {
    color: 'white',
    fontWeight: 'bold',
    left:66,
  
  },
  sizeInfoContainer: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    
    justifyContent:'center',
    marginVertical: 5, 
    left:-210,
    top:100,// Added to provide vertical spacing between size info and other elements
  },
  sizeInfoText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default App;
