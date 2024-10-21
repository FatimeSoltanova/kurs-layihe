import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { assets } from "../assets/assets/frontend_assets/assets";
import Title from "../Components/Title";
import ProductItem from "../Components/Productitem";

const Collection = () => {
  const { products , search ,showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("Müxtəlif");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();
if (showSearch && search){
  productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
}

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsCopy);
  };

  // sort product
  const sortProduct = () => {
    let fpCopy = filterProducts.slice();
    switch (sortType) {
      case "Ucuzdan-bahaya":
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case "Bahadan-ucuza":
        setFilterProducts(fpCopy.sort((a, b) =>( b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    setFilterProducts(products);
  }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory,search,showSearch]);
  
  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-10 pt-10 border-t ">
      {/* filter */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2 "
        >
          Filter
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>
        {/* cateqori filter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">KATEQORİYALAR</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Kişi"}
                onChange={toggleCategory}
              />
              Kişi
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Qadın"}
                onChange={toggleCategory}
              />
              Qadın
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Uşaq"}
                onChange={toggleCategory}
              />
              Uşaq
            </p>
          </div>
        </div>
        {/* SubcategoryFilter*/}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium ">Tip</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Köynek"}
                onChange={toggleSubCategory}
              />
              Köynek
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Şalvar"}
                onChange={toggleSubCategory}
              />
              Şalvar
            </p>
            <p className="flex gap-2">
              <input
                className="w-3"
                type="checkbox"
                value={"Gödəkçə"}
                onChange={toggleSubCategory}
              />
              Gödəkçə
            </p>
          </div>
        </div>
      </div>
      {/*right */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"BÜTÜN "} text2={"KOLLEKSİYALAR"} />
          {/*product sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="Müxtəlif">Sirala:Müxtəlif</option>
            <option value="Ucuzdan-bahaya">Sirala:Ucuzdan-bahaya</option>
            <option value="Bahadan-ucuza">Sirala:Bahadan-ucuza</option>
          </select>
        </div>
        {/* map product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
