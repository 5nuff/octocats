import React, { Component } from 'react'

import githubIcon from './images/GitHub-Mark.png'
import heisenCat from './images/heisencat.png'
import boxerCat from './images/boxertocat_octodex.jpg'
import homerCat from './images/homercat.png'
import justiceCat from './images/justicetocat.jpg'
import privateCat from './images/privateinvestocat.jpg'
import steroidCat from './images/steroidtocat.png'

import Character from './components/Character.js'

const App = () => {
  return (
    <>
      <h1>
        <img class="icon" src={githubIcon} />
        <p>Octodex</p>
        <section class="left-nav">
          <p>Home</p>
          <p>FAQ</p>
        </section>
        <section class="right-nav">
          <p>Follow us on Twitter</p>
          <p>Back to GitHub.com</p>
        </section>
      </h1>
      <main>
        <section class="cats">
          <Character image={heisenCat} name="Heisencat" />
          <Character image={boxerCat} name="Boxertocat" />
          <Character image={homerCat} name="Homercat" />
          <Character image={justiceCat} name="Justicetocat" />
          <Character image={privateCat} name="Privateinvestocat" />
          <Character image={steroidCat} name="Steroidtocat" />
        </section>
      </main>
    </>
  )
}

export default App
