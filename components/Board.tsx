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
    
    const initializeBoard = () => {  
        let tileData = board.map((row, i) => {
            let dataRows = row.map((key, j) => {
                if (key === TileColors.GREEN) return <GreenTile onPress={props.incrementScore}></GreenTile>
                if (key === TileColors.RED) return <RedTile onPress={props.endGame}></RedTile>
                return <Tile onPress={() => {}}><Text>{key}</Text></Tile>
            });
            return <View style={styles.boardRow}>{dataRows}</View>;
        });
        return tileData;
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

        setBoard(
            board.map((row, i) => {
                let dataRows = row.map((tileColor, j) => {
                    // green tiles disappear after 1 second 
                    if (tileColor === TileColors.GREEN) return TileColors.BLANK;

                    if (i === greenRow && j === greenCol) return TileColors.GREEN;
                    
                    return tileColor;
                });
                return dataRows;
            })
        );
        console.log("REEE")
    }

    useEffect(() => {
        const interval = setInterval(() => updateBoard(), 1000);
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