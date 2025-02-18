import React from 'react'
import Player from '../components/Player'
import { Link } from 'react-router-dom'

const Song = () => {
  return <div className='song'>

    <div className="song__container">
      <div className="song__image-container">
        <img className='song__image' src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24" alt="imagem da música x" />
      </div>
    </div>

    <div className="song__bar">
      <Link to="/artist/1" className="song__artist-image">
        <img width={75} height={75} className='' src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf" alt="Imagem do artista X" />
      </Link>

      <Player/>

      <div className="">
        <p className='song__name'>Última Saudade - Ao vivo</p>
        <p>Henrique & Juliano</p>
      </div>
      
    </div>
  </div>
}

export default Song