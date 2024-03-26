import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Button
} from 'react-native';

const MyBagScreen = () => {
  const [counter, setCounter] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>MY BAG</Text>
      <View style={styles.c3}>
        <Image
          source={require('./assets/girl.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <View style={styles.first}>
            <Text style={styles.text}>Pullover</Text>
            <Image source={require('./assets/icon.jpg')} style={styles.icon} />
          </View>
          <View style={styles.two}>
            <Text style={styles.txt}>Color:Black</Text>
            <Text style={styles.tt}>size:L</Text>
          </View>
          <View style={styles.tell}>
            <Text style={styles.plus} onPress={incrementCounter}>+</Text>
            <Text style={styles.counter}>{counter}</Text>
            <Text style={styles.minus} onPress={decrementCounter}>-</Text>
            <Text style={styles.total}>${counter}</Text>
          </View>
        </View>
      </View>
   
      <View style={styles.c3}>
        <Image
          source={require('./assets/bags.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <View style={styles.first}>
            <Text style={styles.text}>Pullover</Text>
            <Image source={require('./assets/icon.jpg')} style={styles.icon} />
          </View>
          <View style={styles.two}>
            <Text style={styles.txt}>Color:Black</Text>
            <Text style={styles.tt}>size:L</Text>
          </View>
          <View style={styles.tell}>
            <Text style={styles.plus} onPress={incrementCounter}>+</Text>
            <Text style={styles.counter}>{counter}</Text>
            <Text style={styles.minus} onPress={decrementCounter}>-</Text>
            <Text style={styles.total}>${counter}</Text>
          </View>
        </View>
      </View>
    
      <View style={styles.c3}>
        <Image
          source={require('./assets/bb.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <View style={styles.first}>
            <Text style={styles.text}>Pullover</Text>
            <Image source={require('./assets/icon.jpg')} style={styles.icon} />
          </View>
          <View style={styles.two}>
            <Text style={styles.txt}>Color:Black</Text>
            <Text style={styles.tt}>size:L</Text>
          </View>
          <View style={styles.tell}>
            <Text style={styles.plus} onPress={incrementCounter}>+</Text>
            <Text style={styles.counter}>{counter}</Text>
            <Text style={styles.minus} onPress={decrementCounter}>-</Text>
            <Text style={styles.total}>${counter}</Text>
          </View>
        </View>
      </View>
      <TextInput style={styles.promo}
      placeholder='Type your Promo Code'
      placeholderTextColor='black'
      onFocus={() => setModalVisible(true)}/>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
        <TextInput style={styles.gg}
        placeholder='Enter your promo code'
        placeholderTextColor='whitesmoke'></TextInput>
           <Text style={styles.pro}>Your Promo Codes</Text>
           <View style={styles.vv}>
           <View style={styles.vvv}>
           <Image source={require('./assets/bg.png')}
           style={styles.i1}/>
           <Image source={require('./assets/discount.png')}
           style={styles.i11}/>
           </View>
          
          <View style={styles.line}>
            <Text style={styles.line}>Personal offer
              </Text>
              <Text style={styles.liines}>Personal offer
              </Text>
              <Text style={styles.liines}>summer2022
              </Text>
          
          </View>
          <TouchableOpacity style={styles.modalButton} onPress={() => console.log("Button Pressed")}>
        <Text style={styles.modalButtonText}>Apply</Text>
      </TouchableOpacity>
           </View>
           <View style={styles.vv}>
           <View style={styles.vvv}>
           <Image source={require('./assets/bg.png')}
           style={styles.i1}/>
           <Image source={require('./assets/discount.png')}
           style={styles.i11}/>
           </View>
          
          <View style={styles.line}>
            <Text style={styles.line}>Personal offer
              </Text>
              <Text style={styles.liines}>Personal offer
              </Text>
              <Text style={styles.liines}>summer2022
              </Text>
          
          </View>
          <TouchableOpacity style={styles.modalButton} onPress={() => console.log("Button Pressed")}>
        <Text style={styles.modalButtonText}>Apply</Text>
      </TouchableOpacity>
           </View>
           <View style={styles.vv}>
           <View style={styles.vvv}>
           <Image source={require('./assets/bg.png')}
           style={styles.i1}/>
           <Image source={require('./assets/discount.png')}
           style={styles.i11}/>
           </View>
          
          <View style={styles.line}>
            <Text style={styles.line}>Personal offer
              </Text>
              <Text style={styles.liines}>Personal offer
              </Text>
              <Text style={styles.liines}>summer2022
              </Text>
          
          </View>
          <TouchableOpacity style={styles.modalButton} onPress={() => console.log("Button Pressed")}>
        <Text style={styles.modalButtonText}>Apply</Text>
      </TouchableOpacity>
           </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => console.log("Checkout")}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'whitesmoke',
    paddingVertical: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
  },
  first: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: -12,
  },
  c3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    height: 150, // Adjust height as needed
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'white',
    marginBottom: 20, // Adjust margin bottom as needed
  },
  image: {
    width: '30%',
    height: '100%',
    borderRadius: 5,
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  two: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  tell: {
    flexDirection: 'row',
    marginTop: -5,
    gap: 6,
  },
  textContainer: {
    flex: 1,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Metropolis',
    marginLeft: 12,
    color: 'black',
  },
  txt: {
    fontSize: 14,
    fontFamily: 'Metropolis',
    marginLeft: 12,
    marginBottom: 5,
    color: 'black',
  },
  tt: {
    fontSize: 14,
    fontFamily: 'Metropolis',
    marginLeft: 12,
    marginBottom: 5,
    color: 'black',
  },
  plus: {
    fontSize: 33,
    color: 'black',
    marginLeft: 12,
  },
  counter: {
    fontSize: 33,
    color: 'black',
    marginLeft: 12,
  },
  minus: {
    fontSize: 40,
    color: 'black',
    marginLeft: 12,
  },
  total: {
    fontSize: 30,
    color: 'black',
    marginLeft: 80,
  },
  promo: {
     width:'95%',
     height:"10%",
     borderRadius:5,
     backgroundColor:'white',
     marginLeft:10,
  },
  checkoutButton: {
    width: '95%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft:10,
  },
  checkoutText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
   // semi-transparent black background
  },
  modalContent: {
    backgroundColor: 'whitesmoke',
   
    borderRadius: 10,
    elevation: 9,
  marginBottom:-249,
    width:'100%',
    height:'60%',
  
  },
  gg:{
    width:'95%',
    height:'10%',
    marginTop:41,
    marginLeft:12,
    borderRadius:4,
    backgroundColor: 'white',

  },
  pro :{
    fontSize:22,
    color:'black',
    fontWeight:'bold',
    marginTop:12,
    marginLeft:16,
  },
  vv : {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', 
    flexDirection:'column'

 },
 vvv:{
  width:"90%",
    height:"60%",
    backgroundColor: 'white',


 },
    i1: {
      width: '25%',
      height: '100%',
      resizeMode:'cover',
      position: 'absolute',
    },
    i11: {
      width: '20%',
      height: '100%',
      resizeMode:'contain',
      position: 'absolute',
      zIndex: 1, 
    },
    line: {
      flexDirection:'column',
      marginTop:-32,

    },
    liines: {
      fontSize:17,
      color:'black',

     
    },
    modalButton: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 15,
      alignItems: 'center',
      marginTop: -35,
      width:"29%",
      height:"11%",
      marginLeft:202,
    },
    modalButtonText: {
      color: 'white',
      fontSize: 15,
      margin:-12,
      fontWeight: 'bold',
    },
});

export default MyBagScreen;
