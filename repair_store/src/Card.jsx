import React from 'react'
import { useParams } from 'react-router-dom'
import list from '../Data/product'
import '../css/card.css'

const Card = () => {

    let {name}=useParams()
    let selectedCard=list.find((card)=>{return card.name===name})
    console.log(selectedCard)

  return (
    <div className='card'>

      {/* <h1>Card</h1> */}
      <div className='card-item'>
        <img src={selectedCard.img} alt="" />
        <h1>{selectedCard.name}</h1>
      </div>
      <div className='card-description'>
        <div className='card-description-box'>
            <h3>Write The Damage Problems Here</h3>
            <textarea name="" id=""  defaultValue="Write Here......"></textarea>
        </div>
        <div className='card-description-box card-description-box-example'>
            <h3>You can write the problem like this</h3><br/><br/>
            {selectedCard.Description.map((description,index)=>(
                // console.log(description) 
                <li key={index}>{description}</li> 
                // <li>{description}</li>
                )
            
            )}
        </div>
        <div className='card-description-box card-description-box-img'><img src="../Assests/8303673-removebg-preview.png" alt="" /></div>
        
      </div>
      <div className="card-button">
        <button className='card-button-request'>Request</button>
        <button className='card-button-cancel'>Cancel</button>
      </div>
      
    </div>
  )
}

export default Card
