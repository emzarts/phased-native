import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles, homeStyles } from '../styles';
import GameHeader from './Game/GameHeader';
import GradientButton from './GradientButton';
import { getHighScore } from './Data/HighScore';
import { useFocusEffect } from '@react-navigation/native';
import DigitalText from './DigitalText';

const HomeView = ({ ...props }) => {
  const [highScore, setHighScore] = useState(0);
  useFocusEffect(() => {
    getHighScore().then(score => score === 0 ? setHighScore(score) : setHighScore(parseInt(score)));
    return () => {}
  })
  return (
    <View style={styles.container}>
      <GameHeader />
      <View style={homeStyles.homeView}>
        <Text>High score: <DigitalText text={highScore} /></Text>
        <GradientButton onClick={() => props.navigation.navigate('Game')} text={"Start Game"} />
        <View>
          <Text style={homeStyles.homeTextRegular}>
            <Text>Instructions:</Text>
              {"\n"}
              {"\n"}
              Phased is a fast clicking game where you tap green tiles as they appear to gain points. The catch is that other tiles appear that can cause you to lose the game. Your goal is to get the highest score possible.
            </Text>
        </View>

      </View>
    </View>
  );
};

export default HomeView;