import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import GameView from './components/GameView';
import HomeView from './components/HomeView';
import { styles } from './styles';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Game">
                <Stack.Screen name="Home" component={HomeView} options={{headerShown: false}}/>
                <Stack.Screen name="Game" component={GameView} options={{headerShown: false}}/>
        </Stack.Navigator> 
    </NavigationContainer>
  );
}