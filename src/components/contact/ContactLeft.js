import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram , FaReact , FaTelegram  } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div style={{ width: "79%" }} className="text-center w-full lgl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">الإعلامي حيدر رزوق</h3>
        <p className="text-lg font-normal text-gray-400">صحفي</p>
        <p className="text-base text-gray-400 tracking-wide">
          من مواليد سورية-حمص-عام 1980 يعمل لدى إذاعة شام إف إم كمدير لمكتبها في
          محافظة حمص بالاضافة للظهور المستمر في وسائل الإعلام العالمية مثل:
          BBC-روسيا اليوم-الميادين-الغدير مدير لعديد من الصفحات الاخبارية التي
          تعمل بالشأن المحلي و السياسي السوري
        </p>

        <p className="text-base text-gray-400 flex items-center gap-2 justify-center ">
          البريد الإلكتروني <span className="text-lightText"><a href="mailto:Info@haidarrazooq.com">Info@haidarrazooq.com</a></span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">تابعني</h2>
        <div className="flex gap-4 justify-center">
          <a href="https://www.facebook.com/Hedar.Razoq1" className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href="https://x.com/haidarrazook/status/1558895663660019712?s=12&t=aMH37QH5Rg6JkA4weTP7XQ" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://instagram.com/haidar_razouk?igshid=OGQ5ZDc2ODk2ZA==" className="bannerIcon">
            <FaInstagram />
          </a>
          <a href="https://t.me/haidarrazooq" className="bannerIcon">
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
