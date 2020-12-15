import React, {useState} from 'react';
import {View, Text, Dimensions, Button, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import { colors } from '../../utils/theme';

const Login = ({navigation}) => {
    const {height} = Dimensions.get("screen");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                { <Text style={{ fontSize: 40, color: 'white'}}>Welcome</Text> }
            </View>
            <Animatable.View animation='fadeInUp'
            style={styles.footer}>
            <View style={{flex: 1, paddingHorizontal: 20,}}>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 40}}>
            <Text style={{ fontSize: 25,}}>Sign In to Your Account</Text>
            </View>

            <View style={styles.textField}>
            <MaterialCommunityIcons
                name = {'login'}
                color = {colors.primary}
                style = {{fontSize: 25}}
            />
            <TextInput style={{height: 50,
                marginLeft:16,
                borderBottomColor: '#FFFFFF',
                flex:1,}}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => setEmail(email)}
            />
            </View>

            <View>
                <View style={styles.textField}>
                <MaterialCommunityIcons 
                    name = {'lock'}
                    color = {colors.primary}
                    style = {{fontSize: 25}}
                />
                <TextInput style={{height: 50,
                    marginLeft:16,
                    borderBottomColor: '#FFFFFF',
                    flex:1, }}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => setPassword(password)}

                />
            </View>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: '100%', color: colors.dark, borderColor: colors.dark, borderWidth: 2, }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label='Click to Select field'/>
                <Picker.Item label="Admin" value="Admin" />
                <Picker.Item label="HOD" value="HOD" />
                <Picker.Item label="HOC" value="HOC" />
                <Picker.Item label="MOC" value="MOC" />
                <Picker.Item label="Faculty" value="Faculty" />
                <Picker.Item label="Student" value="Student" />
            </Picker>
            
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainTabs')}>
            <LinearGradient style={{width: '100%',height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 50,}}
                start={{x: 0.0, y: 0.2}} end={{x: 0.5, y: 1.5}}
                locations={[0.2,1,0.9]}
                colors={[colors.primary, colors.secondary, '#192f6a']}>
            <Text style={{ color: 'white', fontSize: 21}}>L O G I N</Text>
            </LinearGradient>
            </TouchableOpacity>

            </View>
            
            </Animatable.View>
        </View>
    )
}

export default Login
