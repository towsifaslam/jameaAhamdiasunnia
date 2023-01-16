import React from "react";
import Conntect from "../Conntect";
import Fotter from "../Fotter";
import Heading from "../Heading";
import Map from "../Map";
import Navbar from "../Navbar";

function Goborning() {
  return (
    <div>
      <Heading />
      <Navbar />
      <div className="w-full bg-gray-200 mt-5">
        <div className="max-w-screen-lg m-auto">
          <h2 className="text-2xl text-green-500 mb-4">গভর্ণিংবডি</h2>
          <div>
            <ul>
              <li>০১ প্রফেসর মুহাম্মদ দিদারুল ইসলাম -সভাপতি</li>
              <li>০২ জনাব আলহাজ্ব মোহাম্মদ মহসিন -সদস্য</li>
              <li>০৩ আলহাজ্ব মোহাম্মদ আনোয়ার হোসেন -সদস্য</li>
              <li>০৪ আলহাজ্ব মোহাম্মদ সিরাজুল হক -সদস্য</li>
              <li>০৫ আলহাজ্ব মোহাম্মদ সামশুদ্দিন -সদস্য</li>
              <li>০৬ আলহাজ্ব পেয়ার মোহাম্মদ (সাবেক কমিশনার) -সদস্য</li>
              <li>
                ০৭ জনাব মোহাম্মদ কামাল উদ্দিন চৌধুরী -বিদ্যোৎসাহী প্রতিনিধি
              </li>
              <li>০৮ জনাব মোহাম্মদ হাসানুর রসিদ -বিদ্যোৎসাহী প্রতিনিধ</li>
              <li>০৯ ড. এ টি এম লিয়াকত আলী -সদস্য</li>
              <li>১০ জনাব আবুল আসাদ মুহাম্মদ জোবাইর -সদস্য</li>
              <li>
                ১১ অধ্যক্ষ, জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসা -সদস্য সচিব
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Map />
      <Conntect />
      <Fotter />
    </div>
  );
}

export default Goborning;
