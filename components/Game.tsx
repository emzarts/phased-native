import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Board from './Board';
import { styles } from '../styles';
import GameOverModal from './GameOverModal';
import TileColors from './Tiles/TileColors';
import GameControlsPanel from './GameControlsPanel';

const Game = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  let keys = [
    [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK],
    [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK],
    [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK],
    [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK],
    [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK]
  ];
  const [board, setBoard] = useState(keys);
  const [speed, setSpeed] = useState(800);

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

  const resetTile = (tile_row: Number, tile_col: Number) => {
    setBoard(board =>
      board.map((row, i) => {
        let dataRows = row.map((tileColor, j) => {
          if (i === tile_row && j === tile_col) {
            return TileColors.BLANK
          }
          return tileColor;
        });
        return dataRows;
      })
    );
  }


  // randomly select a color based on the probability of it being selected
  const tileColorProb = () => {
    const randProb = Math.random();
    const greenProb = .7;
    const redProb = .3;
    if (randProb < redProb)
      return TileColors.RED;
    else
      return TileColors.GREEN;
  }


  const randCoord = () => {
    const rand = Math.floor(Math.random() * 20);
    const row = Math.floor(rand / 5);
    const col = rand % 4;
    return [row, col];
  }

  // Generate a random location for a new green tile
  const randomTileLoc = () => {
    let [row, col] = randCoord();
    while (board[row][col] != TileColors.BLANK) {
      [row, col] = randCoord();
    }
    return [row, col];
  }

  const updateBoard = () => {
    let [tileRow, tileCol] = randomTileLoc();

    setBoard(board =>
      board.map((row, i) => {
        let dataRows = row.map((tileColor, j) => {
          if (i === tileRow && j === tileCol) return tileColorProb();

          return tileColor;
        });
        return dataRows;
      })
    );
  }


  return (
    <View>
      <GameOverModal newGame={newGame} gameOver={gameOver} setGameOver={setGameOver} score={score} />
      {/* {gameOver 
          ? <Text> REEEEE </Text>  :*/}
      <View>
        <Text style={styles.scoreText}>Score: {score}</Text>
        <Board board={board} speed={speed} resetTile={resetTile} updateBoard={updateBoard} incrementScore={incrementScore} endGame={endGame} gameOver={gameOver} />
        <GameControlsPanel setGameOver={setGameOver} score={score} />
      </View>
      {/* } */}
    </View>
  );
};

export default Game;