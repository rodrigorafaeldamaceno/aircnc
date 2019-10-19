import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 30
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
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },
  cancelButton: {
    backgroundColor: '#ccc',
    marginTop: 10
  },
})

export default styles