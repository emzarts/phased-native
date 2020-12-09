import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Board = ({incrementScore}) => {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.board}>
            <View style={styles.boardRow}>
                <TouchableOpacity onPress={incrementScore} style={[styles.tile, styles.redTile]}/>
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

export default Board;