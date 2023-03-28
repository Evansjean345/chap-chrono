import React from "react";
import "../App.css";
export default function Hero() {
  return (
    <div className="md:h-[80vh] h-[450px] bg-none flex w-full mt-24  md:mt-36  relative">
      <div className=" w-1/2  lg:mb-72 lg:pl-10 lg:pr-20 md:pt-2">
        <div className="ml-24 md:ml-20 p-0 m-0 w-full flex flex-col">
          <strong className="md:text-[64px] text-[26px] md:text-start  md:leading-[78px] tracking-[0.27px] text-[#ffff] drop-shadow-lg md:ml-0 md:mt-0 mt-4">
            La livraison en cotransportage c'est nous !
          </strong>
          <label
            tabIndex={0}
            className="hover:bg-[#ba571a] bg-[#db6013] rounded-full p-3 px-10 text-white w-[180px] mt-6 cursor-pointer"
          >
            Je découvre
          </label>
        </div>
      </div>
      <div className=" w-1/2 hidden md:visible"></div>
      <div className="">
        <div className="flex h-3 flex-col absolute top-[220px] md:top-[225px] md:left-[600px] left">
          <img src="/card-img/commande.png" alt="" className="h-[230px] w-[330px]" />
        </div>
        <div className="items-rounded flex h-3 flex-col absolute top-[180px] md:top-[125px] md:left-[900px] left">
          <img src="/card-img/recuperation.png" alt="" className="h-[230px]" />
        </div>
        <div className="items-rounded flex h-3 flex-col absolute top-[180px] md:top-[0px] md:left-[1150px] left">
          <img src="/card-img/livraison.png" alt="" className="h-[200px]" />
        </div>
      </div>
      <div className="absolute top-[340px] md:top-[240px] left-[100px] lg:left-[1300px] animate-spin">
        <img src="/logo/logo-color.png" alt="" className="h-[100px]" />
      </div>
    </div>
  );
}
