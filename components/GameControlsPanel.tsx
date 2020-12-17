import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const GameControlsPanel = ({...props}) => {
    return (
            <View style={styles.gameControlPanel}>
                <Text style={styles.panelScore}>{props.score}</Text>
                <TouchableOpacity style={styles.panelPause}><Text>Pause</Text></TouchableOpacity>
            </View>
    );
  };

GameControlsPanel.propTypes = {
    score: PropTypes.number
}

export default GameControlsPanel;