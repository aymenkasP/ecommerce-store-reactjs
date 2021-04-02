import React from 'react'
import '../css/header.css'
import HamburgerMenu from '../css/menu.png'
import ShoppingCard from '../css/ShopingCard.svg'
export default function Header() {
    return (
        <div className ="header">
        <div className="hdr_left" >
        <img  src={HamburgerMenu} />
        
        </div>

        <div className="hdr_center" >
                <p>shopy</p>
        </div>

        <div className ="hdr_right" >
            <img src={ShoppingCard} alt="card_shopping" />
        </div>
               
        </div>
    )
}
