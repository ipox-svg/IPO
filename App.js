import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// create a component
const Stack = createNativeStackNavigator();
const MyComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}   options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


 
//make this component available to the app
export default MyComponent;
