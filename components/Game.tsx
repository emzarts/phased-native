import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Board from './Board';
import { styles } from '../styles';
import GameOverModal from './GameOverModal';
import TileColors from './Tiles/TileColors';
import GameControlsPanel from './GameControlsPanel';

const Game = () => {
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(800);
  const [gamePaused, setGamePaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);


  const incrementScore = () => {
    setSpeed(speed => speed - 10); // TODO less than 0 stuff
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
      <GameOverModal newGame={newGame} gameOver={gameOver} setGameOver={setGameOver} score={score} />
      <View>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Board speed={speed} incrementScore={incrementScore} endGame={endGame} gameOver={gameOver} />
        <GameControlsPanel setGameOver={setGameOver} score={score} />
      </View>
    </View>
  );
};

export default Game;