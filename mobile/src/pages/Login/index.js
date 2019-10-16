import React, { useState } from 'react';

import {
  View,
  KeyboardAvoidingView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  AsyncStorage
} from 'react-native'

import styles from './styles'
import logo from '../../assets/logo.png'
import api from '../../services/api'


export default function Login({ navigation }) {

  const [email, setEmail] = useState('')
  const [techs, setTechs] = useState('')

  const handleSubmited = async () => {

    const response = await api.post('/sessions', { email })

    const { _id } = response.data

    // banco sqlite do react-native
    await AsyncStorage.setItem('user', _id)
    await AsyncStorage.setItem('techs', techs)

    // navigation funciona como o history do web
    navigation.navigate('List')
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Image source={logo} />

      <View style={styles.form}>
        <Text style={styles.label}>Seu Email *</Text>
        <TextInput
          style={styles.input}
          placeholder='Seu email'
          placeholderTextColor='#999'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          value={email}
          // onChangeText={text =>setEmail(text)}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Tecnologias *</Text>
        <TextInput
          style={styles.input}
          placeholder='Tecnologias de interesse'
          placeholderTextColor='#999'
          autoCapitalize='words' //primeira letra sempre maiuscula
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
        />

        <TouchableOpacity onPress={handleSubmited} style={styles.button}>
          <Text style={styles.buttonText} >Encontrar spots</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

