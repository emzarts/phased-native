import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Board = ({...props}) => {
    return (
        <View style={styles.board}>
            <View style={styles.boardRow}>
                <TouchableOpacity onPress={props.incrementScore} style={[styles.tile, styles.redTile]}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
            </View>
            <View style={styles.boardRow}>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
            </View>
            <View style={styles.boardRow}>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
            </View>
            <View style={styles.boardRow}>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
            </View>
            <View style={styles.boardRow}>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
                <TouchableOpacity style={styles.tile}/>
            </View>
        </View>
    )
}

Board.propTypes = {
    incrementScore: PropTypes.func
}

export default Board;