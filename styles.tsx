import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    appTitle: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: "bold",
        padding: 0,
        margin: 0,
        textShadowColor: 'black',
        textShadowRadius: 1,
        textShadowOffset: {width: 5, height: 5},
        color: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#333333',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    board: {
        padding: 5,
    },
    boardRow: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    tile: {
        margin: 8,
        flexGrow: 1,
        aspectRatio: 1,
        backgroundColor: '#666666',
        borderRadius: 15,
        padding: 20,
        shadowColor: '#ffffff',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        elevation: 10,
        shadowRadius: 30,
    },
  });

export default styles;