import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const Links = [
    {
      id: 1,
      nav: <Link to="/">হোম,</Link>,
    },
    {
      id: 2,
      nav: <Link to="/introduce">প্রতিষ্ঠা</Link>,
    },
    {
      id: 3,
      nav: <Link to="/academic">একাডেমিক</Link>,
    },
    {
      id: 4,
      nav: <Link to="/govt">গভর্ণিংবডি</Link>,
    },
    {
      id: 5,
      nav: "রেজাল্ট",
    },
    {
      id: 6,
      nav: "কার্যক্রম ",
    },
    {
      id: 7,
      nav: "ছবি ",
    },
    {
      id: 8,
      nav: "নোটিস",
    },
    {
      id: 9,
      nav: "ডাউনলোড ",
    },
    {
      id: 10,
      nav: "যোগাযোগ",
    },
  ];
  return (
    <div className="w-full h-auto bg-green-500   ">
      <div className="max-w-screen-lg m-auto flex   justify-center ">
        <div className="md:flex gap-6 text-2xl  justify-cent text-white  ">
          {Links.map((link) => (
            <ul key={link.id} className=" cursor-pointer hover:text-black  ">
              <li className="  ">{link.nav}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
