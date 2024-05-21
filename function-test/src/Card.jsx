import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import list from '../Data/product';

const Card = ({addToCart}) => {
 
  const {name} = useParams();  
  // const selectedCard = list[index];
  const selectedCard = list.find(card => card.name === name); // it is arrow function --> list.find((card) => { return card.name === name}); 
  // console.log(selectedCard)
  



  // let timePss=()=>{
  //   console.log('timepass')
  // }

  return (
    <div>
      <h2>Details</h2>
      <img src={selectedCard.img} style={{width:"20%",height:"20%"}}></img>
      <h1>{selectedCard.name}</h1>
     
      <br/>
      <button onClick={() => addToCart(selectedCard)}>Request</button>
      <button>Cancel</button>
    </div>
  )
}

export default Card
