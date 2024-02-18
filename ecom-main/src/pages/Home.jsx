import React, { useContext, useEffect, useState } from 'react'
import Header from '../common/Header'
import axios from 'axios'
import { CartContext } from '../CartContext/MainContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {

  let [products,setProduct]=useState([])  
 useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalRes)=>{
        setProduct(finalRes.products)
    })
 },[])

  return (
    <div>
        <Header/>
        <div className="text-center pt-5">
  <h1 className="font-bold text-4xl mb-4">Our Product </h1>
 
</div>

        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
            {products.map((data,index)=>{
                return(
                    <ProductCards pdata={data}   />
                )
            })}
           
           
           <ToastContainer />  

</section>
    </div>
  )
}

function ProductCards({pdata}){
  let {carts, setCarts}=useContext(CartContext);

  let addtoCart=()=>{
    let cartObj={
      title:pdata.title,
      price:pdata.price,
      image:pdata.thumbnail,
      qty:1
    }

    setCarts([...carts,cartObj])
    toast.success("Your Item add in Cart")

  }


    return(
        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
  <a href="#">
    <img src={pdata.thumbnail} alt="Product" className="h-60 w-72 object-cover rounded-t-xl" />
    <div className="px-4 py-3 w-72">
      <span className="text-gray-400 mr-3 uppercase text-xs">
        {pdata.brand}
      </span>
      <p className="text-lg font-bold text-black truncate block capitalize">
        {pdata.title}
      </p>
      <div className="flex items-center">
        <p className="text-lg font-semibold text-black cursor-auto my-3"> $ {pdata.price}</p>
        
        <div className="ml-auto" onClick={addtoCart}>
          
          <svg  xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
          </svg>
          
          </div>
      </div>
    </div>
  </a>
</div>

    )
}
