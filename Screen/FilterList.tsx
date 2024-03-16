import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [checkBox3, setCheckBox3] = useState(false);
  const [checkBox4, setCheckBox4] = useState(false);
  const [checkBox5, setCheckBox5] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        value={searchText}
        onChangeText={text => setSearchText(text)}
        placeholder="Search..."
        placeholderTextColor="#888" // Adjust placeholder color
      />
      <View style={styles.checkboxContainer}>
        <View style={styles.checkboxItem}>
          <Text style={styles.checkboxLabel}>Adidas</Text>
          <CheckBox
            value={checkBox1}
            onValueChange={setCheckBox1}
            tintColors={{ true: '#000', false: '#000' }} // Adjust checkbox color
          />
        </View>
        <View style={styles.checkboxItem}>
          <Text style={styles.checkboxLabel}>Adidas original</Text>
          <CheckBox
            value={checkBox2}
            onValueChange={setCheckBox2}
            tintColors={{ true: '#000', false: '#000' }} // Adjust checkbox color
          />
        </View>
        <View style={styles.checkboxItem}>
          <Text style={styles.checkboxLabel}>Blend</Text>
          <CheckBox
            value={checkBox3}
            onValueChange={setCheckBox3}
            tintColors={{ true: '#000', false: '#000' }} // Adjust checkbox color
          />
        </View>
        <View style={styles.checkboxItem}>
          <Text style={styles.checkboxLabel}>jockey</Text>
          <CheckBox
            value={checkBox4}
            onValueChange={setCheckBox4}
            tintColors={{ true: '#000', false: '#000' }} // Adjust checkbox color
          />
        </View>
        <View style={styles.checkboxItem}>
          <Text style={styles.checkboxLabel}>Diesel</Text>
          <CheckBox
            value={checkBox5}
            onValueChange={setCheckBox5}
            tintColors={{ true: '#000', false: '#000' }} // Adjust checkbox color
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffaf0',
  },
  searchBar: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#888', // Adjust border color
    padding: 10,
    marginBottom: 20,
    borderRadius: 44,
    color: '#000', // Adjust text color
  },
  checkboxContainer: {
    width: '100%',
  },
  checkboxItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    
    
  },
  checkboxLabel: {
    color: '#000', // Adjust text color
  },
});

export default App;
