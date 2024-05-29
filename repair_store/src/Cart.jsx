import React from 'react'
import '../css/cart.css'
const Cart = ({cart,setCart}) => {

  let cartDelete=(dataToDelete)=>{
    let newData=[...cart]
    newData.splice(dataToDelete,1)
    console.log('deleted')
    setCart(newData)
  }
  return (
    <div className='cart'>
      {/* <h1>Cart</h1> */}

      {
           cart.map((item,index)=>(
            
                   
                        <div key={item.id} className='cards' >
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p>
                                    <button onClick={()=>cartDelete(index)}>Delete</button>
                        </div>
                
                        
                )
            )
      }
      
    </div>
  )
}

export default Cart
