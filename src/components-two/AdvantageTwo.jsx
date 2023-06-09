import React from "react";

export default function AdvantageTwo() {
  return (
    <>
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[650px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg text-center">
          Les avantages de notre solution
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/patner-9.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                +1 500
                <br />
                UTILISATEURS
              </strong>
              <div className="text-center text-black">partout en Côte d'Ivoire</div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/logo-two/partner-10.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                DIGITALISATION
                <br />
                SIMPLE
              </strong>
              <div className="text-center text-black">
                une interface facile d'utilisation
              </div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8 ">
              <img
                src="/logo-two/patner-11.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                UTILISATEURS
                <br />
                VÉRIFIÉS
              </strong>
              <div className="text-center text-black">
                CNI des cotransporteurs
                <br />
                (livreurs particuliers)
                <br />
                vérifiées par Chapchrono
              </div>
            </li>
            {/**** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/partner-12.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                ASSISTANCE 6J/7
              </strong>
              <div className="text-center text-black">
                suivi des livraisons en
                <br />
                temps réel par notre service
                <br />
                client
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
