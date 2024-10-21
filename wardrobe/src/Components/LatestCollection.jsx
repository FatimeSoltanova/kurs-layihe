import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./Productitem";

// Son əlavə edilən məhsulları göstərən əsas komponent
const LatestCollection = () => {
  // ShopContext'dən products məlumatını əldə edirik
  const { products } = useContext(ShopContext);
  // Son əlavə edilən məhsulları saxlamaq üçün state yaradırıq
  const [latestProducts, setLatestProducts] = useState([]);

  // products dəyişəndə işə düşən effekt
  useEffect(() => {
    // Bütün məhsullardan ilk 10-nu götürüb state'ə mənimsədirik
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Son"} text2={"Əlavə edilənlər"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Ən yeni məhsullarla elə indi tanış olun.Modanı izləyin.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {/* Hər bir məhsul üçün ProductItem komponenti yaradırıq */}
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index} // Hər elementin unikal açarı
            id={item._id} // Məhsulun ID'si
            image={item.image} // Məhsulun şəkli
            name={item.name} // Məhsulun adı
            price={item.price} // Məhsulun qiyməti
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
