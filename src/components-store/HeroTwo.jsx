import React from "react";

export default function HeroTwo() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full  w-full lg:pl-20 pt-10 lg:pt-12">
          <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
            <strong className="md:text-[64px] text-[36px] text-center  text-white md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Partagez vos stocks entre
              <br className="items-rounded" />
              magasins avec la livraison
              <br className="items-rounded" />
              en cotransportage
            </strong>
            <p className="mt-12  text-center text-white text-[18px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            </p>
            <label
              tabIndex={0}
              className="hover:bg-[#ba571a] bg-[#db6013] rounded-full p-3 px-10 text-white mt-12"
            >
              Je souhaite etre contacté(e)
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
