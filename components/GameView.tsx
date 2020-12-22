import React, { useState } from 'react';
import { View } from 'react-native';
import Board from './Board';
import { styles } from '../styles';
import GameOverModal from './GameOverModal';
import GameControlsPanel from './GameControlsPanel';
import GamePausedModal from './GamePausedModal';
import GameHeader from './GameHeader';

const GameView = ({ ...props }) => {
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(700);
  const [gamePaused, setPaused] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [restartGame, setRestart] = useState(false);

  const goHome = () => {
    props.navigation.navigate('Home');
    newGame();

    // reset the modals so they don't show up on the new page
    setPaused(false);
    setGameOver(false);
  }

  const incrementScore = () => {
    setSpeed(speed => speed - 5); // TODO less than 0 stuff
    setScore(score => score + 1);
  }

  const endGame = () => {
    setGameOver(true);
  }

  const newGame = () => {
    setScore(0);
    setSpeed(700);
    setRestart(!restartGame);
  }

  const pauseGame = () => {
    setPaused(!gamePaused);
  }

  return (
    <View style={[styles.gameContainer, styles.container]}>
      <GameOverModal goHome={goHome} newGame={newGame} gameOver={gameOver} setGameOver={setGameOver} score={score} />
      <GamePausedModal goHome={goHome} pauseGame={pauseGame} score={score} gamePaused={gamePaused} />
      <GameHeader />
      <Board speed={speed} incrementScore={incrementScore} endGame={endGame} restart={restartGame} gameStopped={gameOver || gamePaused} />
      <GameControlsPanel pauseGame={pauseGame} score={score} />
    </View>
  );
};

export default GameView;