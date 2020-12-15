import React, {useState} from 'react';
import {View, Text, Dimensions, Button, StyleSheet, Image,ImageBackground, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

import { colors } from '../../utils/theme';
import styles from './styles'

const GettingStarted = ({navigation}) => {
    const {height, width} = Dimensions.get("screen");
    return (
        <View style={styles.container}>
            <ImageBackground style={{height: height, width: width,flex: 3, borderRadius: 20}} source={require('../../assets/slide2.jpg')}></ImageBackground>
            <Animatable.View animation='fadeInUpBig' style={styles.footer}>
                <Text style={styles.title}>Departmental Commitee Console </Text>
                <Text style={styles.text}>COMSATS University Islamabad</Text>
                <View style={styles.button}> 
                <TouchableOpacity>
                    <LinearGradient style={styles.signIn}
                     start={{x: 0.0, y: 0.2}} end={{x: 0.5, y: 1.5}}
                     locations={[0.2,0.6,0.9]}
                     colors={[colors.primary, colors.secondary, '#192f6a']}>
                     <Text style={styles.textSign}>Getting Started </Text>
                     <MaterialCommunityIcons 
                     name= {'arrow-right'}
                     color={colors.light}
                     style={{fontSize: 25, fontWeight: 'bold',}} />
                    </LinearGradient>
                </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    )
}

export default GettingStarted;
