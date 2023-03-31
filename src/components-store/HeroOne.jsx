import React from "react";
import { Link } from "react-router-dom";

export default function HeroOne() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full  w-full lg:pl-20 pt-10 lg:pt-12">
          <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
            <strong className="md:text-[64px] text-[36px] text-center  text-white md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Faites évoluer votre activité
              <br className="items-rounded" />
              en adoptant la livraison en
              <br className="items-rounded" />
              cotransportage
            </strong>
            <p className="mt-12  text-center text-white text-[18px]">
              Proposez un service de livraison rapide, flexible et abordable à
              vos clients
            </p>
            <Link to="/career" className="mt-12">
              <label
                tabIndex={0}
                className="hover:bg-[#ba571a] bg-[#db6013] rounded-full p-3 px-10 text-white"
              >
                Ça m'intérresse
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
