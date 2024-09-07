//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const NewsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>NewsScreen</Text>
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
export default NewsScreen;
