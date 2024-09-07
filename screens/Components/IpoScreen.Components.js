import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const IpoScreenComponents = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  return (
    <View style={styles.container}>
     
     <View style={styles.ipoHeaderContainer}>
      <Text style={styles.ipoText}>IPO</Text>
     </View>
     
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'Option 1' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('Option 1')}
        >
          <Text style={styles.optionText}>Expected</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'Option 2' && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption('Option 2')}
        >
          <Text style={styles.optionText}>Hosted IPO's</Text>
        </TouchableOpacity>
      </View>
        

      





    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor:'#ffffff'
  },
  ipoHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    //marginVertical: 5, // Add some vertical margin for spacing
  },
  ipoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    elevation: 20,
    marginTop: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    height: 50, // Ensure a consistent height for the header
  },
  option: {
    flex: 1, // Take up 50% of the parent container
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: '100%',
    
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
  selectedOption: {
    backgroundColor: '#e2e9fd',
    
  },
});

export default IpoScreenComponents;
