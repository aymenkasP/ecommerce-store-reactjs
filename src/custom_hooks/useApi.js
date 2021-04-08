import { useState, useEffect  } from 'react';
import axios from "axios";



export default function useApi(url) {
   const [data , setData] = useState([]);
   const [isPending, setIsPending] = useState(true);
   

   useEffect(()=> {
     setIsPending(true)
    
        
        const getData = async () => {
          const result = await axios(url);
         
           setData(result.data)
           setIsPending(false)
     }
     console.log(url)
         getData() 
    
   },[url])
   return {data , isPending}
};

