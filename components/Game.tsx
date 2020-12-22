import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Board from './Board';
import { styles } from '../styles';
import GameOverModal from './GameOverModal';
import GameControlsPanel from './GameControlsPanel';
import GamePausedModal from './GamePausedModal';

const Game = () => {
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(800);
  const [gamePaused, setPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [restartGame, setRestart] = useState(false);


  const incrementScore = () => {
    setSpeed(speed => speed - 10); // TODO less than 0 stuff
    setScore(score => score + 1);
  }

  const endGame = () => {
    setGameOver(true);
  }

  const newGame = () => {
    setScore(0);
    setRestart(!restartGame);
  }

  const pauseGame = () => {
    setPaused(!gamePaused);
  }

  return (
    <View style={styles.gameContainer}>
      <GameOverModal newGame={newGame} gameOver={gameOver} setGameOver={setGameOver} score={score} />
      <GamePausedModal pauseGame={pauseGame} score={score} gamePaused={gamePaused} />
      <View style={styles.gameHeader}>
        <Text style={styles.appTitle}>PHASED</Text>
        <Text style={styles.scoreText}>Score: {score}</Text>
      </View>
      <Board speed={speed} incrementScore={incrementScore} endGame={endGame} restart={restartGame} gameStopped={gameOver || gamePaused} />
      <GameControlsPanel pauseGame={pauseGame} score={score} />
    </View>
  );
};

export default Game;