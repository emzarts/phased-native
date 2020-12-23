import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import GameHeader from './Game/GameHeader';
import GradientButton from './GradientButton';

const Game = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <GameHeader />
      <GradientButton onClick={() => props.navigation.navigate('Game')} text={"Start Game"} />
      <View>
        <Text>Instructions:</Text>
        <Text>Phased is a fast clicking game where you tap green tiles as they appear to gain points. The catch is that other tiles appear that can cause you to lose the game. Your goal is to get the highest score possible.</Text>
      </View>
    </View>
  );
};

export default Game;