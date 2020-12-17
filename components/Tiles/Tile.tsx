import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';

const Tile = ({...props}) => {
    return (
            <TouchableOpacity onPress={props.onPress} style={styles.tile}/>
    );
  };

Tile.propTypes = {
    onPress: PropTypes.func
}

export default Tile;