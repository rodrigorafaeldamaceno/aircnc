import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View, AsyncStorage
} from 'react-native';

import SafeAreaView from '../../components/SafeAreaView'
import styles from './styles';

import api from '../../services/api'

export default function Book({ navigation }) {

  const [date, setDate] = useState('')
  const id = navigation.getParam('id')

  const handleSubmited = async () => {

    const user = await AsyncStorage.getItem('user')
    await api.post(`/spots/${id}/bookings`, {
      date
    }, {
      headers: { user }
    })

    Alert.alert('Solicitação de reserva enviada.')

    navigation.navigate('List')
  }

  const handleCancel = () => {
    navigation.navigate('List')
  }

  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={styles.label}>Data de interesse </Text>
        <TextInput
          style={styles.input}
          placeholder='Qual data você deseja reservar?'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false}
          value={date}
          // onChangeText={text =>setEmail(text)}
          onChangeText={setDate}
        />

        <TouchableOpacity onPress={handleSubmited} style={styles.button}>
          <Text style={styles.buttonText} >Solicitar Reserva</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.cancelButton]}>
          <Text style={styles.buttonText} >Cancelar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )


}
