import React from "react";
import Title from "../Components/Title";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { assets } from "../assets/assets/frontend_assets/assets";
import NewLetterBox from "../Components/NewLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"Bizimle"} text2={"Elaqe"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px] border-l border-t border-gray-700 rounded-s-md shadow-md"
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-6 p-8 bg-white rounded-lg shadow-md text-justify ">
          <p className="text-gray-700 ">
            Bizimlə əlaqə saxlamaq üçün aşağıdakı məlumatlardan istifadə edə
            bilərsiniz. İstər ikinci əl, istərsə də yeni geyimlərimizlə bağlı
            suallarınızı məmnuniyyətlə cavablandırarıq. Müştəri məmnuniyyəti
            bizim üçün ən önəmlisidir. Sizə daha yaxşı xidmət göstərmək üçün rəy
            və təkliflərinizi bizimlə paylaşın. Geyimlərimizin keyfiyyəti,
            çatdırılma prosesi və ya başqa bir mövzu ilə bağlı hər hansı
            sualınız varsa, bizə müraciət etməkdən çəkinməyin.
          </p>
          <p className="text-gray-700">
            Tel:{" "}
            <a
              href="tel:+994555555555"
              className="text-gray-600 hover:underline"
            >
              +994 55-555-55-55
            </a>{" "}
            <br />
            E-poçt:{" "}
            <a
              href="mailto:My-wardrobe@.com"
              className="text-gray-600 hover:underline"
            >
              My-wardrobe@.com
            </a>
          </p>
          <address className="not-italic text-gray-700">
            Adress: Bakı şəhəri, Nizami küçəsi 123
          </address>
          <p className="text-gray-700">
            İş saatlarımız: Həftə içi hər gün{" "}
            <span className="text-gray-600">09:00 - 18:00</span>
          </p>

          <p className="text-gray-700 ">
            Sosial şəbəkələrdə də bizi izləyərək yeniliklərdən xəbərdar olun və
            kampaniyalarımızı qaçırmayın.
          </p>
          {/* sosial sebeke */}

          <div className="flex gap-4 mt-6 ">
            <Link
              to="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-800 border-4  border-gray-500 p-2 rounded-full "
            >
              <Facebook size={24} />
            </Link>
            <Link
              to="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer" //Təhlükəsizlik məqsədi ilə əlavə edilir ki, yeni pəncərədə açılan səhifə orijinal səhifəyə geri müraciət edə bilməsin.
              className="text-gray-600 hover:text-blue-800 border-4  border-gray-500 p-2 rounded-full"
            >
              <Instagram size={24} />
            </Link>
            <Link
              to="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-800 border-4  border-gray-500 p-2 rounded-full"
            >
              <Linkedin size={24} />
            </Link>
          </div>

        </div>
      </div>
      <NewLetterBox/>
    </div>
  );
};

export default Contact;
