import React from 'react'

const Cart = ({cart, emptyCart}) => {
    const total = cart.reduce((acc,item) => acc+item.price, 0);
  
  if(cart.length === 0) return; 
    return (
    <div className='border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semi
         mb-4'>Sepet</h2>
         <ul>
            {cart.map((item) => (            
            <li className='mt-2 flex justify-between'>
                <span>
                    {item.name}
                </span>
                <span>
                    {item.price} TL
                </span>

            </li>) )}
         </ul>
         <hr className='my-4'/>
         <p className='font-semibold text-xl'>{total} TL</p>
         <button className='bg-red-400 text-white rounded py-2 px-2 w-full
         transition-all hover:bg-red-600 mt-4' onClick={emptyCart}> Sepeti Boşalt</button>
    </div>
    
  )
}

export default Cart