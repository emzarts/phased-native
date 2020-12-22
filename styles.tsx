import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    appTitle: {
        textAlign: 'center',
        fontSize: 60,
        fontWeight: "bold",
        padding: 0,
        margin: 0,
        textShadowColor: 'black',
        textShadowRadius: 1,
        textShadowOffset: { width: 5, height: 5 },
        color: 'white'
    },
    scoreText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#222',
    },
    board: {
        padding: 5
    },
    gameContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    gameHeader: {
        paddingTop: StatusBar.currentHeight,
        padding: 10,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#333',
        borderColor: '#111',
        borderBottomWidth: 3
    },
    boardRow: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    tileTransparent: {
        backgroundColor: 'transparent'
    },
    gradient: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    tile: {
        margin: 5,
        flexGrow: 1,
        aspectRatio: 1,
        backgroundColor: '#333',
        borderRadius: 10,
        borderColor: '#111',
        borderWidth: 3,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        elevation: 5,
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

const modalStyles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    modalContents: {
        margin: 20,
        padding: 20,
        backgroundColor: "#333333",
        borderRadius: 10,
        paddingLeft: 35,
        paddingRight: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10
    },
    gameOverTitle: {
        color: '#cf4125',
        fontSize: 30,
        fontWeight: "bold",
        textShadowColor: 'black',
        textShadowRadius: 1,
        textShadowOffset: { width: 2, height: 2 },
    },
    buttons: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    modalButton: {
        padding: 15,
        margin: 10,
        backgroundColor: '#666',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5
    },
    modalText: {
        color: 'white',
        fontSize: 16,
    }
});

const gameControlStyles = StyleSheet.create({
    gameControlView: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#333',
        borderColor: '#111',
        borderTopWidth: 3
    },
    gameScore: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2
    },
    controlScore: {
        color: 'white',
        fontSize: 20,
    },
    controlPause: {
        color: 'white',
        fontSize: 20,

    }

});

export { styles, modalStyles, gameControlStyles };