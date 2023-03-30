import React from "react";
import { Link } from "react-router-dom";

export default function Patner() {
  return (
    <>
      <div className="partner-container-two flex-col flex items-center justify-center bg-[#EFEFF2] h-[323px] w-full p-[35px]">
        <strong className="lg:text-[24px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Ils ont eu confiance en nous
        </strong>
        <div className="partner-container-two flex p-[25px] justify-center bg-none h-[128px] w-full ">
          <ul className="list-partner flex">
            <li>
              <img
                src="/logo/logo-one.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-logo.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-four.png"
                alt=""
                srcset=""
                className="w-[160px] h-[84px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-two.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-three.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
          </ul>
        </div>
      </div>
      {/* Content THree */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="/logo/logo-no-text.png"
          alt=""
          srcset=""
          className="h-[62px] w-[151px] mt-12"
        />
        <strong className="lg:text-[24px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Prenez contact dès maintenant
        </strong>
        <p className="text-center lg:px-[400px] mt-4">
          Découvrez nos offres, posez vos questions sur notre service, nous
          sommes là pour répondre à vos interrogations.
        </p>
        <Link to="/career" className="mt-5">
          <label
            tabIndex={0}
            className="hover:bg-[#db6013] bg-[#FF6200] rounded-full p-3 px-10 text-white cursor-pointer"
          >
            Je souhaite être contacté(e)
          </label>
        </Link>
      </div>
    </>
  );
}
