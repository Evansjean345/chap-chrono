import React from "react";
import { Link } from "react-router-dom";

export default function ContentThree() {
  return (
    <>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2] lg:mt-0 lg:p-12 lg:pt-0">
        <div className="hero-content-two order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              À quelques clics d'adopter la
              <br />
              livraison vertueuse !
            </strong>
            <p className="text-[17px] lg:my-16 mt-6 mb-8 text-black">
              Confiance, sourire et conscience, c’est ce qui motive notre
              communauté. Partagez, partagez, rejoignez Shopopop !
            </p>
            <Link to="/cotransporteur" className="mt-5">
              <label
                tabIndex={0}
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white  cursor-pointer"
              >
                Cliquez là
              </label>
            </Link>
          </div>
        </div>
        <div className="hero-content-one  order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12">
          <img
            src="/heroThree.png"
            alt=""
            srcset=""
            className="sm:h-[500px] w-[500px]"
          />
        </div>
      </div>
    </>
  );
}
