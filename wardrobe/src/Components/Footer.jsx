import React from "react";
import { assets } from "../assets/assets/frontend_assets/assets";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div>
      
      <div className="flex flex-col sm:flex-row my-10 mt-40   lg:gap-[30rem] text-sm sm:-[5rem] ">
        
        <div>
          
          <Link to="/">
            <img src={assets.logol} className="mb-5 w-32 object-cover" alt="" />
          </Link>
          <p className="w-[250px] text-gray-600 ">
            Əlverişli qiymətlərlə yeni və ikinci əl geyimlərimizi kəşf edin,
            stilinizi yeniləyin. Hər alış-verişdə keyfiyyət və davamlılıq
            garantisi. Sizin məmnuniyyətiniz bizim prioritetimizdir!
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-20 mt-9  text-sm ">
          <div>
            <ul className="flex flex-col gap-1 text-gray-700 cursor-pointer mt-9">
              <Link to="/">
                <li>Əsas səhifə</li>
              </Link>
              <Link to="/Istifadəşərtləri">
                <li>Istifadə şətləri</li>
              </Link>
              <Link to="/Kategoriya">
                <li>Kateqoriya</li>
              </Link>
              <Link to="/Haqqında">
                <li>Haqqında</li>
              </Link>
              <Link to="/Əlaqə">
                <li>Əlaqə</li>
              </Link>
            </ul>
          </div>
          <div>
          
            <ul className="flex flex-col gap-1 text-gray-600 cursor-pointer mt-9 mb-2 ">
            <b>Email:</b>
              <li>My-wardrobe@.com</li>

            </ul>
            <b className="text-gray-600">Sosial Şəbəkə:</b>
            <div className="flex gap-4 mt-2 ">
              
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-800 "
                >
                  <Facebook size={18} />
                </Link>
                <Link
                  to="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer" //Təhlükəsizlik məqsədi ilə əlavə edilir ki, yeni pəncərədə açılan səhifə orijinal səhifəyə geri müraciət edə bilməsin.
                  className="text-gray-700 hover:text-blue-800 "
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  to="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-800 "
                >
                  <Linkedin size={18} />
                </Link>
              </div>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@Mywardrobe - Bütün hüquqlar qorunur.
        </p>
      </div>
    </div>
  );
};

export default Footer;
