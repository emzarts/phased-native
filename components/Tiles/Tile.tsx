import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { styles } from '../../styles';
import { LinearGradient } from 'expo-linear-gradient';

const Tile = ({ ...props }) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.tile}>
      <LinearGradient
        colors={['#2d2d2d', 'transparent']}
        start={[.6,0]}
        end={[.5,1]}
        style={styles.gradient}
      />
    </TouchableOpacity>
  );
};

Tile.propTypes = {
  onPress: PropTypes.func
}

export default Tile;