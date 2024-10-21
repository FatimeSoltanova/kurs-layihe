import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { assets, products } from "../assets/assets/frontend_assets/assets";
import RelatedProducts from "../Components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productDate, setProductDate] = useState(false);
  const [image, setImage] = useState("");
  const [size,setSize]= useState('')
  const fetchProductDate = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductDate(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductDate();
  }, [productId]);
  return productDate ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 ">
      {/*product date  */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1 flex  flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
            {productDate.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto " alt="" />
          </div>
        </div>

        {/* product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 ">{productDate.name}</h1>
          <div className="flex  items-center gap-1 mt-2 ">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency} {productDate.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-3/4">
            {productDate.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="text-2xl font-medium">Ölçü</p>
            <div className="flex gap-2">
              {productDate.sizes.map((item,index)=> (
               <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ""}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=> addToCart (productDate._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 rounded-sm ">Səbətə əlavə et</button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 lex flex-col gap-1"> 
             <p>100% orijinal məhsul.</p>
             <p>Bu məhsulda nağd ödəniş mövcuddur.</p>
             <p>Mübadilə siyasəti və 7 gün ərzində asan qaytarma.</p>
          </div>
        </div>
      </div>
      {/* description & review */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Xüsusiyyət</b>
          <p className="border px-5 py-3 text-sm">Rəylər (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
         <p>Normal uyğunluq kəsimi ilə bədən cizgilərinizə uyğunlaşır və rahat istifadə imkanı verir. Bütün yaş qruplarına xitab edən dizaynı ilə geniş çeşidə sahibdir , sadəliyə üstünlük verənlərin seçimidir, düz naxışı ilə zamansız bir üslub yaratsa da,rəngi ilə diqqət çəkir.</p>
        </div>
      </div>
      {/* ƏLAQƏLİ MƏHSULLAR */}
      <RelatedProducts category={productDate.category} subCategory={productDate.subCategory}/>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
