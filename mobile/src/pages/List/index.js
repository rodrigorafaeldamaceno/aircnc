import React, { useState, useEffect } from 'react';
import {
  // SafeAreaView,
  Alert,
  Text,
  AsyncStorage,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import SpotList from '../../components/SpotList'
import SafeAreaView from '../../components/SafeAreaView'
import socketio from 'socket.io-client'

import logo from '../../assets/logo.png'
import styles from './styles'
import { IP, PORT } from '../../config/ip'




export default function List({ navigation }) {

  const [techs, setTechs] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('user').then(user => {
      const socket = socketio(`http://${IP}:${PORT}`, {
        query: { user }
      })

      socket.on('booking_response', booking => {
        Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} 
          foi ${booking.approved ? "Aprovada" : "Rejeitada"}`)
      })
    })
  }, [])

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techsList = storageTechs.split(',').map(tech => tech.trim())

      setTechs(techsList)
    })
  }, [])

  function backToLogin() {
    navigation.navigate('Login')
  }



  return (
    <SafeAreaView /*style={styles.container}*/>
      <TouchableOpacity onPress={backToLogin}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>

      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>

    </SafeAreaView>
  )
}
