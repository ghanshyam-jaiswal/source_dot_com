import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = ({addToCart}) => {

    const location = useLocation();
    const { selectedCard } = location.state;

    let navigate=useNavigate()
    
    let handleCancel=()=>{
        navigate(`/card/${selectedCard.name}`)
    }

    let thankYou=()=>{
        navigate('/thankyou')
    }

  return (
    <div>
      <h1>payment</h1>
      <button onClick={()=>{addToCart(selectedCard);thankYou()}}>Proceed</button>
      <button onClick={()=>handleCancel()}>Cancel</button>

    </div>
  )
}

export default Payment
