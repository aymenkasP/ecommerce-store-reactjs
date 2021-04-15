import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import '../css/card.css'
import { selectTotPrice, totPriceFun ,totPriceFunEdit } from '../features/storeSlice';
export default function Card({ info }) {
    const [itemQuantity, setItemQuantity] = useState(1)
 
     

    const totalItemPrice = itemQuantity * info.price;
    

    const totprice = useSelector(selectTotPrice)
    const dispatch = useDispatch()
    const [onClickLimit, setOnClickLimit] = useState(true)

  

    
    return (
        <div className='card'>

                {/* card body */}
            <div className='card__body'>

                    {/* card img */}
                <div className="crd_left">
                    <img src={info.image} alt={info.title} />
                </div>


                    {/* center card */}
                <div className="crd_center">

                        {/* card title */}
                    <div className='card__item__title' >
                        {info.title}
                    </div>

                            {/* card Quantity */}
                    <div className='crd__item__quantity'>
                        <input type='Number' value={itemQuantity} onChange={(e) => { setItemQuantity(e.target.value) }} />
                         <button onClick={() => {

                                
                                dispatch(totPriceFun(totalItemPrice))
                             
                             
                              
                              
                              }} > add  </button> 

                              <button  onClick={()=> {
                                   dispatch(totPriceFunEdit(totalItemPrice))
                                   dispatch(totPriceFun(totalItemPrice))
                                   }}>
                                  updite
                              </button>
                    </div>
                </div>
                

                    {/* info price */}
                <div className="crd_right" >
                    {info.price}
                    <span> full price {totalItemPrice.toFixed(3)} </span>
                </div>

            </div>
        </div>
    )
}
