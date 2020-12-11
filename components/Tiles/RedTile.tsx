import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import styles from '../../styles';

const RedTile = ({...props}) => {
    return (
            <TouchableOpacity onPress={props.onPress} style={[styles.tile, styles.redTile]}/>
    );
  };


RedTile.propTypes = {
    onPress: PropTypes.func
}

  
export default RedTile;