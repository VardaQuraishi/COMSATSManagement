import {StyleSheet, Dimensions} from 'react-native'
import { colors } from '../../utils/theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: colors.primary,
    },
    header: {
        flex: 0.5, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: colors.primary,
    },
    footer: {
        flex: 1, 
        backgroundColor: colors.light, 
        borderTopLeftRadius: 69, 
        borderTopRightRadius: 69, 
        paddingVertical: 50, 
        paddingHorizontal: 30
    },
    textField: {
        padding: 10,
            borderColor: 'black',
            borderRadius:10,
            borderWidth: 1,
            borderBottomWidth: 5,
            width:'100%',
            alignSelf: 'center',
            height:55,
            marginBottom:20,
            flexDirection: 'row',
            alignItems:'center'
    },
    button: {
        width: '100%',
        alignSelf: 'center',
        height: 50,
        justifyContent: 'center' ,
        alignItems: "center",
        backgroundColor: colors.primary,
        borderRadius: 50
    }

})

export default styles