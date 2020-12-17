import React, {useState} from 'react';
import { View, Text, Modal, Alert, TouchableHighlight } from 'react-native';
import Board from './Board';
import { modalStyles, styles } from '../styles';
import GameOverModal from './GameOverModal';

const Game = () => {
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);

    const incrementScore = () => {
        setScore(score => score + 1);
    }

    const endGame = () => {
        setGameOver(true);
    }

    const newGame = () => {
      setScore(0);
    }


    return (
      <View>
        <GameOverModal newGame={newGame} gameOver={gameOver} setGameOver={setGameOver} score={score}/>
        {/* {gameOver 
            ? <Text> REEEEE </Text>  :*/}
            <View>
                <Text style={styles.scoreText}>Score: {score}</Text>
                <Board incrementScore={incrementScore} endGame={endGame} gameOver={gameOver} />   
            </View> 
        {/* } */}
      </View>  
    );
  };
  
  export default Game;