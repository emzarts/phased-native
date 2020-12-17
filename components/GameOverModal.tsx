import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Alert, Modal, Text, View, TouchableHighlight } from 'react-native';
import { modalStyles, styles } from '../styles';

const GameOverModal = ({...props}) => {
    return (
        <Modal
            visible={props.gameOver}
            transparent={true}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            }}
      >
        <View style={modalStyles.modalView}>
          <View style={modalStyles.modalContents}>
            <Text style={modalStyles.gameOverTitle}>GAME OVER</Text>
            <View style={modalStyles.buttons}>
                <TouchableHighlight
                    style={modalStyles.modalButton}
                    onPress={() => {
                        props.setGameOver(!props.gameOver);
                    }}
                >
                    <Text>Replay</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={modalStyles.modalButton}
                    onPress={() => {
                        props.setGameOver(!props.gameOver);
                    }}
                >
                    <Text>Menu</Text>
                </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

GameOverModal.propTypes = {
    gameOver: PropTypes.bool,
    setGameOver: PropTypes.func
}

export default GameOverModal;