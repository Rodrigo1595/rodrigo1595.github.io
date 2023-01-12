import React from 'react'
import GitHubLogo from '../images/github-mark-white.png'

function Footer() {
  return (
    <footer className='footer'> 
    RMS FUNCTIONAL ™ , Página creada por @Rodrigo1595 en GitHub 
    <img src={GitHubLogo} alt='NoLogo'  height={25} className='footerImg'/>
    
    </footer>
  )
}

export default Footer