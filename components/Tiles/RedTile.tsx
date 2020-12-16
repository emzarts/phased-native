import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import styles from '../../styles';

const RedTile = ({...props}) => {
  useEffect(() => {
    const interval = setTimeout(() => props.reset(), 10000);
    return () => {
    clearInterval(interval);
    };
  }, []);
  return (
          <TouchableOpacity onPress={props.onPress} style={[styles.tile, styles.redTile]}/>
  );
};

 


RedTile.propTypes = {
    onPress: PropTypes.func,
    reset: PropTypes.func,
    row: PropTypes.number,
    col: PropTypes.number
}

  
export default RedTile;