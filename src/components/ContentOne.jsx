import React from "react";
import {Link} from "react-router-dom"
import "../App.css";

export default function ContentOne() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40">
          <div className="lg:p-4 p-10 text-black">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              La livraison,
              <br />
              un sujet sensible
            </strong>
            <p className="text-[17px] mt-6">
              Aïe. Bien que nous soyons tous heureux que nous puissions être
              livrés , très rapidement, soyons honnêtes: pas tout est toujours
              rose et équitable dans le secteur de la livraison.
            </p>
            <ul className="mt-6">
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <p>
                    Les paquets endommagés, retardés ou parfois même non livrés
                    sont tous trop courants.
                  </p>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <p>
                    Il y a certaines zones géographiques qui sont souvent
                    négligées par les entreprises et leurs clients potentiels
                    sont oubliés.
                  </p>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <p>
                    Les petites entreprises ne peuvent souvent pas permettre les
                    investissements élevés nécessaires pour les ressources
                    logistiques.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-0 p-0">
          <img
            src="/hero.png"
            alt=""
            srcset=""
            className="sm:h-[500px] h-[350px] w-[600px]"
          />
        </div>
      </div>
      {/* SECOND PART CONETNT */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10 text-black">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Le cotransportage
              <br />
              ça révolutionne
            </strong>
            <p className="text-[17px] mt-6">
              Chaque jour, des millions de personnes touchent la route - que ce
              soit pour aller travailler, rendre visite, ou une simple
              promenade. Alors et si tous ces voyages pouvaient également être
              utilisés pour faire des livraisons ? C'est l'idée derrière le
              service de cotransportage de Chap Chrono. Il n'y a pas de coût
              supplémentaire, nous utilisons les ressources existantes, et nous
              offrons une méthode de livraison alternative qui maintient tous
              les avantages de la livraison traditionnelle.
            </p>
            <ul className="mt-6">
              <li className="mt-3">
                <div className="flex text-[#db6013] cursor-pointer">
                  <Link to="/career"><p>Découvrez toute notre histoire</p></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12">
          <img
            src="/heroTwo.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[500px]"
          />
        </div>
      </div>
    </>
  );
}
