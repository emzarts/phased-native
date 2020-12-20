import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Modal, View } from 'react-native';
import { modalStyles } from '../styles';

const GameOverModal = ({ ...props }) => {
    return (
        <Modal
            visible={props.visible}
            transparent={true}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={modalStyles.modalView}>
                <View style={modalStyles.modalContents}>
                    {props.children}
                </View>
            </View>
        </Modal>
    );
};

GameOverModal.propTypes = {
    visible: PropTypes.bool
}

export default GameOverModal;