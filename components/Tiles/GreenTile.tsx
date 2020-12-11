import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import styles from '../../styles';

const GreenTile = ({...props}) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.tile, styles.greenTile]}/>
    );
  };


GreenTile.propTypes = {
    onPress: PropTypes.func
}

  
export default GreenTile;