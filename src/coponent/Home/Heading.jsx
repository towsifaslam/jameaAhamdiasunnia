import React from "react";
import Logo from "../../assets/Logo.png";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
function Heading() {
  return (
    <div className="max-w-screen-lg m-auto bg-white ">
      {/* left site */}
      <div className="flex flex-col md:flex-row justify-between items-center h-14 m-5 pt-10  text-center sm:gap-3 sm:pt-0 mb-20 mt-20">
        <div className="h-20 w-20">
          <img src={Logo} alt="" />
        </div>
        {/* middel site */}
        <div>
          <div className="flex flex-col justify-center items-center gap-y-3">
            <h2 className="text-2xl text-green-500 font-bold">
              الجامعة الاحمدية السنية العالية (الكامل)
            </h2>
            <h1 className=" font-semibold text-3xl">
              জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসা
            </h1>
            <p className="text-xl text-gray-500">
              Jamea Ahmadia Sunnia Kamil Madrasah
            </p>
          </div>
        </div>
        {/* right site  */}
        <div className="flex text-lg gap-2 cursor-pointer">
          <div className="w-15 h-15 bg-green-400 rounded-lg hover:bg-white">
            <AiFillFacebook size={40} />
          </div>
          <div className="w-15 h-15 bg-green-400 rounded-lg hover:bg-white">
            <AiFillTwitterSquare size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
