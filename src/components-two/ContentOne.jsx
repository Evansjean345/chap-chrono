import React from "react";

export default function ContentOne() {
  return (
    <>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              La livraison,
              <br />
              un sujet qui fâche
            </strong>
            <p className="text-[17px] mt-6 text-black">
              Nous rendons la livraison plus{" "}
              <trong>souple, économique et sociale</trong> en faisant récupérer
              les commandes de nos clients par des cotransporteurs
              (particuliers) lors de leurs déplacements réguliers,{" "}
              <strong>moyennant de l'argent</strong>. C'est la philosophie du
              covoiturage appliquée à la livraison de course.
            </p>
            <p className="text-[17px] mt-4 mb-8 text-black">
              Avec
              <strong>
                {" "}
                aucune nécessité d’investissements d’avant-garde dans les
                infrastructures ou les véhicules
              </strong>
              , et la capacité d’étendre la capacité de livraison
              exponentiellement sans frais supplémentaires, ce service de
              livraison express est une solution à faible coût qui fonctionne
              dans les <strong>zones urbaines et rurales.</strong>
            </p>
            <label
              tabIndex={0}
              className="hover:bg-[#3b1169] bg-[#4D148C] rounded-full  p-3 px-10 text-white cursor-pointer"
            >
              Découvrir la vidéo
            </label>
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
      {/* Second part  */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-[#E2E7F3]  lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40 lg:mt-10">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Un service validé par les
              <br />
              acteurs de la grande
              <br />
              distribution
            </strong>
            <p className="text-[17px] mt-6 text-black">
              Depuis <strong>sa création</strong>, notre service est utilisé par
              les plus grands détaillants.
            </p>
            <p className="text-[17px] mt-6 text-black">
              Nous sommes aujourd’hui le{" "}
              <strong>
                1er service de livraison en Côte d'Ivoire dans le transport
                partagé pour les véhicules
              </strong>
              , où nous couvrons 100% du territoire.
            </p>
            <p className="text-[17px] mt-6 text-black">
              <strong>
                Réduire les taux de saturation, améliorer la taille moyenne du
                panier pour les clients , acquérir de nouveaux clients
              </strong>
              aujourd'hui, le cotransport est un fort argument pour les grands
              détaillants.
            </p>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-36 lg:pt-12 lg:pl-32 p-12">
          <img src="/img-two/map.png" alt="" srcset="" className="h-[400px]" />
        </div>
      </div>
    </>
  );
}
