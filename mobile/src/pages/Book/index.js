import React from 'react';
import { Text } from 'react-native';

import SafeAreaView from '../../components/SafeAreaView'

// import { Container } from './styles';

export default function Book({ navigation }) {
  const id = navigation.getParam('id')

  return (
    <SafeAreaView>
      <Text>{id}</Text>
    </SafeAreaView>
  )


}
