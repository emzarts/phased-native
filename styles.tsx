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
        color: 'white',
        fontFamily: 'BigBoy',
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
        elevation: 4,
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContents: {
        margin: 20,
        padding: 20,
        backgroundColor: "#222",
        borderRadius: 10,
        borderColor: '#111',
        borderWidth: 3,
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
    buttonGradient: {
         padding: 15,
         borderRadius: 6
    },
    modalButton: {
        margin: 10,
        backgroundColor: '#333',
        borderRadius: 6,
        borderColor: '#111',
        borderWidth: 2,
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
        backgroundColor: '#333',
        padding: 5,
        borderColor: '#111',
        borderTopWidth: 3,
    },
    gameScore: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        paddingRight: 20,
        borderColor: "#111",
        borderWidth: 2,
        borderRadius: 9,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flex: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        textAlign: 'right'
    },
    controlScore: {
        color: 'white',
        fontSize: 40,
    },
    controlPause: {
        color: 'white',
        fontSize: 20,
    }

});

export { styles, modalStyles, gameControlStyles };