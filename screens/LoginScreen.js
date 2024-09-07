//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Checkbox from 'expo-checkbox';


// create a component
const LoginScreen = ({navigation}) => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View style={styles.container}>
    
          {/* Header part   */}
          <View style={styles.header}>
            <Text style={styles.headerText}>IP</Text>
            <Image
              style={{height: 65, width: 65}}
              source={require('../assets/img1.jpeg')}
            />
          </View>
    
          {/* Lower Part */}
          <View style={styles.lowerPart}>
            
            <View style={styles.LowerHeader}>
              <Text style={styles.LowerHeaderText}>Log in</Text>
            </View>
    
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
              }}>
              <TextInput
                style={styles.numberInput}
                placeholder="Phone Number"
                keyboardType="numeric"
              />
    
    
              <View style={styles.checkboxContainer}>      
                  <Checkbox
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#4630EB' : undefined}
                          />
                          <View style={styles.checkboxContainerText}>
                          <Text >I have read and accept the  <Text style={{color:'skyblue'}}>turms and conditions</Text> </Text>
                          </View>
                         
              </View>
    
              
    
              <View style={{marginTop:60,}}>
              <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Get Code</Text>
              </TouchableOpacity>
              </View>
              
    
    
            </View>
          </View>
    
    
        </View>
      );
};

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#5A7CF1',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      // backgroundColor: 'grey',
      justifyContent: 'center',
      marginTop: 70,
    },
    headerText: {
      color: '#ffff',
      fontSize: 70,
    },
    lowerPart: {
      backgroundColor: '#ffff',
      marginTop: 50,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      flex: 1,
    },
    LowerHeader: {
      alignItems: 'center',
      //backgroundColor: 'grey',
      justifyContent: 'center',
      marginTop: 40,
    },
    LowerHeaderText: {
      color: 'black',
      fontSize: 30,
      fontWeight: '600',
    },
    numberInput: {
      width: 300,
      height: 50,
      backgroundColor: '#fff',
      marginTop:10,
      paddingHorizontal: 10,
      borderRadius: 10,
      elevation: 5,
    },
    button: {
      backgroundColor: '#5A7CF1',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      width:300,
      // Android shadow (elevation)
      elevation: 5,
  
      // iOS shadow (optional, for better cross-platform design)
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    label: {
      marginLeft: 10,
      fontSize: 16,
      color: '#333',
    },
   checkboxContainer:{
    flexDirection:'row', 
    marginTop:10,
    width:300, 
    marginTop:30, 
    flexDirection: 'row',
    alignItems: 'center',
    padding:10
    },
  
    checkboxContainerText:{
      width:160,
      marginLeft:10, 
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft:20,
    }
   
  });

//make this component available to the app
export default LoginScreen;
