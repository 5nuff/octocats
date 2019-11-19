import React from 'react'

const Character = props => {
  return (
    <section>
      <img src={props.image} />
      <h2>{props.name}</h2>
      <p>{props.tagline}</p>
    </section>
  )
}

export default Character
