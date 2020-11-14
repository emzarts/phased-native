import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Game from './components/Game';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>PHASED</Text>
      <StatusBar style="auto" />
      <Game />
    </View>
  );
}