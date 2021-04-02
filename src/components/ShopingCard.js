import React from 'react'
import { useSelector } from 'react-redux';
import {selectCard} from '../features/storeSlice'

export default function ShopingCard() {
    const CardItems = useSelector(selectCard);
   
    return (
        <div>
                
        </div>
    )
}
