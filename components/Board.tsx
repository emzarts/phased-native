import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Tile from './Tiles/Tile';
import { styles } from '../styles';
import GreenTile from './Tiles/GreenTile';
import RedTile from './Tiles/RedTile';
import TileColors from './Tiles/TileColors';

const Board = ({ ...props }) => {
    let keys = [
        [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK],
        [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK],
        [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK],
        [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK],
        [TileColors.BLANK, TileColors.BLANK, TileColors.BLANK, TileColors.BLANK]
      ];
    const [board, setBoard] = useState(keys);

    // whent the game is restarted, reset the board
    useEffect(() => {   
      setBoard(keys);
    }, [props.restart]);

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
        const redProb = .2;
        if (randProb < redProb)
          return TileColors.RED;
        else
          return TileColors.GREEN;
      }
    
      // select a random coordinate within the 4x5 grid
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
    
      // re-render the board based on the current state
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

    const initializeBoard = () => {
        let tileData = board.map((row, i) => {
            let dataRows = row.map((tileColor, j) => {
                if (tileColor === TileColors.GREEN) return <GreenTile gameStopped={props.gameStopped} reset={resetTile} timer={props.speed * 2} row={i} col={j} key={j} onPress={props.incrementScore}></GreenTile>
                if (tileColor === TileColors.RED) return <RedTile  gameStopped={props.gameStopped} reset={resetTile} timer={props.speed * 2} row={i} col={j} key={j} onPress={props.endGame}></RedTile>
                return <Tile key={j} onPress={() => { }}><Text>{tileColor}</Text></Tile>
            });
            return <View key={i} style={styles.boardRow}>{dataRows}</View>;
        });
        return tileData;
    }

    useEffect(() => {
        const interval = setInterval(() => updateBoard(), props.speed);

        if (props.gameStopped) {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval);
        };
    }, [props.gameStopped, props.speed]);

    return (
        <View style={styles.board}>
            {initializeBoard()}
        </View>
    )
}

Board.propTypes = {
    incrementScore: PropTypes.func,
    endGame: PropTypes.func,
    gameStopped: PropTypes.bool,
    speed: PropTypes.number,
    restart: PropTypes.bool
}

export default Board;