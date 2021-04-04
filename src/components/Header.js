import React from 'react'
import { useHistory } from 'react-router'
import '../css/header.css'
import HamburgerMenu from '../css/menu.png'
import ShoppingCard from '../css/ShopingCard.svg'
import {selectCard ,selectSideBar ,ShowSideBzr} from '../features/storeSlice'
import { useSelector ,useDispatch } from 'react-redux';
import SideBar from './SideBar'

export default function Header() {
    const CardItems = useSelector(selectCard);
    const sideBar = useSelector(selectSideBar)
    const dispatch = useDispatch()
  const history = useHistory()
  
  function open(){
   history.push("/card")
  }
    return (
        <div className ="header">
        <div className="hdr_left" onClick={()=> {
            dispatch(ShowSideBzr())
        }} >
        <img  src={HamburgerMenu} alt='hamburger' />
        
        </div>

        <div className="hdr_center" >
                <p>shopy</p>
        </div>

        <div className ="hdr_right" onClick={() => {
           open()
        }} >
            <img src={ShoppingCard}  alt="card_shopping" />
            <span>
                {CardItems.length === 0 ? '' : CardItems.length}
            </span>
        </div>
       {
        sideBar && <SideBar /> 
       }
        
        
        </div>
    )
}
