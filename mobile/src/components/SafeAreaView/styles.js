import { StyleSheet, Platform, StatusBar, } from 'react-native'


const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

export default styles