import React from "react";

export default function HeroInterface() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full md:w-1/2 w-full lg:pl-20 pt-10 lg:pt-20">
          <div className="lg:p-4 p-10">
            <strong className="md:text-[64px] text-[36px] md:text-start  md:leading-[78px] tracking-[0.27px] text-[#ffff] drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Une interface adaptée à vos besoins, ça révolutionne ça !
            </strong>
            <p className="mt-6  text-start text-white text-[18px]">
              L'interface de Chapchrono est conçue pour être simple et complète,
              sans être complexe. Cela vous permet de livrer rapidement et
              facilement les commandes aux clients autour de votre point de
              vente.
            </p>
          </div>
        </div>
        <div className="h-full md:w-1/2 w-full lg:p-36 lg:pt-12 lg:pl-12 p-12 pt-0">
          <img
            src="/img-two/hero-sol.png"
            alt=""
            srcset=""
            className="h-[400px]"
          />
        </div>
      </div>
    </>
  );
}
