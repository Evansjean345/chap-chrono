import React from "react";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Qui sommes nous ?
            </strong>
            <p className="text-[17px] mt-12 mb-20 text-black">
              Nous rendons la livraison{" "}
              <strong>plus souple, économique et sociale</strong> en faisant
              récupérer les fleurs de vos clients par des cotransporteurs
              (particuliers) lors de leurs déplacements réguliers,{" "}
              <strong>moyennant de l'argent.</strong>
              <br />
              <br />
              C'est la philosophie du covoiturage appliquée à la livraison de
              course.
            </p>
            <Link to="/trade">
              <label
                tabIndex={0}
                className="hover:bg-[#3b1169] bg-[#4D148C] rounded-full  p-3 px-10 text-white cursor-pointer"
              >
                Découvrir
              </label>
            </Link>
          </div>
        </div>
        <div className="order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-24 p-12">
          <img
            src="/img-two/img-content-two.png"
            alt=""
            srcset=""
            className="sm:h-[400px]"
          />
        </div>
      </div>
      {/* Second Part */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2] lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40 lg:mt-10">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Un service favorable à toute une activité
            </strong>
            <p className="text-[17px] mt-8 text-black">
              Sport, culture, bricolage...{" "}
              <strong>Nous livrons tout type de produits.</strong>
              <br />
              <br />
              Nous sommes actuellement{" "}
              <strong>
                l'unique entreprise de contransportage en Côte d'Ivoire
              </strong>{" "}
              et nous couvrons une grande partie du territoire.
            </p>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-36 lg:pt-12 lg:pl-0 p-12">
          <img
            src="/img-two/content-3.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[500px]"
          />
        </div>
      </div>
      {/* Advantage Part */}
      <div className="flex flex-col lg:justify-center bg-white lg:h-[550px] h-[1150px] w-full lg:pt-0 p-[35px]">
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
    </>
  );
}
