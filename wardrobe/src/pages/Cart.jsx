import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../Components/Title";
import { assets } from "../assets/assets/frontend_assets/assets";
import CartTotal from "../Components/CartTotal";

const Cart = () => {
  const { 
    products,      // Bütün məhsullar
    currency,      // Valyuta
    cartItems,     // Səbətdəki elementlər
    updateQuantity,// Miqdarı yeniləmək üçün funksiya
    navigate       // Səhifələr arası keçid üçün funksiya
  } = useContext(ShopContext);

  // Səbət məlumatlarını saxlamaq üçün state
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        // Yalnız miqdarı 0-dan böyük olan elementləri əlavə edirik
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={"Sizin"} text2={"Səbətiniz"} />
      </div>

      {/* Səbətdəki məhsulların siyahısı */}
      <div>
        {cartData.map((item, index) => {
          // Hər məhsul üçün ətraflı məlumatı tapırıq.mehsulun id-siyle eyni idye aid olan mehsulu products arrayinden tapiriq
          const productData = products.find(
            (product) => product._id === item._id
          );

          return (
            <div
              key={index}
              className="py-4 borde-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  {/* Məhsul adı */}
                  <p className="text-sm sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  {/* Qiymət və ölçü */}
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Miqdar dəyişdirmə input'u */}
              <input 
                onChange={(e) => 
                  e.target.value === '' || e.target.value === '0' 
                    ? null 
                    : updateQuantity(item._id, item.size, Number(e.target.value))
                } 
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" 
                type="number" 
                min={1}  
                defaultValue={item.quantity}
              />

              {/* Silmə ikonu */}
              <img 
                onClick={() => updateQuantity(item._id, item.size, 0)} 
                className="w-4 mr-4 sm:w-5 cursor-pointer" 
                src={assets.bin_icon} 
                alt="" 
              />
            </div>
          );
        })}
      </div>

      {/* Səbət cəmi və davam et düyməsi */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal/>
          <div className="w-full text-end">
            <button 
              onClick={() => navigate('/place-order')} 
              className="bg-black text-white text-sm my-8 px-8 py-3 rounded-sm"
            >
              Davam edin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;