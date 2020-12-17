import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Tile from './Tiles/Tile';
import { styles } from '../styles';
import GreenTile from './Tiles/GreenTile';
import RedTile from './Tiles/RedTile';
import TileColors from './Tiles/TileColors';

const Board = ({ ...props }) => {

    const initializeBoard = () => {
        let tileData = props.board.map((row, i) => {
            let dataRows = row.map((tileColor, j) => {
                if (tileColor === TileColors.GREEN) return <GreenTile reset={props.resetTile} timer={props.speed * 2} row={i} col={j} key={j} onPress={props.incrementScore}></GreenTile>
                if (tileColor === TileColors.RED) return <RedTile reset={props.resetTile} timer={props.speed * 2} row={i} col={j} key={j} onPress={props.endGame}></RedTile>
                return <Tile key={j} onPress={() => { }}><Text>{tileColor}</Text></Tile>
            });
            return <View key={i} style={styles.boardRow}>{dataRows}</View>;
        });
        return tileData;
    }

    useEffect(() => {
        const interval = setInterval(() => props.updateBoard(), props.speed);

        if (props.gameOver) {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval);
        };
    }, [props.gameOver, props.speed]);

    return (
        <View style={styles.board}>
            {initializeBoard()}
        </View>
    )
}

Board.propTypes = {
    incrementScore: PropTypes.func,
    endGame: PropTypes.func,
    gameOver: PropTypes.bool,
    speed: PropTypes.number,
    board: PropTypes.arrayOf(PropTypes.array),
    updateBoard: PropTypes.func
}

export default Board;