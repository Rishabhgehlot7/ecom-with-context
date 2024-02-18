import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/MainContext'

export default function Header() {
  let {carts}=useContext(CartContext)
  return (
    <header class=" relative shadow-lg px-3 py-2">
    <nav class="flex justify-between">
      <div class="w-[130px] md:w-[200px] flex items-center">
        <img src="https://i.postimg.cc/MZCBXb1K/logo.png" alt="LOGO" srcset=""/>
      </div>
      <div class="flex items-center gap-3">
        <div class="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
          <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
            <li class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><a href="#">
                <Link to={'/'}>
                    Home
                </Link>
                
                </a></li>
            <li class="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300"><a href="#">
            <Link to={'/product'}>
                Product
                </Link>
                
                </a></li>
           
            
          </ul>
        </div>
        <div class="flex items-center gap-2">
          <button type="button" class="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3]  font-bold text-white px-5 py-2 rounded-full ">
          <Link to={'/cart'}>
            Cart({carts.length})
            </Link>
            
            </button>
         
        </div>
      </div>
    </nav>
  </header>
  )
}
