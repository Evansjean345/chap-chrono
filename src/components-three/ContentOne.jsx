import React from "react";
import { Link } from "react-router-dom";

export default function ContentOne() {
  return (
    <>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Qui sommes nous ?
            </strong>
            <br />
            <br />
            <p className="text-[17px] mt-6 text-black">
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
            <br />
            <br />
            <Link to="/faq">
              <label
                tabIndex={0}
                className="hover:bg-[#3b1169] bg-[#4D148C] rounded-full  p-3 px-10 text-white cursor-pointer"
              >
                Découvrir la vidéo
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
      {/* Second part  */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2] lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Un service ouvert à tous
            </strong>
            <p className="text-[17px] mt-12 text-black">
              Chapchrono est un service accessible à tout type de commerçants.
              <br />
              <br />
              Que vous soyez une épicerie fine, un magasin de chaussures, un
              magasin de vêtement, bénéficiez de notre service{" "}
              <strong>sans condition, ni engagement.</strong>
              <br />
              <br />
              Il n'y a pas besoin d'investissement : il n'y a pas de coûts
              associés à l'achat d'un véhicule, et le potentiel de livraison
              exponentiel sans frais supplémentaires.
              <br />
              <br />
              Ce service de livraison « express » à un coût faible fonctionne{" "}
              <strong>aussi bien dans les zones urbaines et rurales.</strong>
            </p>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-36 lg:pt-0 lg:pl-12 p-12">
          <img
            src="/img-two/hero-3.png"
            alt=""
            srcset=""
            className="sm:h-[500px]"
          />
        </div>
      </div>
    </>
  );
}
