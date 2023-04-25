import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full md:w-1/2 w-full lg:pl-20 pt-10 lg:pt-20">
          <div className="lg:p-4 p-10">
            <strong className="md:text-[64px] text-[36px] md:text-start  md:leading-[78px] tracking-[0.27px] text-[#ffff] drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Rejoignez la communauté
            </strong>
            <p className="mt-6 text-white text-start text-[18px]">
              Lorsque vous rejoignez la communauté Chapchrono, vous deviendrez
              un cotransporteur! Un cotransporteur est un individu qui profite
              de ses déplacements réguliers pour livrer des biens aux
              consommateurs, en échange de quelques sous.
            </p>
            <br />
            <br />
            <Link to="https://www.facebook.com/groups/152672934064185">
              <label
                tabIndex={0}
                className="hover:bg-[#37145d] bg-[#4D148C] rounded-full p-3 px-10 text-white w-[180px] cursor-pointer"
              >
                Je m'inscris
              </label>
            </Link>
          </div>
        </div>
        <div className="h-full md:w-1/2 w-full lg:p-36 lg:pt-12 lg:pl-12 p-12 pt-0">
          <img
            src="/img-two/hero-com.png"
            alt=""
            srcset=""
            className="h-[400px]"
          />
        </div>
      </div>
    </>
  );
}
