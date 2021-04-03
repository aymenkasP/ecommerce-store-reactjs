import React from 'react'
import { useSelector } from 'react-redux';
import {selectCard} from '../features/storeSlice'
import Card from './Card'
import '../css/shopingCard.css'
export default function ShopingCard() {
    const CardItems = useSelector(selectCard);
   console.log(CardItems)
    return (
        <div className ="shp_card">
        {
            CardItems.map(item => {
               return<Card info={item.payload} key={item.payload.id} />
            })
        }
               
        </div>
    )
}
