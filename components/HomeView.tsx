import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles, modalStyles } from '../styles';
import GameHeader from './GameHeader';

const Game = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <GameHeader />
      <TouchableHighlight
        style={modalStyles.modalButton}
        onPress={() => {
          props.navigation.navigate('Game');
        }}
      >
        <Text style={modalStyles.modalText}>Start Game</Text>
      </TouchableHighlight>

      <View>
        <Text>Instructions:</Text>
        <Text>Phased is a fast clicking game where you tap green tiles as they appear to gain points. The catch is that other tiles appear that can cause you to lose the game. Your goal is to get the highest score possible.</Text>
      </View>
    </View>
  );
};

export default Game;