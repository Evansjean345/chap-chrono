import React from "react";
import { Link } from "react-router-dom";

export default function HeroThree() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full  w-full lg:pl-20 pt-10 lg:pt-12">
          <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
            <strong className="md:text-[64px] text-[36px] text-center  text-white md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Avec ou sans site e-commerce
              <br className="items-rounded" />
              nous pouvons livrer tous vos
              <br className="items-rounded" />
              client à domicile
            </strong>
            <p className="mt-12  text-center text-white text-[18px]">
              Grâce à notre service de livraison de cotransport, vous pouvez
              rapidement et facilement déplacer vos produits entre différents
              magasins dans la même ville!
            </p>
            <Link to="/career" className="mt-12">
              <label
                tabIndex={0}
                className="hover:bg-[#ba571a] bg-[#db6013] rounded-full p-3 px-10 text-white"
              >
                Je souhaite etre contacté(e)
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
