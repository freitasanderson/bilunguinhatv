import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'

export function Header() {
  return (
    <>
        <div id="Logo_Container" href="index.html" >
          <img id="Logo_title" src="public/Imgs/Bilunguinha IPTV.png"/> 
        </div>
    </>    
  )
}

export function Nav(){
  return (
    <>
      <nav id="Menu_Nav">
          <a href="index.html"><img src="public/Imgs/inicio.png"/></a>
          <a href="Páginas/canais.html"> <img src="Imgs/canais.png"/></a>
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


