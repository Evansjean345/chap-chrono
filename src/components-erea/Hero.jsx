import React from "react";

export default function Hero() {
  return (
    <>
      {" "}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full md:w-1/2 w-full lg:pl-20 pt-10 lg:pt-20">
          <div className="lg:p-4 p-10">
            <strong className="md:text-[64px] text-[36px] md:text-start  md:leading-[78px] tracking-[0.27px] text-[#ffff] drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              GSS :
              <br />
              Prenez le dessus sur la concurrence grâce à la livraison en
              cotransportage
            </strong>
          </div>
        </div>
        <div className="h-full md:w-1/2 w-full lg:p-36 lg:pt-20 lg:pl-12 p-12 pt-0">
          <img
            src="/img-two/hero-erea-3.png"
            alt=""
            srcset=""
            className="h-[400px]"
          />
        </div>
      </div>
    </>
  );
}
