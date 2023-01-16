import React from "react";
import Img1 from "../../assets/hujur.jpg";
import { MdNotificationsNone } from "react-icons/md";
function SlideForHujurKheb() {
  const slids = [
    {
      img: <Img1 />,
      name: " Syed Taher Sah (MJA)",
      details:
        " Taher Shah is a Pakistani singer, best known for his songs Eye to",
    },
  ];
  return (
    <div className="max-w-screen-lg m-auto mt-10 mb-10  gap-x-3  ">
      <div className="  relative  h-72 bg-gradient-to-b from-green-300 to-white-300 pr-4 flex   justify-between items-center  ">
        <div className="w-1/3  absolute right-0 top-5 object-cover ">
          <img src={Img1} alt="" />
        </div>
        <div>
          <h1 className="text-[31px] font-bold min-w-max flex-1">
            Syed Taher Sah (MJA)
          </h1>
          <p className=" ">
            {" "}
            Taher Shah is a Pakistani singer, best known for his songs "Eye to
            Eye" and "Angel".[1] <br />
            He has been described as "Pakistan's most spectacular internet
            celebrity" by Dawn <br />
            newspaper.[2] It was <br />
            thought that he left singing after receiving death threats,[3] but
            he released an animated <br />
            Urdu song, "omaad nahi hai Farishta", in April 2020.[4]
          </p>
          <div className="text-center mt-10">
            <button className="border px-4 py-2 bg-gradient-to-b from-green-500 to-white-100 text-black uppercase shadow-lg rounded-r-2xl ">
              <a href="https://en.wikipedia.org/wiki/Taher_Shah">See more</a>
            </button>
          </div>
        </div>
      </div>
      {/* second */}
      <div className="mt-10 bg-green-500">
        <div className="flex">
          <div className="flex gap-7 text-white">
            <div className="bg-black pt-1">
              {" "}
              <MdNotificationsNone size={30} />
            </div>

            <p className="text-xl border-r-8 border-gray-600 p-2">সর্বশেষ</p>
          </div>
          <div className=" ">
            <p className="p-2">
              সংক্রান্ত পূণঃ নোটিশ ২০২০ শিক্ষাবর্ষে ছাত্র ভর্তি বিজ্ঞপ্তি ফাযিল
              স্নাতক (পাস) ৩ বৎসর মেয়াদী ফাযিল ১ম বর্ষে
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideForHujurKheb;
