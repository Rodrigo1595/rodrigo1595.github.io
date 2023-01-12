import React from 'react'
import FeatureBox from './FeatureBox'
import FeatureImage1 from '../images/feature_1.png'
import FeatureImage2 from '../images/feature_2.png'
import FeatureImage3 from '../images/feature_3.png'

function Feature() {
  return (
    <div id='feature' >
      <h1 className='titleCards'>Prueba</h1>
      <div className='a-container'>
        <FeatureBox image={FeatureImage1} title="Beneficios del ejercicio"
          text="Algunos beneficios de la actividad física para la salud cerebral ocurren inmediatamente 
        después de una sesión de actividad física moderada o intensa. "/>
        <FeatureBox image={FeatureImage2} title="Cambios a futuro" text=" Vigorosidad , desempeño cotidiano ,  mejor ánimo etc." />
        <FeatureBox image={FeatureImage3} title="#Fuerza #Disciplina" text="Como pilares para triunfar en el día a día  ¡el cambio toma tiempo!" />
      </div>
    </div>
  )
}

export default Feature