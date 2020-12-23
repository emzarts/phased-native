import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import { modalStyles } from '../../styles';
import GameModal from './GameModal';
import GradientButton from '../GradientButton';
import DigitalText from '../DigitalText';

const GameOverModal = ({ ...props }) => {
    const newGame = () => {
        props.newGame();
        props.setGameOver(!props.gameOver);
    }

    return (
        <GameModal visible={props.gameOver}>
            <View style={[modalStyles.modalSegment, modalStyles.modalTitleSegment]}>
                <Text style={modalStyles.modalTitle}>GAME OVER</Text>
            </View>
            <DigitalText text={props.score} />
            <View style={[modalStyles.modalSegment, modalStyles.modalButtonSegment]}>
                <GradientButton onClick={newGame} text={"Replay"} /> 
                <GradientButton onClick={props.goHome} text={"Home"} />
           </View>
        </GameModal>
    );
};

GameOverModal.propTypes = {
    goHome: PropTypes.func,
    gameOver: PropTypes.bool,
    setGameOver: PropTypes.func,
    newGame: PropTypes.func,
    score: PropTypes.number
}

export default GameOverModal;