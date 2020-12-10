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
        borderRadius: 10,
        padding: 20,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 1,
        elevation: 10,
        shadowRadius: 5,
    },
    redTile: {
        backgroundColor: "#cf4125",
    },
    yellowTile: {
        backgroundColor: "yellow",
    },
    greenTile: {
        backgroundColor: "#9DD333",
    },
    blueTile: {
        backgroundColor: "blue",
    },
    purpleTile: {
        backgroundColor: "purple",
    }
  });

export default styles;