import React, { createContext, useEffect, useState } from 'react'
let CartContext=createContext();
export default function MainContext({children}) {
    
    let oldData=JSON.parse(localStorage.getItem("CART")) ?? []

    let [carts,setCarts]=useState(oldData)
    let crtData={
        carts,
        setCarts
    } 
    
    useEffect(()=>{
        localStorage.setItem('CART',JSON.stringify(carts))
    },[carts])
  return (
    <CartContext.Provider value={crtData}  >
        {children}
    </CartContext.Provider>
  )
}

export {CartContext}