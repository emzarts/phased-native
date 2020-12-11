import React, {useState} from 'react';
import { View, Text } from 'react-native';
import Board from './Board';

const Game = () => {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const incrementScore = () => {
        setScore(score => score + 1);
    }

    const endGame = () => {
        setGameOver(true);
    }

    return (
        <View>
        {gameOver 
            ? <Text> REEEEE </Text> 
            : <View>
                <Text>Score: {score}</Text>
                <Board incrementScore={incrementScore} endGame={endGame} />   
            </View> 
        }
        </View>
        
    );
  };
  
  export default Game;