import React, { useState, useEffect } from 'react';
import {
  // SafeAreaView,
  Text,
  AsyncStorage,
  Image,
  ScrollView
} from 'react-native';

import SpotList from '../../components/SpotList'
import SafeAreaView from '../../components/SafeAreaView'

import logo from '../../assets/logo.png'
import styles from './styles'



export default function List() {

  const [techs, setTechs] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('techs').then(storageTechs => {
      const techsList = storageTechs.split(',').map(tech => tech.trim())

      setTechs(techsList)
    })
  }, [])



  return (
    <SafeAreaView /*style={styles.container}*/>
      <Image source={logo} style={styles.logo} />

      <ScrollView>
        {techs.map(tech => <SpotList key={tech} tech={tech} />)}
      </ScrollView>

    </SafeAreaView>
  )
}
