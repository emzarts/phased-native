import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import { modalStyles } from '../styles';
import GameModal from './GameModal';
import GradientButton from './GradientButton';

const GamePausedModal = ({ ...props }) => {
    return (
        <GameModal visible={props.gamePaused}>
            <Text style={modalStyles.gameOverTitle}>PAUSED</Text>
            <Text style={modalStyles.modalText}>{props.score}</Text>
            <View style={modalStyles.buttons}>
                <GradientButton onClick={props.pauseGame} text={"Continue"} />
                <GradientButton onClick={props.goHome} text={"Home"} />
            </View>
        </GameModal>
    );
};

GamePausedModal.propTypes = {
    goHome: PropTypes.func,
    gamePaused: PropTypes.bool,
    pauseGame: PropTypes.func,
    score: PropTypes.number
}

export default GamePausedModal;