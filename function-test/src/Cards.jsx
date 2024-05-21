import React, { useState } from 'react'
import list from '../Data/product'
import { Link } from 'react-router-dom'


const Cards = () => {

  

  return (
    
    
    <div >
   
      {
           list.map((item,index)=>(
            
                   <Link key={item.id} to={`/card/${item.name}`}>
                        <div  className='cards' >
                                    <img src={item.img} alt="" style={{width:"100%",height:"5%"}}/>
                                    <p>{item.name}</p>
                                    {/* <p>{item.index.name}</p> */}
                        </div>
                   </Link>
                        
                )
            )
      }
      
      
    </div>
  )
}

export default Cards