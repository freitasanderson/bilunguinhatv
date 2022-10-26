import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'

// Imports das imagens
import logo from '../public/Imgs/Bilunguinha TV.png'
import inicio from '../public/Imgs/inicio.png'
import canais from '../public/Imgs/canais.png'
// Funções Components
export function Header() {
  return (
    <>
        <div id="Logo_Container" href="index.html" >
          <img id="Logo_title" src={logo}/> 
        </div>
    </>    
  )
}

export function Nav(){
  return (
    <>
      <nav id="Menu_Nav">
          <a href="index.html"><img src={inicio}/></a>
          <a href="Pages/canais.html"> <img src={canais}/></a>
      </nav>
    </>
  )

        
}

export function App(){
  return (
    <>
    <header >
      <Header/>
    </header>
    <main>
      <Nav/>
    
    </main>
    </>
  )
}


