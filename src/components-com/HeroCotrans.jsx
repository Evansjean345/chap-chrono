import React from "react";

export default function HeroCotrans() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full md:w-1/2 w-full lg:pl-20 pt-10 lg:pt-20">
          <div className="lg:p-4 p-10">
            <strong className="md:text-[64px] text-gray-800 text-[36px] md:text-start  md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              rejoignez la communauté
            </strong>
            <p className="mt-6  text-start text-gray-800 text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              expedita omnis nemo possimus labore dolorum deserunt doloribus
              amet consequuntur! Repellat adipisci minus earum enim dolores
              eaque dolorem a quidem ex.
            </p>
            <br />
            <br />
            <label
              tabIndex={0}
              className="hover:bg-[#ba571a] bg-[#db6013] rounded-full p-3 px-10 text-white w-[180px] cursor-pointer"
            >
              Je m'inscris
            </label>
          </div>
        </div>
        <div className="h-full md:w-1/2 w-full lg:p-36 lg:pt-12 lg:pl-12 p-12 pt-0">
          <img
            src="/card-img/hero-co.png"
            alt=""
            srcset=""
            className="h-[400px]"
          />
        </div>
      </div>
    </>
  );
}
