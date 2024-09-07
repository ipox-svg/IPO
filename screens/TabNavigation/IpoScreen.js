//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import IpoScreenComponents from '../Components/IpoScreen.Components';
// create a component
const IpoScreen = () => {
    return (
        <IpoScreenComponents/>
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
export default IpoScreen;
