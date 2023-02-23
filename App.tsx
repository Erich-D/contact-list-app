import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
        {/* Within this navigator, we set up our screens: */}
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
              name = "Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name = "Contact"
              component={ContactScreen}/>
            </Stack.Navigator>
    </NavigationContainer>
  );
}
