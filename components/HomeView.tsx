import React, { useState } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles, modalStyles } from '../styles';

const Game = ({ ...props }) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={modalStyles.modalButton}
        onPress={() => {
          props.navigation.navigate('Game');
        }}
      >
        <Text style={modalStyles.modalText}>New Game</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Game;