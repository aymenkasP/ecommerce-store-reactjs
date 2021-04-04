import React from 'react'
import Products from "./Products"
import '../css/homePage.css'
export default function HomePage({data}) {
    return (
        <div className="home_Page">

        
        {
            data.map(product => {
            return    <Products key ={product.id} info ={product} />
            })
        }
            
        </div>
    )
}
