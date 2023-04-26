import React from "react"
export default function HeroSol() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full  w-full lg:pl-20 pt-10 lg:pt-12">
          <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
            <strong className="md:text-[64px] text-[36px] text-center  text-white md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Nous offrons des prix personnalisés&nbsp;
              <br className="items-rounded" />
              pour tous les types d'entreprises&nbsp;
              <br className="items-rounded" />
              grandes ou petites
            </strong>
            <p className="mt-12  text-center text-white text-[18px]">
              Chapchrono s'adapte à votre activité, avec un prix par livraison.
              Découvrez les caractéristiques de notre solution et demandez nos
              tarifs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
