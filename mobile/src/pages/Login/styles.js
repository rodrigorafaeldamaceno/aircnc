import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa todo espaço da tela
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    alignSelf: 'stretch', //ira ocupar a largua maxima possivel
    paddingHorizontal: 30, //padding nas laterais
    marginTop: 30,
  },
  label: {
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 8, //distancia a label em 8px
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    marginBottom: 20,
    borderRadius: 6
  },
  button: {
    height: 42,
    backgroundColor: '#f05a5b',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6
  },
  buttonText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default styles