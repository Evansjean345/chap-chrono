import React from "react";
import "../App.css"

export default function Partner() {
  return (
    <>
      <div className="partner-container flex justify-center bg-[#EFEFF2] h-[223px] w-full p-[35px]">
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full ">
          <ul className="list-partner flex">
            <li>
              <img
                src="/logo-partner/partner-express-glob.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo-partner/partner-lion.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo-partner/partner-rue.png"
                alt=""
                srcset=""
                className="w-[160px] h-[84px] m-[25px]"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
