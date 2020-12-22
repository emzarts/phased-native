import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Game from './components/Game';
import { styles } from './styles';
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    // <NavigationContainer>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Game />
      </View>
    // </NavigationContainer>
  );
}