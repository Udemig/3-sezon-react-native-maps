import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapsScreen from './src/pages/MapsScreen';
import WebViewScreen from './src/pages/WebViewScreen';
import NetInfoScreen from './src/pages/NetInfoScreen';
import {NavigationContainer} from '@react-navigation/native';
import ResponsiveScreen from './src/pages/ResponsiveScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Responsive" component={ResponsiveScreen} />
        <Stack.Screen name="NetInfo" component={NetInfoScreen} />
        <Stack.Screen name="Webview" component={WebViewScreen} />
        <Stack.Screen name="Maps" component={MapsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
