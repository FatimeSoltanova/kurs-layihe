import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

// Səbət cəmi komponenti
const CartTotal = () => {
  // ShopContext'dən lazımi məlumatları əldə edirik:
  // currency - valyuta
  // delivery_fee - çatdırılma haqqı
  // getCartAmount - səbətin ümumi məbləğini hesablayan funksiya
  const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
      <div className='text-2xl'> 
        <Title text1={'Səbətin'} text2={'Toplamı'}/>
      </div>

      {/* Məbləğ məlumatları bölməsi */}
      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Cəm məbləğ</p>
          <p>{getCartAmount()}.00 {currency}</p>
        </div>
        <hr />

        <div className='flex justify-between'>
          <p>Çatdırılma</p>
          <p>{delivery_fee}.00 {currency}</p>
        </div>
        <hr />

        <div className='flex justify-between'>
          <b>Cəmi</b>
          {/* Əgər səbət boşdursa 0, deyilsə məhsulların cəmi + çatdırılma haqqı */}
          <b>
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00 {currency}
          </b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal