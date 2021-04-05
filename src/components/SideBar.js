import React from 'react'
import { useDispatch } from 'react-redux'
import '../css/sideBar.css'
import { HideSideBar } from '../features/storeSlice'
export default function SideBar() {
    const dispatch = useDispatch()

    console.log(SideBar)
    return (

         /* nav  */
        <div className="sd_bar">

            {/* nav items */} 
            <div className="sd__item" >
                <p>electronics</p>
                <p>jewelery</p>
                <p>men clothing</p>
                <p>women clothing</p>
            </div>

            {/* close the side bar icon */}
            <div className="sd__qut__icon" >
               
                <span className="qut" onClick={() => { dispatch(HideSideBar()) }} >x</span>
            </div>



        </div>
    )
}
