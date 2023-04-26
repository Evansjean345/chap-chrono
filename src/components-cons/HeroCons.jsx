import React from "react";

export default function HeroCons() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full  w-full lg:pl-20 pt-10 lg:pt-20">
          <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
            <strong className="md:text-[64px] text-[36px] text-center  text-white md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Le constransportage ? <br className="items-rounded" />
               Vous allez l'apprécier
            </strong>
            <p className="mt-6  text-center text-white text-[18px]">
              Faites vos achats ccomme d'habitude, et , un particulier profite
              de son trajet pour livrer votre commande à domicile ou à l’adresse
              de votre choix. Restez chez vous sereinement, on s’occupe de tout
              !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
