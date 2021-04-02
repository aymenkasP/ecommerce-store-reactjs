import React from 'react'
import { useHistory } from 'react-router'
import '../css/header.css'
import HamburgerMenu from '../css/menu.png'
import ShoppingCard from '../css/ShopingCard.svg'
export default function Header() {
  const history = useHistory()
  
  function open(){
   history.push("/card")
  }
    return (
        <div className ="header">
        <div className="hdr_left" >
        <img  src={HamburgerMenu} alt='hamburger' />
        
        </div>

        <div className="hdr_center" >
                <p>shopy</p>
        </div>

        <div className ="hdr_right" onClick={() => {
           open()
        }} >
            <img src={ShoppingCard} alt="card_shopping" />
        </div>
               
        </div>
    )
}
