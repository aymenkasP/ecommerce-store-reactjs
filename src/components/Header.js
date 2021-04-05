import React from 'react'
import { useHistory } from 'react-router'
import '../css/header.css'
import HamburgerMenu from '../css/menu.png'
import ShoppingCard from '../css/ShopingCard.svg'
import { selectCard, selectSideBar, ShowSideBzr } from '../features/storeSlice'
import { useSelector, useDispatch } from 'react-redux';
import SideBar from './SideBar'

export default function Header() {
    const CardItems = useSelector(selectCard);
    const sideBar = useSelector(selectSideBar)
    const dispatch = useDispatch()
    const history = useHistory()



    /* open the cart list function */
    function openCartList() {
        history.push("/card")
    }


    return (

        

        <div className="header">

            {/* nav bar  */}
            <div className='nav__bar'>
                { sideBar && <SideBar /> }
            </div>


            {/* hamburger */}
            <div className="hdr_left" onClick={() => { dispatch(ShowSideBzr()) }} >
              {
                !sideBar? <img src={HamburgerMenu} alt='hamburger' /> : <div></div>
                
              }  
            </div>


            {/* the shope name */}
            <div className="hdr_center" >
                <p>shopy</p>
            </div>


            {/*  shopping cart */}
            <div className="hdr_right" onClick={() => { openCartList() }} >
                <img src={ShoppingCard} alt="card_shopping" />
                <span>
                    {CardItems.length === 0 ? '' : CardItems.length}
                </span>
            </div>


            



        </div>
    )
}
