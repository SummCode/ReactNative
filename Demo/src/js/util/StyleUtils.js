import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: '#000000'
    },
    describe: {
        fontSize: 16,
        color: '#C1C1C1',
        margin: 20
    },
    logo: {
        width: 25,
        height: 25,
    },
    btn:{
        width:'80%',
        height:48,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
    },
    img:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'80%',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBottom: 5,
        backgroundColor:'#C1C1C1'
    }
});


export default styles;