import React from "react";

export default function Advantage() {
  return (
    <>
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[350px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          Les avantages de notre solution
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/patner-1.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                FLEXIBILITÉ
              </strong>
              <div className="text-center text-black">
                pas de limite de livraisons
                <br />
                sur un même créneau
                <br />
                horaire
              </div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/logo-two/patner-2.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                RAPIDITÉ
              </strong>
              <div className="text-center text-black">
                livrez vos clients rapidement
              </div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/patner-3.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                ÉCONOMIQUE
              </strong>
              <div className="text-center text-black">
                mise en place de la livraison
                <br />
                sans frais structurel
                <br />
                et humain
              </div>
            </li>
            {/**** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/partner-4.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                COMPÉTITIF
              </strong>
              <div className="text-center text-black">
                acquisition de nouveaux
                <br />
                clients et augmentation de
                <br />
                votre panier moyen
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/************************* */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[500px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg text-center">
          Les avantages de notre solution
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/patner-5.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                + 4000
              </strong>
              <div className="text-center text-black">
                livraisons effectuées
              </div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/logo-two/patner-6.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                + 100
              </strong>
              <div className="text-center text-black">communes livrées</div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8 ">
              <img
                src="/logo-two/patner-7.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                + 500
              </strong>
              <div className="text-center text-black">magasins partenaires</div>
            </li>
            {/**** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/patner-8.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                4,8 / 5
              </strong>
              <div className="text-center text-black">
                expérience utilisateur
                <br />
                reconnue
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
