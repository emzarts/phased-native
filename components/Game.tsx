import React, {useState} from 'react';
import { View, Text } from 'react-native';
import Board from './Board';

const Game = () => {
    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore(score => score + 1);
    }

    const endGame = () => {

    }

    return (
        <View>
            <Text>Score: {score}</Text>
            <Board incrementScore={incrementScore} />   
        </View> 
    );
  };
  
  export default Game;