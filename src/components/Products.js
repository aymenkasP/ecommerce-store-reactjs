import React, { useState } from 'react'
import '../css/products.css'
import {  useDispatch, useSelector } from 'react-redux';
import {addToCard ,selectCard} from '../features/storeSlice'
export default function Products({info}) {
    const dispatch = useDispatch();
    const [Less, setLess] = useState(true)
    const [onClickLimit, setOnClickLimit] = useState(1)
  
    const card = useSelector(selectCard)
    function addto(){
        dispatch(addToCard(info))
        

    }



    function ToDisabled(){
        if (onClickLimit == 0) {
            return true
        }
            
            
    }
    
   

    return (
        <div className ="products">
           <h2 className ="prd_title">{info.title} </h2>
           <img className ="prd_img" src = {info.image} alt ={info.title}  />
           <p className = "prd_category">category: {info.category} </p>
           <p className ="prd_desc">{Less? info.description.substring(0,100) + "..." :info.description  } <span
           style={{color:'blue' , cursor: 'pointer'}}
           onClick={() => Less? setLess(false) : setLess(true)}
           >
               {Less? "More" : "Less"}
           </span> </p>
           <div className="prd_footer" >
            <p className ="prd_price">{info.price } $</p>
            <button disabled={ToDisabled()} className = "prd_btn"
            onClick={() => {
                addto()
              setOnClickLimit(0) }}
            >
                Add To Card
            </button>
           </div>
           
        </div>
    )
}
