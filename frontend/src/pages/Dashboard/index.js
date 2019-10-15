import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import './styles.css'

// import { Container } from './styles';

export default function Dashboard() {
  const [spots, setSpots] = useState([])

  // ira executar quando o component for instanciado
  // primeiro parametro é uma functiono
  // segundo são os filtros que irão ar o start na function
  // passando um array vazio ela ira executar uma unica vez
  useEffect(() => {
    async function loadSpots() {
      const user = localStorage.getItem('user')

      const response = await api.get('dashboard',
        { headers: { user } }
      )

      setSpots(response.data)
    }

    loadSpots()
  }, [])


  return (
    <>
      <ul className="spot-list">
        {spots.map(spot => (
          <li key={spot._id}>
            <header style={
              { backgroundImage: `url(${spot.thumbnail_url})` }
            } />

            <strong>{spot.company}</strong>
            <span> {spot.price ? `R$ ${spot.price}.00/dia` : 'Grátuito'}</span>
          </li>
        ))}
      </ul>
      <Link to='/new'>
        <button className='btn'>Cadastrar novo Spot</button>
      </Link>
    </>
  )
}
