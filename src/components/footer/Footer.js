import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram , FaReact , FaTelegram  } from "react-icons/fa";
import {logo} from "../../assets/index"
import FooterList from "./FooterList"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2  gap-8">
      <div className="w-full h-full flex flex-col gap-8 items-center">
        <img className="w-50" src={logo} alt="logo" />
        <div className="flex gap-4 mobile-footer-social">
          <a href='https://www.facebook.com/Hedar.Razoq1' className="bannerIcon">
            <FaFacebookF />
          </a>
          <a href='https://x.com/haidarrazook/status/1558895663660019712?s=12&t=aMH37QH5Rg6JkA4weTP7XQ' className="bannerIcon">
            <FaTwitter />
          </a>
          <a href='https://instagram.com/haidar_razouk?igshid=OGQ5ZDc2ODk2ZA==' className="bannerIcon">
            <FaInstagram />
          </a>
          <a href='https://t.me/haidarrazooq' className="bannerIcon">
            <FaTelegram />
          </a>
        </div>
      </div>
      <div className="w-full h-full mobile-footer-social">
        <FooterList />
      </div>

    </div>
  );
}

export default Footer