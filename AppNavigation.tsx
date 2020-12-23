import React from 'react';
import GameView from './components/Game/GameView';
import HomeView from './components/HomeView';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeView} options={{headerShown: false}}/>
                <Stack.Screen name="Game" component={GameView} options={{headerShown: false}}/>
        </Stack.Navigator> 
    </NavigationContainer>
  );
}