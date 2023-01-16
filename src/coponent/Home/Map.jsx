import React from "react";
import ReactPlayer from "react-player";
function Map() {
  return (
    <div className="w-full bg-slate-400 h-35">
      <div className="max-w-screen-lg m-auto bg-slate-400 relative mt-10">
        <div className="flex justify-between ">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                class="gmap_iframe"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                src="https://maps.google.com/maps?width=335&amp;height=312&amp;hl=en&amp;q=jamea ahmadia sunnia kamil madrahsa&amp;t=p&amp;z=11&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <a href="https://www.gachacute.com/">www.jscctg.com</a>
            </div>
          </div>
          <div className="">
            <iframe
              class="gmap_iframe"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://www.youtube.com/watch?v=RtVXXO4cRd8"
            ></iframe>
          </div>
          <div>
            <h1 className="">যোগাযোগ</h1>
            <ul>
              <li>জামেয়া আহমদিয়া সুন্নিয়া কামিল মাদরাসা</li>
              <li>ষোলশহর, চান্দগাঁও - ৪২১২</li>
              <li>পাঁচলাইশ, চট্টগ্রাম</li>
              <li>ফোন: 031-655476</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
