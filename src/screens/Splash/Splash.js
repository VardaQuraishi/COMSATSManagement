import React, {useEffect} from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import styles from './styles'

const Splash = ({navigation}) => {
    const {height, width} = Dimensions.get('window');
    useEffect(() => {
          const timer = setTimeout(
        //   async
        () => {
            // const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
            // const email = await AsyncStorage.getItem('email')
            // if(isLoggedIn === 'true'){
            //   if(email === 'asadimtiaz711@gmail.com'){

                //navigation.navigate('GettingStarted')
                
            //   }else{
            //     navigation.navigate('Tabs');
            //   }
            // } else{
            //     navigation.navigate('Login');
            // }
          },
          2000,
        );
        return () => clearTimeout(timer);
      }, [navigation]);
    return (
        <View style = {styles.container}>
            <Image source = {require('../../assets/comsats-logo.png')} style = {styles.logo} />
        </View>
    )
}

export default Splash;
