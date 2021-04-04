import { useState, useEffect } from 'react';


export default function useApi(url) {
   const [data , setData] = useState([]);
   const [isPending, setIsPending] = useState(true);

   useEffect(()=> {
    setTimeout(()=>{
        const getData = async () => {
          const result = await axios(url);
           setProducts(result.data)
           setIsPending(false)
     }
         getData() 
     }, 2000)
   },[url])
   return {data , isPending}
}

export default useApi ;