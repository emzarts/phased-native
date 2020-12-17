import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';
import Tile from './Tile';

const GreenTile = ({...props}) => {
    useEffect(() => {
        const interval = setTimeout(() => props.reset(props.row, props.col), props.timer);
        return () => {
        clearInterval(interval);
        };
      }, []);
    const [clicked, setClicked] = useState(false)

    const buttonPressed = () => {
        setClicked(true);
        props.onPress();
    }

    if (clicked) return <Tile onPress={()=>{}} /> 
    else return <TouchableOpacity onPress={buttonPressed} style={[styles.tile, styles.greenTile]}/>
  };


GreenTile.propTypes = {
    onPress: PropTypes.func,
    reset: PropTypes.func,
    timer: PropTypes.number,
    row: PropTypes.number,
    col: PropTypes.number
}

  
export default GreenTile;