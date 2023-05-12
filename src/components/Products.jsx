import React from 'react'
import ProductItem from './ProductItem'
import productData from '../ProductData'

const Products = (props) => {
  return (
    <div className='grid grid-cols-3 gap-10 mb-8'>
       {productData.map((product)=> (<ProductItem key={productData.id} product={product} cart={props.cart} setCart={props.setCart}/>)) }
    </div>
  )
}

export default Products