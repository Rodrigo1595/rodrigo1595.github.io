import React from 'react'
import NavBar from './NavBar'
import About from './About'


function header() {
  return (
    <div id='main'>
      <NavBar />
      <About title='#SacaTuMejorVersión'/>
    </div>
  )
}

export default header