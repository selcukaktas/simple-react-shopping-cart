import CartIcon from "./CartIcon"

const Header = ({cart}) => {
  return (
    <div className="flex justify-between items-center mb-6 ">
        <h1 className='text-3xl font-semibold' >Ürün Listesi</h1>
        <CartIcon cart={cart} />
        
    </div>
  )
}

export default Header