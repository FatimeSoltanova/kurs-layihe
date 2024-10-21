// import React from "react";
// import { assets } from "../assets/assets/frontend_assets/assets";

// const Hero = () => {
//   return (
//     <div className="hidden sm:flex flex-row border rounded-md h-[500px] border-gray-400">
//       {/*hero left */}
//       <div className="w-1/2 flex items-center justify-center py-10">
//         <div className="text-[#414141]">
//           <div className="flex items-center gap-2">
//             <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
//             <p className="font-medium text-sm md:text-base">YENİ VƏ 2-Cİ ƏL GEYİMLƏR</p>
//           </div>
//           <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
//             Stilinizi Yeniləyin
//           </h1>
//           <div className="flex items-center gap-2">
//             <p className="font-semibold text-sm md:text-base">ALIŞ-VERİŞƏ BAŞLA</p>
//             <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
//           </div>
//         </div>
//       </div>

//       {/*hero right */}
//       <div className="w-1/2">
//         <img 
//           className="w-full h-full object-cover" 
//           src={assets.about_img} 
//           alt="" 
//         />
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets/frontend_assets/assets";

const Hero = () => {
 // Bütün slaydların məlumatlarını bir array'də saxlayırıq

 const slides = [
   {
     title: "YENİ VƏ 2-Cİ ƏL GEYİMLƏR",
     heading: "Stilinizi Yeniləyin",
     cta: "ALIŞ-VERİŞƏ BAŞLA",
     image: assets.about_img
   },
   {
     title: "ÇƏK YÜKLƏ ",
     heading: "Qarderobunu Yenilə",
     cta: "ELƏ İNDİ SAT",
     image: assets.ÇƏK
   },
   {
     title: "BİZİ SOSİAL ŞƏBƏKƏDƏ İZLƏ",
     heading: "Özəl Seçimlər",
     cta: "DAHA ÇOX MƏLUMATIN OLSUN",
     image: assets.sosial
   }
 ];

 // Hal-hazırda göstərilən slaydın indexini saxlamaq üçün state
 const [current, setCurrent] = useState(0);

 // 5 saniyədən bir avtomatik slayd dəyişməsi üçün useEffect
 useEffect(() => {
   const timer = setInterval(() => {
     // Əgər son slayddayıqsa əvvələ qayıt, əks halda növbəti slayda keç
     setCurrent(current => (current === slides.length - 1 ? 0 : current + 1));
   }, 5000); // 5000 millisaniyə = 5 saniyə

   // Component unmount olduqda timer'i təmizləyirik
   return () => clearInterval(timer);
 }, []);

 return (
   // Əsas container - mobil'də gizli, sm breakpoint'dən sonra görünür
   <div className="hidden sm:block relative  border-2 border-gray-300 h-[450px]  rounded-[15px] z-0">
     {/* Bütün slaydları map edirik */}
     {slides.map((slide, index) => (
       <div
         key={index}
         // Hər slayd absolute position ilə yerləşdirilir
         // Aktiv slayd opacity:1, digərləri opacity:0 olur
         className={`absolute w-full h-full flex transition-opacity duration-1000
           ${index === current ? 'opacity-100' : 'opacity-0'}`}
         // Aktiv olmayan slaydlara klik etməyi əngəlləyirik
         style={{ pointerEvents: index === current ? 'auto' : 'none' }}
       >
         {/* Sol tərəf - mətn hissəsi */}
         <div className="w-1/2 flex items-center justify-center py-10">
           <div className="text-[#414141]">
             {/* Yuxarı başlıq və xətt */}
             <div className="flex items-center gap-2">
               <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
               <p className="font-medium text-sm md:text-base">{slide.title}</p>
             </div>
             {/* Əsas başlıq */}
             <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
               {slide.heading}
             </h1>
             {/* Alt çağırış mətni və xətt */}
             <div className="flex items-center gap-2">
               <p className="font-semibold text-sm md:text-base">{slide.cta}</p>
               <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
             </div>
           </div>
         </div>

         {/* Sağ tərəf - şəkil hissəsi */}
         <div className="w-1/2 overflow-hidden">
           <img 
             className="w-full h-full object-cover  rounded-[0px_15px_15px_0px]"
             src={slide.image}
             alt={slide.heading}
           />
         </div>
       </div>
     ))}

     {/* Alt hissədəki indicator nöqtələr */}
     <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
       {slides.map((_, index) => (
         <button
           key={index}
           onClick={() => setCurrent(index)}
           // Aktiv nöqtə daha uzun və tünd rəngdə olur
           className={`w-2 h-2 rounded-full transition-all duration-300 
             ${current === index ? 'bg-gray-800 w-4' : 'bg-gray-400'}`}
         />
       ))}
     </div>
   </div>
 );
};

export default Hero;