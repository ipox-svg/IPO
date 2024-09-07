//import liraries
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DealsScreen from './TabNavigation/DealsScreen';
import NewsScreen from './TabNavigation/NewsScreen';
import SettingsScreen from './TabNavigation/SettingsScreen';
import TutorialScreen from './TabNavigation/TutorialScreen';
import IpoScreen from './TabNavigation/IpoScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
// create a component
const HomeScreen = () => {
    return (
        <Tab.Navigator

        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
    
              if (route.name === 'Deals') {
                iconName = 'pricetag-outline'; // Choose icon for Tab One
              }
              else if (route.name === 'Tutorials') {
                iconName = 'book-outline'; // Choose icon for Tab Two
              } 
              else if (route.name === 'IPO') {
                iconName = 'trending-up-outline'; // Choose icon for Tab Two
              } 
              else if (route.name === 'News') {
                iconName = 'settings'; // Choose icon for Tab Two
              } 
              else if (route.name === 'Settings') {
                iconName = 'settings-outline'; // Choose icon for Tab Two
              }
    
              // Return the Icon component with the chosen iconName
              return <Icon name={iconName} size={20} color={"blue"} />;

            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              backgroundColor: 'white',
              paddingBottom: 5,
            },
            tabBarLabelStyle: {
              fontSize: 15,
            },
          })}
           
          
               
        
          >
                    <Tab.Screen name="Deals" component={DealsScreen} options={{headerShown: false }}/>
                    <Tab.Screen name="Tutorials" component={TutorialScreen} options={{headerShown: false }} />
                    <Tab.Screen name="IPO" component={IpoScreen}  options={{headerShown: false }}/>
                    <Tab.Screen name="News" component={NewsScreen} options={{headerShown: false }} />
                    <Tab.Screen name="Settings" component={SettingsScreen}  options={{headerShown: false }}/>
        </Tab.Navigator>
    );
};


//make this component available to the app
export default HomeScreen;
