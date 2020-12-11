import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import styles from '../../styles';
import Tile from './Tile';

const GreenTile = ({...props}) => {
    const [clicked, setClicked] = useState(false)

    const buttonPressed = () => {
        setClicked(true);
        props.onPress();
    }

    if (clicked) return <Tile onPress={()=>{}} /> 
    else return <TouchableOpacity onPress={buttonPressed} style={[styles.tile, styles.greenTile]}/>
  };


GreenTile.propTypes = {
    onPress: PropTypes.func
}

  
export default GreenTile;