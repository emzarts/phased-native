import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles, homeStyles } from '../../styles';
import GameHeader from '../Game/GameHeader';
import GradientButton from '../GradientButton';
import { getHighScore } from '../Data/HighScore';
import { useFocusEffect } from '@react-navigation/native';
import InstructionsModal from './InstructionsModal';

const HomeView = ({ ...props }) => {
  const [highScore, setHighScore] = useState(0);
  const [instructionsOpen, setInstructions] = useState(false);

  useFocusEffect(() => {
    getHighScore().then(score => score === 0 ? setHighScore(score) : setHighScore(parseInt(score)));
    return () => {}
  })
  return (
    <View style={styles.container}>
      <InstructionsModal visible={instructionsOpen} closeModal={() => setInstructions(false)}/>
        
      <GameHeader />
      <View style={homeStyles.homeView}>
        <Text style={homeStyles.homeTextScore}>RECORD: {highScore} </Text>
        <GradientButton onClick={() => props.navigation.navigate('Game')} text={"Start Game"} icon="info" />
        <GradientButton onClick={() => setInstructions(true)} text={"Instructions"} />
        <View>

        </View>

      </View>
    </View>
  );
};

export default HomeView;