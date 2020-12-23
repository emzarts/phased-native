import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { modalStyles, gameControlStyles } from '../../styles';
import GameModal from './GameModal';
import GradientButton from '../GradientButton';
import DigitalText from '../DigitalText';

const GamePausedModal = ({ ...props }) => {
    return (
        <GameModal visible={props.gamePaused}>
            <View style={[modalStyles.modalSegment, modalStyles.modalTitleSegment]}>
                <Text style={modalStyles.modalTitle}>PAUSED</Text>
            </View>
            <DigitalText text={props.score} styles={gameControlStyles.controlScore} />
            <View style={[modalStyles.modalSegment, modalStyles.modalButtonSegment]}>
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