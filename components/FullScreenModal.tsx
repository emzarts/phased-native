import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Modal, View } from 'react-native';
import { modalStyles } from '../styles';
import GradientButton from './GradientButton';

const FullScreenModal = ({ ...props }) => {
    return (
        <Modal
            visible={props.visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
            }}
        >
            <View style={modalStyles.fullScreenModal}>
                {props.children}
                <GradientButton onClick={props.closeModal} text={"Close"} />
            </View>
        </Modal>
    );
};

FullScreenModal.propTypes = {
    visible: PropTypes.bool,
    closeModal: PropTypes.func
}

export default FullScreenModal;