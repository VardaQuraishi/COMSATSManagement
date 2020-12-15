import {StyleSheet, Dimensions} from 'react-native'
import { colors } from '../../utils/theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  
    container: {
        flex: 1,
    },
    footer: {
        flex: 1,
        backgroundColor: colors.light,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    title: {
        color: colors.dark,
        fontSize: 30,
        fontWeight: 'bold',
        
    },
    text: {
        color: 'grey',
        marginTop: 5,
    
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 69
    },
    textSign: {
        color: colors.light,
        fontWeight: 'bold',
    
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    }
   
})

export default styles;