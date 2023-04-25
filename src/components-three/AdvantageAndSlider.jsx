import React from "react";
import bgSlider from "../bg-slider.png";
import { Link } from "react-router-dom";
import "../App.css";

export default function AdvantageAndSlider() {
  return (
    <>
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
                clients et augmentation
                <br />
                de votre panier moyen
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* Card Part */}
      <section class="text-gray-600 body-font bg-[#EFEFF2] ">
        <div class="px-24 py-24">
          <div class="flex flex-wrap justify-center">
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                    <img
                      src="/card-img/card-one.jpg"
                      alt=""
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                    ACCESSOIRES DE BEAUTÉ
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                    Les accessoires de beauté sont des produits assez commandé par les clients.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                    Vous en êtes où?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 m-4 ">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                    <img
                      src="/card-img/card-two.jpg"
                      alt=""
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                    MODE, PRÊT-À-PORTER
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                    Le prêt-à-porter reste le produit de livraison préféré des clients. 
                    La nouvelle cabine d'essayage est située chez le client.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                    Vous en êtes où?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                    +1 500
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                    
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                    utilisateurs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Swiper Part */}
      <div
        className="flex justify-center py-28  lg:py-32 lg:p-32 bg-cover"
        style={{ backgroundImage: `url(${bgSlider})` }}
      >
      <div className="carousel w-96 h-96 md:h-96 md:w-full">
        <div
          id="slide1"
          className="carousel-item relative w-96 h-96 md:h-96 md:w-full"
        >
          <div className="h-full w-full bg-white flex py-16 px-2 md:px-20 space-x-6 rounded-[54px] relative">
            <div className="w-[6%]">
              <img src="/img-two/comma.png" alt="" className="h-12 w-12" />
            </div>
            <p className="w-[60%] text-black text-start">
            Le service de livraison est exceptionnel. Ils sont très professionnels
             et assurent la livraison dans les délais impartis. Je suis très 
             satisfait de leur service et je l'utilise tout le temps.
              <br />
              <br />
              <strong className="text-[#4D148C]">
              GÉRARD N. / DIRECTEUR
              </strong>
              <br />
              RMEXPRESSGLOB - ABIDJAN
            </p>
            <div className="w-[34%] rounded-[100%]">
              <img
                src="/card-img/a.png"
                alt=""
                className="h-64 w-72 rounded-[100%]"
              />
            </div>
            <div className="absolute flex bottom-5 md:bottom-10 right-[180px] md:right-[600px] space-x-2">
              <a
                href="#slide1"
                className="h-[8px] w-[8px] my-[5px] bg-[#db6013] rounded-full"
              ></a>
              <a
                href="#slide2"
                className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
              ></a>
              <a
                href="#slide3"
                className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
              ></a>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative w-96 h-96 md:h-96 md:w-full"
        >
          <div className="h-full w-full bg-white flex py-16 px-2 md:px-20 space-x-6 rounded-[54px] relative">
            <div className="w-[6%]">
              <img src="/img-two/comma.png" alt="" className="h-12 w-12" />
            </div>
            <p className="w-[60%] text-black text-start">
            J'ai découvert ce service de livraison récemment et j'ai été impressionné 
            par leur professionnalisme. Ils ont livré mes clients dans les délais 
            impartis, je recommande vivement leur service fiable et efficace.
              <br />
              <br />
              <strong className="text-[#4D148C]">
                PATRICK A. / GÉRANT
              </strong>
              <br />
              JENNINGS LYON - COCODY
            </p>
            <div className="w-[34%] rounded-[100%]">
              <img
                src="/card-img/m.png"
                alt=""
                className="h-64 w-72 rounded-[100%]"
              />
            </div>
            <div className="absolute flex bottom-5 md:bottom-10 right-[180px] md:right-[600px] space-x-2">
              <a
                href="#slide1"
                className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
              ></a>
              <a
                href="#slide2"
                className="h-[8px] w-[8px] my-[5px] bg-[#db6013] rounded-full"
              ></a>
              <a
                href="#slide3"
                className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
              ></a>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide1"
              className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
            >
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-96 h-96 md:h-96 md:w-full"
        >
          <div className="h-full w-full bg-white flex py-12 px-2 md:px-20 space-x-6 rounded-[54px] relative">
            <div className="w-[6%]">
              <img src="/img-two/comma.png" alt="" className="h-12 w-12" />
            </div>
            <p className="w-[60%] text-black text-start">
            Mes clients ont apprécié de recevoir leur commande très rapidement, 
              j'utilise donc ce service pour les livrer. Je le recommande à toutes les 
              personnes ayant besoin d'un service rapide et fiable.
              <br />
              <br />
              <strong className="text-[#4D148C]">
                BRIGITTE K. / DIRECTRICE
              </strong>
              <br />
              RUEDUMARCHÉ - ANGRÉ
            </p>
            <div className="w-[34%] rounded-[100%]">
              <img
                src="/card-img/k.png"
                alt=""
                className="h-64 w-72 rounded-[100%]"
              />
            </div>
            <div className="absolute flex bottom-5 md:bottom-10 right-[180px] md:right-[600px] space-x-2">
              <a
                href="#slide1"
                className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
              ></a>
              <a
                href="#slide2"
                className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
              ></a>
              <a
                href="#slide3"
                className="h-[8px] w-[8px] my-[5px] bg-[#db6013] rounded-full"
              ></a>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a
              href="#slide2"
              className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
      </div>
      {/* Advantage Part */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[550px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
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
                +1 500 000
                <br />
                UTILISATEURS
              </strong>
              <div className="text-center text-black">
                partout en Côte d'Ivoire
              </div>
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
                une interface facile
                <br />
                d'utilisation
              </div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8">
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
      {/*Content Part */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Une interface simple pour
              <br />
              vos livraisons
            </strong>
            <p className="text-[17px] lg:my-16 mt-6 mb-8 text-black">
              Notre interface est{" "}
              <strong>accessible à partir de votre navigateur web</strong>, où
              vous pouvez créer vos envois manuellement ou en utilisant une
              entrée automatique de données pour vos informations de livraison
              via une <strong>API intégrée</strong>.
            </p>
            <Link to="/interface" className="mt-5">
              <label
                tabIndex={0}
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white  cursor-pointer"
              >
                en savoir plus
              </label>
            </Link>
          </div>
        </div>
        <div className="order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-20 p-12">
          <img
            src="/img-two/pc-img.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[500px]"
          />
        </div>
      </div>
    </>
  );
}
