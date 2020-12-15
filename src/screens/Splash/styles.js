import {StyleSheet, Dimensions} from 'react-native'
import theme, { colors } from '../../utils/theme';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.light,

    },
    logo: {
        height: height/5,
        width: height/5,
    },
  })
export default styles;