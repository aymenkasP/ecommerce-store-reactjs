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


      <div className="shp__footer" >
        <p className='tote' > Tot <span> {totePrice.reduce((cv ,pv) => Number(cv) + Number(pv) , 0 ).toFixed(3)}</span> </p>
               
                 {/* .toFixed(3) */}
      </div>
               
        </div>
    )
}
