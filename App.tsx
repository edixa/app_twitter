import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import MainStackNavigator from './src/navigators/MainStackNavigator';





export default function App() {
  return (
  
    <NavigationContainer>
   <MainStackNavigator/>
    </NavigationContainer>

  );
}

