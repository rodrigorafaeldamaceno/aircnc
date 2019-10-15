import React, { useState, useMemo } from 'react';
import './styles.css'

import api from '../../services/api'

import camera from '../../assets/camera.svg'

export default function New({ history }) {
  const [company, setCompany] = useState('')
  const [techs, setTechs] = useState('')
  const [price, setPrice] = useState('')
  const [thumbnail, setThumbnail] = useState(null)


  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null
  }, [thumbnail])

  async function handleSubmited(event) {
    event.preventDefault()

    // enviando dados apartir de um multiform
    const data = new FormData()
    const user = localStorage.getItem('user')

    data.append('thumbnail', thumbnail)
    data.append('company', company)
    data.append('techs', techs)
    data.append('price', price)

    await api.post('/spots', data, {
      headers: { user }
    })

    history.push('/dashboard')
  }

  return (
    <>
      <label
        id='thumbnail'
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Selecionar imagem" />
      </label>

      <form onSubmit={handleSubmited}>
        <label htmlFor="company">Empresa *</label>
        <input id='company'
          placeholder='Sua empresa'
          value={company}
          onChange={event => setCompany(event.target.value)}
        />

        <label htmlFor="techs">Tecnologias * <span>(separadas por virgulas)</span></label>
        <input id='techs'
          placeholder='Quais tecnologias usam?'
          value={techs}
          onChange={event => setTechs(event.target.value)}
        />

        <label htmlFor="price">Preço * <span>(em branco para GRATUITO)</span></label>
        <input id='price'
          placeholder='Valor cobrado por dia'
          value={price}
          onChange={event => setPrice(event.target.value)}
        />

        <button type="submit" className='btn'>Cadastrar</button>
      </form>
    </>
  );
}
