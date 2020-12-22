import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';

const GameHeader = () => {
    return (
        <View style={styles.gameHeader}>
            <Text style={styles.appTitle}>PHASED</Text>
        </View>
    )
}

export default GameHeader;