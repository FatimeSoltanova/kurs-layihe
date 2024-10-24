import React, { useContext, useState } from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {
  const [visible, setvisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-1 font-medium">
      <Link to="/">
        <img
          src={assets.logol}
          className="w-40 cursor-pointer object-cover"
          alt=""
        />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Əsas səhifə</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/Kategoriya" className="flex flex-col items-center gap-1">
          <p>Kategoriya</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p></p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/Haqqında" className="flex flex-col items-center gap-1">
          <p>Haqqında</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
        <NavLink to="/Əlaqə" className="flex flex-col items-center gap-1">
          <p>Əlaqə</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden " />
        </NavLink>
      </ul>
           
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />
        <div className="group relative ">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </Link>
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Profil</p>
              <p className="cursor-pointer hover:text-black">Sifariş</p>
              <p className="cursor-pointer hover:text-black">Çıxış</p>
            </div>
          </div>
        </div>
        <Link to="/Cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5  " alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4  text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <Link to="/ProductList" className="flex flex-col items-center gap-1">
          <button className="bg-black text-white w-full  py-1 px-2 rounded-md hover:bg-gray-400 hover:text-black transition-colors">Məhsul Əlavə et</button>
        </Link>
        <img
          onClick={() => setvisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>
      <div
        className={`absolute top-0 right-0  bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600  z-auto">
          <div
            onClick={() => setvisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer "
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Geri</p>
          </div>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
            to="/"
          >
            Əsas səhifə
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
            to="/kategoriya"
          >
            Kategoriya
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
            to="/Haqqında"
          >
            Haqqında
          </NavLink>
          <NavLink
            onClick={() => setvisible(false)}
            className="py-2 pl-6 border"
            to="/Əlaqə"
          >
            Əlaqə
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
