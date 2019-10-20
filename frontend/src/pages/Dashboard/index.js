import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'

import socketio from 'socket.io-client'
import api from '../../services/api'

import './styles.css'


export default function Dashboard() {
  const [spots, setSpots] = useState([])
  const [requests, setRequests] = useState([])


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

  const user = localStorage.getItem('user')
  // guarda a informação do socket
  const socket = useMemo(() => socketio('http://localhost:3333', {
    query: { user }
  }), [user])

  useEffect(() => {
    socket.on('booking_request', data => {
      setRequests([...requests, data])
    })
    /*
    socket.on('message', data => {
      setTimeout(() => {
        alert(data)

      }, 4000)
    })
    */
  }, [requests, socket])


  async function handleAccept(id) {
    await api.post(`/bookings/${id}/approvals`)

    setRequests(requests.filter(request => request._id !== id))
  }

  async function handleReject(id) {
    await api.post(`/bookings/${id}/rejections`)

    setRequests(requests.filter(request => request._id !== id))
  }

  return (
    <>
      <ul className="notifications">
        {requests.map(request => (

          <li key={request._id}>
            <p>
              <strong>{request.user.email}</strong> está solicitando uma reserva em
              <strong> {request.spot.company}</strong> para a data
              <strong> {request.date}</strong>
            </p>
            <button className='accept' onClick={() => handleAccept(request._id)}>ACEITAR</button>
            <button className='reject' onClick={() => handleReject(request._id)}>REJEITAR</button>
          </li>
        ))}
      </ul>
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
