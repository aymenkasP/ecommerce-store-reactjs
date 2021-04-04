import React from 'react'
import { useDispatch } from 'react-redux'
import '../css/sideBar.css'
import { HideSideBar  } from '../features/storeSlice'
export default function SideBar() {
    const dispatch = useDispatch()
   
    console.log(SideBar)
    return (
        <div className="sd_bar">
            <p>electronics</p>
            <p>jewelery</p>
            <p>men clothing</p>
            <p>women clothing</p>
         
            <span className ="qut" onClick ={()=> {
                dispatch(HideSideBar())
            }} >x</span>
           
            
        </div>
    )
}
