import React from "react";
import { Link } from "react-router-dom";
import Partner from "../components/Partner";

export default function ContentTwo() {
  return (
    <>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Une interface simple pour
              <br />
              vos livraisons
            </strong>
            <p className="text-[17px] lg:my-16 mt-6 mb-8 text-black">
              Notre interface est{" "}
              <strong>accessible à partir de votre navigateur web</strong>, où
              vous pouvez créer vos envois manuellement ou en utilisant une
              entrée automatique de données pour vos informations de livraison
              via une <strong>API intégrée</strong>.
            </p>
            <Link to="/interface" className="mt-5">
              <label
                tabIndex={0}
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white  cursor-pointer"
              >
                En savoir plus
              </label>
            </Link>
          </div>
        </div>
        <div className="order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-20 p-12">
          <img
            src="/img-two/pc-img.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[500px]"
          />
        </div>
      </div>
      {/** Patner */}
      <Partner/>
      {/** Partner logo-no-text */}
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
        <p className="text-center lg:px-[400px] text-black mt-4">
          Découvrez nos offres, posez vos questions sur notre service, nous
          sommes là pour répondre à vos interrogations.
        </p>
        <Link to="/commercant" className="mt-5">
          <label
            tabIndex={0}
            className="hover:bg-[#db6013] bg-[#FF6200] rounded-full p-3 px-10 text-white  cursor-pointer"
          >
            Je souhaite être contacté(e)
          </label>
        </Link>
      </div>
    </>
  );
}
