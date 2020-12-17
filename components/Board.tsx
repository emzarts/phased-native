import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Tile from './Tiles/Tile';
import { styles } from '../styles';
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

    const greenPress = () =>  {
        props.incrementScore();
        setSpeed(speed => speed - 10); // TODO less than 0 stuff
    }
    
    const initializeBoard = () => {  
        let tileData = board.map((row, i) => {
            let dataRows = row.map((tileColor, j) => {
                if (tileColor === TileColors.GREEN) return <GreenTile reset={resetTile} timer={speed * 2} row={i} col={j} key={j} onPress={greenPress}></GreenTile>
                if (tileColor === TileColors.RED) return <RedTile reset={resetTile} timer={speed * 2} row={i} col ={j} key={j} onPress={props.endGame}></RedTile>
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
    const randomTileLoc = () => {
        let [row, col] = randCoord();
        while(board[row][col] != TileColors.BLANK) {
            [row, col] = randCoord();
        }
        return [row,col];
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

    useEffect(() => {
        const interval = setInterval(() => updateBoard(), speed);

        if(props.gameOver) {
            clearInterval(interval)
        }
        return () => {
        clearInterval(interval);
        };
    }, [props.gameOver, speed]);

    return (
        <View style={styles.board}>
            {initializeBoard()}
        </View>
    )
}

Board.propTypes = {
    incrementScore: PropTypes.func,
    endGame: PropTypes.func,
    gameOver: PropTypes.bool 
}

export default Board;