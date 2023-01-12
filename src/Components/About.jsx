import React from 'react'
import imgsRmsLogo from '../images/rms_logo_v3.png'

function About(props) {
  return (
    <div id='about'>
        <div className='about-text' id='acerca_de'>
            <h2 className='about-text'>{props.title}</h2>
            <p className='about-text'>
            Aquí va una pequeña reseña sobre RMS FUNCTIONAL.
            </p>
            <p className='about-text'>
            Lorem ipsum dolor sit amet,consectetur adipiscing elit.
            Aenean pulvinar eros id ipsum posuere gravida.
            Cras finibus volutpat orci eu varius.
            </p>
            <p className='about-text'>
            Hola mi nombre es Bryan Salazar Cabezas , actualmente me dedico a XXXXXXXXX
            Soy entrenador y emprendedor a tiempo completo.
            </p>
            <p className='about-text'>
            Y aquí hay otro párrafo mas que podrías escribir y seguir rellenando según estimes conveniente.
            </p>
        </div>
        <div className='about-image'>
            <img src={imgsRmsLogo} alt="No Logo" />
        </div>

    </div>
  )
}

export default About