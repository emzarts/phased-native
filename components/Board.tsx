import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from '../styles';

const Board = () =>
    <View style={styles.board}>
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
        <View style={styles.boardRow}>
            <TouchableOpacity style={styles.tile}/>
            <TouchableOpacity style={styles.tile}/>
            <TouchableOpacity style={styles.tile}/>
            <TouchableOpacity style={styles.tile}/>
        </View>
    </View>

export default Board;