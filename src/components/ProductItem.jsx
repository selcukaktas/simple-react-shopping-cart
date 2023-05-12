import React from 'react'
const ProductItem = ({product, cart,  setCart}) => {
  const findProduct = cart.find((item) => item.id === product.id);
  const addToCart = (product) => {
    //  setCart(product);
    //setCart([...cart,product]);
    //console.log(prevState);
    setCart((prevState) => [...prevState, product]);
  }

  return (
    
    <div className='border p-4 rounded-lg shadow-lg '>
      <img className='w-full h-48 object-cover rounded-t-lg' src={product.image} alt="product-image" />
    <div className='p-4'>
      <h2 className='text-xl font-semibold'>{product.name}</h2>
      <p className='text-gray-600 my-2'> {product.price} TL</p>
      <button className={`bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-700 ${findProduct && "opacity-50 cursor-no-drop"}`} onClick={() => addToCart(product)} disabled={findProduct}>
        Sepete Ekle
      </button>
    </div>
    </div>
  )
}

export default ProductItem