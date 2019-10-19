import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: 32,
    resizeMode: 'contain', //pra não cortar a imagem
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 6
  }
})

export default styles