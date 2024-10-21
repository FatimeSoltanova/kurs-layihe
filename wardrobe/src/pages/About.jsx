import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets/frontend_assets/assets";
import NewLetterBox from "../Components/NewLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"Bizim"} text2={"Haqqımızda"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16 text-justify ">
        <img
          className="w-full md:max-w-[480px] border-l  border-t border-gray-700 rounded-s-md shadow-md"
          src={assets.haqqinda}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 p-8 bg-white rounded-lg shadow-md text-justify">
          <p>
            <b> My Wardrobe</b> - geyim dünyasına müasir yanaşmanı təqdim edən
            onlayn platformadır. Biz hər kəsin öz stilini tapa biləcəyi,
            büdcəsinə uyğun seçimlər edə biləcəyi və keyfiyyətli məhsullar əldə
            edə biləcəyi virtual moda məkanıyıq.
          </p>
          <p>
            Biz yeni və ikinci əl geyimlərin etibarlı online satış
            platformasıyıq. Keyfiyyətli brendləri əlçatan qiymətlərlə təqdim
            edirik. Hər bir məhsulun mövcud vəziyyəti dəqiq
            təsvir olunur.
          </p>

          <b className="text-gray-800">Bizim Missiyamiz</b>
          <p>
            Davamlı moda anlayışını dəstəkləyərək, keyfiyyətli geyimləri əlçatan
            etməkdir. Biz inanırıq ki, stil həm büdcəyə uyğun, həm də ətraf
            mühitə dost ola bilər. Platformamız vasitəsilə geyimlərinizi
            təzələyə və ya istifadə etmədiyiniz geyimləri yeni sahibləri ilə
            görüşdürə bilərsiniz.
          </p>
        </div>
      </div>
      <div className="text-3xl py-4">
        <Title text1={"Niyə"} text2={"bizi seçməlisiniz?"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Etibarlılıq:</b>
          <p className="text-gray-600">
            100% təhlükəsiz alış-veriş və ödəmə sistemi, şəffaf qiymət siyasəti
            və ədalətli yanaşma, məhsullar haqqında dəqiq və düzgün
            məlumatlandırma, bütün əməliyyatların tam qanuniliyinə zəmanət,
            müştəri məlumatlarının qorunması və məxfilik təminatı, uzunmüddətli
            və davamlı əməkdaşlıq prinsipi
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Rahatlıq:</b>
          <p className="text-gray-600">
            24/7 onlayn sifariş imkanı, asan və sürətli axtarış sistemi, detallı
            məhsul təsvirləri və şəkillər, rahat ödəniş üsulları, sürətli
            çatdırılma xidməti, istədiyiniz vaxt alış-veriş edə bilmə imkanı
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Müştəri  məmnuniyyəti:</b>
          <p className="text-gray-600">
            Problemlərin dərhal və effektiv həlliç müntəzəm sorğular vasitəsilə
            xidmət keyfiyyətinin yoxlanmasıç sosial media vasitəsilə daimi əlaqə
            və dəstək, müştəri rəyləri əsasında davamlı təkmilləşmə
          </p>
        </div>
      </div>
      <NewLetterBox />
    </div>
  );
};

export default About;
