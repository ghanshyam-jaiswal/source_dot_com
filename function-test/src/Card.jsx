import React from 'react'

const Card = (props) => {

    const { state } = props.location;
    const { img, name } = state;
    console.log(state)
    console.log(name)

  return (
    <div>
      <h2>Details</h2>
      <img src={img} />
      <p>{name}</p>
    </div>
  )
}

export default Card
