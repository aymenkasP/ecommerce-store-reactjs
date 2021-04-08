import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import '../css/sideBar.css'
import { HideSideBar ,category ,selectCategory } from '../features/storeSlice'
export default function SideBar() {
    const dispatch = useDispatch()
    const Category = useSelector(selectCategory)
    const history = useHistory()
    console.log(history.location)
    const {id} = useParams()

    function openCategory(CategoryName){
        
            dispatch(category(CategoryName))
            history.push('/')

    }
    
    return (

         /* nav  */
        <div className="sd_bar">

            {/* nav items */} 
            <div className="sd__items" >
                <p className='sd__item'  onClick ={() => openCategory(`/category/electronics `)} >electronics</p>
                <p className='sd__item' onClick ={() => openCategory('/category/jewelery')} >jewelery</p>
                <p className='sd__item' onClick ={() => openCategory('/category/men clothing')} >men clothing</p>
                <p className='sd__item' onClick ={() => openCategory('/category/women clothing')} >women clothing</p>
                <p className='sd__item' onClick ={() => openCategory('/')} >all</p>
            </div>

            {/* close the side bar icon */}
            <div className="sd__qut__icon" >
               
                <span className="qut" onClick={() => { dispatch(HideSideBar()) }} >x</span>
            </div>



        </div>
    )
}
