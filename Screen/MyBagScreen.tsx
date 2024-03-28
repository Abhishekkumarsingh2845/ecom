import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const MyBagScreen = ({navigation}) => {
  const [counter, setCounter] = useState(0);

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
          source={require('../assets/girl.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <View style={styles.first}>
            <Text style={styles.text}>Pullover</Text>
            <Image source={require('../assets/icon.jpg')} style={styles.icon} />
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
          source={require('../assets/bags.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <View style={styles.first}>
            <Text style={styles.text}>Pullover</Text>
            <Image source={require('../assets/icon.jpg')} style={styles.icon} />
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
          source={require('../assets/bb.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textContainer}>
          <View style={styles.first}>
            <Text style={styles.text}>Pullover</Text>
            <Image source={require('../assets/icon.jpg')} style={styles.icon} />
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
      placeholderTextColor='black'/>
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
    
});

export default MyBagScreen;
