import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TextInput, Dimensions,Button } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const StarRating = ({ rating, onPress }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Pressable key={i} onPress={() => onPress(i)}>
          <Text style={[styles.star, i <= rating ? styles.filledStar : null]}>
            &#9733;
          </Text>
        </Pressable>,
      );
    }
    return stars;
  };

  return <View style={styles.starContainer}>{renderStars()}</View>;
};

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleStarPress = (selectedRating) => {
    setRating(selectedRating);
  };

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
            <Text style={styles.modalText}>What is your Rate ?</Text>
            <StarRating rating={rating} onPress={handleStarPress} />
            <Text style={styles.modalText}>
              Please share your opinion{'\n'} about the product
            </Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Write your comment here..."
                onChangeText={setComment}
                value={comment}
                multiline={true}
                numberOfLines={4}
              />
            </View>
            <Button title='SEND REVIEW'  color="red" />
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
    backgroundColor: 'whitesmoke',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'linen',
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
    width: windowWidth - 40,
    height: '110%',
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
    fontSize: 18,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 3,
  },
  star: {
    fontSize: 50,
    marginRight: 5,
    fontWeight: 'bold',
  },
  filledStar: {
    color: 'gold',
  },
  modalTet: {
    marginTop: 25,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 22,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: '90%',
    marginTop: 20,
    padding: 5,
    backgroundColor: 'white',
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
});

export default App;
