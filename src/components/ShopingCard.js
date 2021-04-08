import React from 'react'
import { useSelector } from 'react-redux';
import {selectCard , selectTotPrice} from '../features/storeSlice'
import Card from './Card'
import '../css/shopingCard.css'
export default function ShopingCard() {
    const CardItems = useSelector(selectCard);
    const totePrice = useSelector(selectTotPrice);
    console.log(totePrice)

   console.log(totePrice)
    return (
        <div className ="shp_card">
        {
            CardItems.map(item => {
               return<Card info={item.payload} key={item.payload.id} />
            })
        }


      <div className="crt__footer" >
      test
                {
                 totePrice
                 
                 
                

                } 
                 {/* .toFixed(3) */}
      </div>
               
        </div>
    )
}
