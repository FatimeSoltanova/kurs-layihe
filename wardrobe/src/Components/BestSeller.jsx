import React, { useContext, useEffect, useState } from "react";
import {ShopContext} from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./Productitem";


const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

useEffect(() => {
    const bestProducts = products.filter((item) => 
      item.bestSeller
    );
    setBestSeller(bestProducts.length > 0 ? bestProducts.slice(0, 5) : products.slice(10, 15));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Ən çox"} text2={"baxılanlar"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
        Sezonun ən trend geyimləri bir arada.
        Premium keyfiyyət, əlverişli qiymətlər.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;