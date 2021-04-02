import React from 'react'
import { useSelector } from 'react-redux';
import {selectCard} from '../features/storeSlice'
import Card from './Card'
export default function ShopingCard() {
    const CardItems = useSelector(selectCard);
   console.log(CardItems)
    return (
        <div>
        {
            CardItems.map(item => {
               return<Card info={item.payload} key={item.payload.id} />
            })
        }
               
        </div>
    )
}
