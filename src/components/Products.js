import React from 'react'
import '../css/products.css'
import {  useDispatch } from 'react-redux';
import {addToCard ,} from '../features/storeSlice'
export default function Products({info}) {
    const dispatch = useDispatch();
    function addto(){
        dispatch(addToCard(info))
        

    }
    
   

    return (
        <div className ="products">
           <h2 className ="prd_title">{info.title} </h2>
           <img className ="prd_img" src = {info.image} alt ={info.title} />
           <p className = "prd_category">category: {info.category} </p>
           <p className ="prd_desc">{info.description.substring(0,100)}... </p>
           <div className="prd_footer" >
            <p className ="prd_price">{info.price } $</p>
            <button className = "prd_btn"
            onClick={() => {
                addto()
            }}
            >
                Add To Card
            </button>
           </div>
           
        </div>
    )
}
