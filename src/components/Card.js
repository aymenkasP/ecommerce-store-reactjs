import React from 'react'
import '../css/card.css'
export default function Card({info}) {
    return (
        <div className='card'>

        <div className="crd_left">
       
                <img src={info.image} alt={info.title} />
         
        </div>
            <div className="crd_center">
                {info.title}
            </div>

            <div className="crd_right" >
                    {info.price}
            </div>
        
            
        </div>
    )
}
