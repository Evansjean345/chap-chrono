import React from "react";
import { Link } from "react-router-dom";
import Partner from "../components/Partner";

export default function Patner() {
  return (
    <>
      <Partner/>
      {/*Content Three */}
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
        <p className="text-center lg:px-[400px] mt-4 text-black">
          Découvrez nos offres, posez vos questions sur notre service, nous
          sommes là pour répondre à vos interrogations.
        </p>
        <Link to="/commercant" className="mt-5">
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
