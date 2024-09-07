import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';

// create a component
const Stack = createNativeStackNavigator();
const MyComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen}   options={{ animation: 'slide_from_right', headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ animation: 'slide_from_right',headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


 
//make this component available to the app
export default MyComponent;
