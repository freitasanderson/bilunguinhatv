import { useState } from 'react'

// Imports das imagens
import logo from './Imgs/Bilunguinha TV.png'
import inicio from './Imgs/inicio.png'
import canais from './Imgs/canais.png'
// Funções Components

export function Head(){
  return (
    <>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/Img/Bilunguinha TV icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
      integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous" defer>
      </script>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous" defer>
      </script>

      <link rel="stylesheet" href="/assets/CSS/style.css"/>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous" defer/>

      
    </>
  )
}
export function Header() {
  return (
    <>
        <div id="Logo_Container">
          <a href="/">
            <img id="Logo_title" src={logo}/>
          </a>   
        </div>
    </>    
  )
}

export function Nav(){
  return (
    <>
      <nav id="Menu_Nav">
          <a href="/"><img src={inicio}/></a>
          <a href="/Pages/canais.html"><img src={canais}/></a>
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
      <Nav/>
    </>
  )
}


