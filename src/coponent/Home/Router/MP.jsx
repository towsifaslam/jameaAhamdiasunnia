import React from "react";
import Heading from "../Heading";
import Navbar from "../Navbar";
import Map1 from "../Map";
import Principal from "../../../assets/principale.jpg";
import slekur from "../../../assets/Salekur.jpg";
import Liakot from "../../../assets/liakot.jpg";
import asrafu from "../../../assets/asrafu.jpg";

import { BiPhoneCall } from "react-icons/bi";
import { CgMail } from "react-icons/cg";
import Map from "../Map";
import Fotter from "../Fotter";
import Conntect from "../Conntect";
function MP() {
  const links = [
    {
      pic: Principal,
      name: "মাওলানা সৈয়্যদ মুহাম্মদ অছিয়র রহমান",
      pragrap:
        "অধ্যক্ষ (এমএম ১ম শ্রেণী, এমএফ ২য় শ্রেণী, ২০০১ ও ২০০৪ সালে জাতীয় পর্যায়ে শ্রেষ্ঠ শিক্ষক হিসাবে স্বর্ণ পদক প্রাপ্ত।)",
      namuber: " 031655476",
      gmail: " jasactg@gmail.com",
    },
    {
      pic: Liakot,
      name: "মাওলানা ড. মুহাম্মদ লিয়াকত আলী",
      pragrap:
        "উপাধ্যক্ষ (কামিল (হাদিস) ১ম শ্রেণি, কামিল (ফিক্‌হ) ১ম শ্রেণি, এমএ ১ম শ্রেণি, পিএইচডি, শিক্ষা প্রশাসন ও ব্যবস্থাপনা এবং আইসিটি প্রশিক্ষণ প্রাপ্ত।)",
      namuber: " 01818-489064",
      gmail: " liakat2015@gmail.com",
    },
    {
      pic: "",
      name: "মাওলানা কাজি মুহাম্মদ আবদুল ওয়াজেদ",
      pragrap:
        "প্রধান ফকীহ্‌ (এমএম ২য় শ্রেণী, এমএফ ২য় শ্রেণী, এম তাফ. ১ম শ্রেণী)",
      namuber: " ০১৭১২০৩২৫১২",
      gmail: "  ",
    },
    {
      pic: "",
      name: "হাফেজ মাওলানা মুহাম্মদ সোলাইমান আনসারী",
      pragrap: "প্রধান মুহাদ্দিস (এমএম ২য় শ্রেণী)",
      namuber: " 01819852448",
      gmail: "  ",
    },
    {
      pic: slekur,
      name: "মাওলানা কাজী মুহাম্মদ ছালেকুর রহমান",
      pragrap:
        "প্রধান মুফাস্‌সির (এমএম ২য় শ্রেণী, এম ফিক্‌হ ১ম শ্রেণী, এম তাফ. ১ম শ্রেণী, বিএ অনার্স ১ম শ্রেণী, এমএ (আরবি) ১ম শ্রেণী)",
      namuber: " 01619373799",
      gmail: "  ",
    },
    {
      pic: asrafu,
      name: "হাফেজ মাওলানা মুহাম্মদ আশরাফুজ্জামান আলকাদেরী",
      pragrap: "সিনিয়র প্রভাষক (আরবী) (এমএম ১ম শ্রেণী)",
      namuber: "01819-373015",
      gmail: " liakat2015@gmail.com",
    },
    {
      pic: Principal,
      name: "মাওলানা সৈয়্যদ মুহাম্মদ অছিয়র রহমান",
      pragrap:
        "অধ্যক্ষ (এমএম ১ম শ্রেণী, এমএফ ২য় শ্রেণী, ২০০১ ও ২০০৪ সালে জাতীয় পর্যায়ে শ্রেষ্ঠ শিক্ষক হিসাবে স্বর্ণ পদক প্রাপ্ত।)",
      namuber: " 031655476",
      gmail: " jasactg@gmail.com",
    },
    {
      pic: Liakot,
      name: "মাওলানা ড. মুহাম্মদ লিয়াকত আলী",
      pragrap:
        "উপাধ্যক্ষ (কামিল (হাদিস) ১ম শ্রেণি, কামিল (ফিক্‌হ) ১ম শ্রেণি, এমএ ১ম শ্রেণি, পিএইচডি, শিক্ষা প্রশাসন ও ব্যবস্থাপনা এবং আইসিটি প্রশিক্ষণ প্রাপ্ত।)",
      namuber: " 01818-489064",
      gmail: " liakat2015@gmail.com",
    },
    {
      pic: Principal,
      name: "মাওলানা সৈয়্যদ মুহাম্মদ অছিয়র রহমান",
      pragrap:
        "অধ্যক্ষ (এমএম ১ম শ্রেণী, এমএফ ২য় শ্রেণী, ২০০১ ও ২০০৪ সালে জাতীয় পর্যায়ে শ্রেষ্ঠ শিক্ষক হিসাবে স্বর্ণ পদক প্রাপ্ত।)",
      namuber: " 031655476",
      gmail: " jasactg@gmail.com",
    },
    {
      pic: Liakot,
      name: "মাওলানা ড. মুহাম্মদ লিয়াকত আলী",
      pragrap:
        "উপাধ্যক্ষ (কামিল (হাদিস) ১ম শ্রেণি, কামিল (ফিক্‌হ) ১ম শ্রেণি, এমএ ১ম শ্রেণি, পিএইচডি, শিক্ষা প্রশাসন ও ব্যবস্থাপনা এবং আইসিটি প্রশিক্ষণ প্রাপ্ত।)",
      namuber: " 01818-489064",
      gmail: " liakat2015@gmail.com",
    },
  ];
  return (
    <div>
      <Heading />
      <Navbar />
      <div className="w-full bg-gray-100">
        <h2 className="text-xl py-3 max-w-screen-lg m-auto">
          এমপিওভুক্ত শিক্ষক
        </h2>
      </div>
      <div className="max-w-screen-lg m-auto mt-10 bg-white   ">
        <div className=" rounded-md   shadow-md    grid grid-cols-4  ">
          {links.map((link, id) => (
            <div className=" w-60 h-96 text-center object-cover overflow-hidden flex flex-col items-center justify-center shadow-md">
              <img src={link.pic} alt="" className="w-30 h-20 " />
              <h1 className="font-semibold mt-2">{link.name}</h1>

              <div className="text-center text-gray-500">
                <p>{link.pragrap}</p>
                <div className="flex justify-center items-center">
                  <div>
                    <BiPhoneCall />{" "}
                  </div>
                  <p>{link.namuber}</p>
                </div>
                <div className="flex justify-center items-center">
                  <div>
                    <CgMail />{" "}
                  </div>
                  <p>{link.gmail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Map1 />
      <Conntect />
      <Fotter />
    </div>
  );
}

export default MP;
