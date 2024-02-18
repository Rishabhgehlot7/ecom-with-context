import React, { useContext } from 'react'
import Header from '../common/Header'
import { CartContext } from '../CartContext/MainContext'

export default function Cart() {

  let {carts,setCarts}=useContext(CartContext)
  return (
    <div>
        <Header/>
        <div class="container mx-auto px-4 sm:px-8">
  <div class="py-8">
    <div>
      <h2 class="text-2xl font-semibold leading-tight">Cart Itmes</h2>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div
        class="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
      >
        <table class="min-w-full leading-normal">
          <thead>
            <tr>
            <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Sr No.
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Product Image / Name
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Amount
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               QTY
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Total
              </th>
              <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
              >
                  Delete

              </th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cartItems,index)=>{
              return(
                <CartList cartItems={cartItems} index={index}/>
              )
            })}
           
            
           
          </tbody>
        </table>
      </div>


      <div className='flex justify-end m-[20px]'>
        <table>
          <tr>
          <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               Total Amount
              </th>
              <td
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               $120
              </td>
          </tr>
          <tr>
          <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               Tax Amount
              </th>
              <td
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
              $20
              </td>
          </tr>
          <tr>
          <th
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               Final Toatl
              </th>
              <td
                class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
              $200
              </td>
          </tr>
        </table>
      </div>


    </div>
  </div>
</div></div>
   
  )
}


function CartList({cartItems,index}){
  let {carts,setCarts}=useContext(CartContext)
  let removeData=()=>{
    // let l=[10,20,30]
    // l.filter((n,m)=>m!=0)  //[20,30]


    let filterData=carts.filter((v,i)=> index!==i )
    setCarts(filterData)
  }
  return(
    <tr>
    <td>
      {index+1}
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <div class="flex">
        <div class="flex-shrink-0 w-10 h-10">
          <img
            class="w-full h-full rounded-full"
            src={cartItems.image}
            alt=""
          />
        </div>
        <div class="ml-3">
          <p class="text-gray-900 whitespace-no-wrap">
            {cartItems.title}
          </p>
          
        </div>
      </div>
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      <p class="text-gray-900 whitespace-no-wrap">
        $ {cartItems.price}
      </p>
      
    </td>
    <td class="px-5 py-5 border-b  bg-white text-sm">
      <input value={cartItems.qty} type="number" className='border border-[red]' />
    </td>
    <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
      ${cartItems.price*cartItems.qty}
    </td>
    <td
      class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
    >
       <span onClick={removeData}
        class="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight"
      >
        <span
          aria-hidden
          class="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
        ></span>
        <span class="relative">Remove Itmes</span>
      </span>
      
    </td>
  </tr>
  )
}