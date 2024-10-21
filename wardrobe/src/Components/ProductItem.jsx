import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Link } from 'react-router-dom';
const ProductItem = ({id,image,name,price}) => {
  const {currency}=useContext(ShopContext);

    return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
  <div className='overflow-hidden rounded-[10px] shadow  '>
    <img className=' hover:scale-110 transition ease-in-out  ' src={image[0]} alt="" />
    <p className=' pb-1 text-lg px-5 pt-5'>{name}</p>
    <span className='text-lg font-bold pl-5 pb-5 text-green-700'>{price}</span>
    <span className='text-sm font-bold pl-1 pb-5 text-green-700'>{currency} </span>
   
  </div>
 
    </Link>
  )
}

export default ProductItem