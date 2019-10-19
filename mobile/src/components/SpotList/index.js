import React, { useEffect, useState } from 'react';
import { withNavigation } from 'react-navigation'
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';


import api from '../../services/api'
import { IP } from '../../config/ip'


import styles from './styles';

function SpotList({ tech, navigation }) {

  const [spots, setSpot] = useState([])

  useEffect(() => {
    const loadSpots = async () => {
      const response = await api.get('/spots', {
        params: { tech }
      })

      setSpot(response.data)
    }

    loadSpots()
  }, [])

  const handleNavigate = (id) => {
    navigation.navigate('Book', { id })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Empresas que usam <Text style={styles.bold}>{tech}</Text></Text>
      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (


          <View style={styles.listItem}>
            <Image style={styles.thumbnail} source={{ uri: item.thumbnail_url.replace('localhost', IP) }} />

            <Text style={styles.company}>{item.company}</Text>
            <Text style={styles.price}>{item.price ? `R$${item.price}.00/dia` : 'GRATUITO'}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText} onPress={() => handleNavigate(item._id)}>Solicitar reserva</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export default withNavigation(SpotList)