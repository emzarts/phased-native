import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Tile from './Tiles/Tile';
import styles from '../styles';
import GreenTile from './Tiles/GreenTile';
import RedTile from './Tiles/RedTile';

enum TileColors {
    BLANK,
    RED,
    GREEN
}

const Board = ({...props}) => {
    let keys = [
        [TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK],
        [TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK],
        [TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK],
        [TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK],
        [TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK,  TileColors.BLANK]
      ];
    const [board, setBoard] = useState(keys);
    const [speed, setSpeed] = useState(900);
    
    const initializeBoard = () => {  
        let tileData = board.map((row, i) => {
            let dataRows = row.map((tileColor, j) => {
                if (tileColor === TileColors.GREEN) return <GreenTile reset={resetTile} timer={speed} row={i} col={j} key={j} onPress={props.incrementScore}></GreenTile>
                if (tileColor === TileColors.RED) return <RedTile reset={resetTile} row={i} col ={j} key={j} onPress={props.endGame}></RedTile>
                return <Tile key={j} onPress={() => {}}><Text>{tileColor}</Text></Tile>
            });
            return <View key={i} style={styles.boardRow}>{dataRows}</View>;
        });
        return tileData;
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

    const randCoord = () => {
        const rand = Math.floor(Math.random() * 20);
        const row = Math.floor(rand / 5);
        const col = rand % 4;
        return [row, col];
    }

    // Generate a random location for a new green tile
    const randomGreenLoc = () => {
        let [row, col] = randCoord();
        while(board[row][col] === TileColors.GREEN) {
            [row, col] = randCoord();
        }
        return [row,col];
    }

    const updateBoard = () => {
        let [greenRow, greenCol] = randomGreenLoc();

        setBoard(board => 
            board.map((row, i) => {
                let dataRows = row.map((tileColor, j) => {
                    if (i === greenRow && j === greenCol) return TileColors.GREEN;
                    
                    return tileColor;
                });
                return dataRows;
            })
        );
    }

    useEffect(() => {
        const interval = setInterval(() => updateBoard(), speed);
        return () => {
        clearInterval(interval);
        };
    }, []);

    return (
        <View style={styles.board}>
            {initializeBoard()}
        </View>
    )
}

Board.propTypes = {
    incrementScore: PropTypes.func,
    endGame: PropTypes.func
}

export default Board;