import React from 'react'
import list from '../Data/product'
import { Link } from 'react-router-dom'


const Cards = () => {
  return (
    
    
    <div >
   
      {
           list.map((item,index)=>(
            
                   <Link key={index} to={{pathname:'/card',state:item}}>
                        <div  className='cards' >
                                    <img src={item.img} alt="" style={{width:"100%",height:"5%"}}/>
                                    <p>{item.name}</p>
                                    {/* <p>{item.index.name}</p> */}
                        </div>
                   </Link>
                        
                )
            )
      }
      
      
      {/* style={{width:"100%",height:'70%'}} */}

    </div>
  )
}

export default Cards