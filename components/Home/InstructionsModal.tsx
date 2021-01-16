import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { homeStyles } from '../../styles';
import FullScreenModal from '../FullScreenModal';

const InstructionsModal = ({ ...props }) => {
    return (
        <FullScreenModal visible={props.visible} closeModal={props.closeModal}>
            <Text style={homeStyles.homeTextRegular}>
            <Text>Instructions:</Text>
                {"\n"}
                {"\n"}
                Phased is a fast clicking game where you tap green tiles as they appear to gain points. The catch is that other tiles appear that can cause you to lose the game. Your goal is to get the highest score possible.
            </Text>
        </FullScreenModal>
    );
};

InstructionsModal.propTypes = {
    visible: PropTypes.bool,
    closeModal: PropTypes.func
}

export default InstructionsModal;