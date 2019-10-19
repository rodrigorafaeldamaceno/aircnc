import React from 'react';

import styles from './styles'

import { SafeAreaView } from 'react-native';

export default props => (
  <SafeAreaView style={styles.AndroidSafeArea} {...props} >
    {props.children}
  </SafeAreaView>
)