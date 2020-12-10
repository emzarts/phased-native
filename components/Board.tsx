import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import Tile from './Tiles/Tile';
import styles from '../styles';

const Board = ({...props}) => {
    const initializeBoard = () => {
        let keys = [
            [0,  1,  2,  3],
            [4,  5,  6,  7],
            [8,  9, 10, 11],
            [12, 13, 14, 15],
            [16, 17, 18, 19]
          ];

        let tileData = keys.map((row, i) => {
            let dataRows = row.map((key, j) => {
                return <Tile onPress={props.incrementScore}></Tile>
            });
            return <View style={styles.boardRow}>{dataRows}</View>;
        });
        return tileData;
    }

    return (
        <View style={styles.board}>
            {initializeBoard()}
        </View>
    )
}

Board.propTypes = {
    incrementScore: PropTypes.func
}

export default Board;