import React, { useContext, useState } from "react";
import Title from "../Components/Title";
import CartTotal from "../Components/CartTotal";
import { assets } from "../assets/assets/frontend_assets/assets";
import { ShopContext } from "../Context/ShopContext";

// Sifariş yerləşdirmə forması komponenti
const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {navigate}= useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
      {/* Sol tərəf - form bölməsi */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:texy-2xl my-3">
          <Title text1={"Çatdırılma"} text2={"Haqqında"} />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full  outline-none"
            type="text"
            placeholder="Ad"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            type="text"
            placeholder="Soyad"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
          type="email"
          placeholder="Email"
        />

        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
          type="text"
          placeholder="Küçə"
        />

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full  outline-none"
            type="text"
            placeholder="Şəhər"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            type="text"
            placeholder="Şəhər"
          />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full  outline-none"
            type="number"
            placeholder="Rayon"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full outline-none"
            type="text"
            placeholder="Poçt kodu"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full  outline-none"
          type="number"
          placeholder="Telefon"
        />
      </div>
      {/* sag teref */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"Ödəniş"} text2={"Üsulu"} />
          {/* Ödəniş  Üsulu*/}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer  "
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">Nağd pul</p>
            </div>
          </div>
          <div className="w-full text-end mt-8 ">
            <button onClick={()=>navigate('/Orders')} className="bg-black text-white px-16 py-3 text-sm rounded-sm">sifariş verin</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
