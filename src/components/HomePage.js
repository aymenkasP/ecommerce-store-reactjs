import Products from "./Products"
import '../css/homePage.css'
import useApi from '../custom_hooks/useApi'
import { selectCategory } from '../features/storeSlice'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
export default function HomePage() {
    
    const Category = useSelector(selectCategory)
  
    
   
    console.log("id")
       const {data , isPending} = useApi(`https://fakestoreapi.com/products${Category.payload? Category.payload :"" }`)
       console.log(data)
  

   
    
    return (
        <div className="home_Page">

        {
  
            isPending? <p className="loading">Loading...</p>
          :data.map(product => {
            return    <Products key ={product.id} info ={product} />
            })
        }
           
        </div>
    )
}
