//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const DealsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>DealsScreen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor:'#ffffff'
      },
});

//make this component available to the app
export default DealsScreen;
