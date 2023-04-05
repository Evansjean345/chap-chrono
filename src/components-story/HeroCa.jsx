import React from "react";

export default function HeroCa() {
  return (
    <>
      <div className="w-full h-[500px] flex-col md:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full  w-full lg:pl-20 pt-10 lg:pt-10">
          <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
            <strong className="md:text-[64px] text-[36px] text-center  text-white md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Rejoignez l'équipe Chapchrono
            </strong>
            <div className="mt-24 flex flex-col sm:flex-row space-y-10 sm:space-y-0 justify-between text-white text-[18px]  w-full">
              <label
                tabIndex={0}
                className="hover:bg-[#7c3912] bg-[#be5010] flex items-center justify-center rounded-full p-3 px-10 text-white cursor-pointer"
              >
                Voir nos offres
              </label>

              <label
                tabIndex={0}
                className="hover:bg-[#7c3912] bg-[#be5010] flex items-center justify-center rounded-full p-3 px-10 text-white cursor-pointer"
              >
                Candidature spontanée
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Contenttt */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="h-full md:w-1/2 w-full lg:pl-40">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#db6013] leading-10 drop-shadow-lg">
              Notre mission ? faire evoluer la livraison
            </strong>
            <p className="text-[17px] mt-12">
              Chapchrono est une solution de livraison simple et collaborative
              qui offre à tous la possibilité d’optimiser leurs ressources
              (temps, et argent).
              <br />
              <br />
              L'idée est que des particuliers appelés « Cotransporteurs»,
              profitent de leurs trajets réguliers pour récupérer une commande
              dans un magasin et le livrer à la maison du client (nourriture,
              vêtement, etc.), en échange de quelques sous.
              <br />
              <br />
              Notre ambition est d’offrir un service de livraison accessible
              dans les zones urbaines et rurales, tout en promouvant la
              proximité et l’assistance quotidienne.
            </p>
          </div>
        </div>
        <div className="h-full md:w-1/2 w-full lg:p-0 lg:pt-0 lg:pl-0 p-0">
          <img
            src="/tel.png"
            alt=""
            srcset=""
            className="h-[500px] w-[530px]"
          />
        </div>
      </div>
      {/**Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="hero-content-two order-2 h-full md:w-1/2 w-full lg:pl-0">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] leading-10 drop-shadow-lg">
              Notre mission ? faire evoluer la livraison
            </strong>
            <p className="text-[17px] mt-12">
              Si vous voulez rejoindre une équipe qui est dynamique et engagée,
              vous êtes venu au bon endroit! Pendant les pauses, à vous de
              choisir votre camp : team sieste ou team jeux de
              société/bavardage. De nombreux gourmands se cachent parmi nous :
              il y a toujours quelque chose de doux dans la cuisine chaque
              semaine.
              <br />
              <br />
              Ici, chacun a son mot à dire et nous avons tous le droit à
              l’erreur : nos idées les plus audacieuses comme les plus farfelues
              sont écoutées !
              <br />
              <br />
              Côté pratique, nos locaux sont situés à Abidjan, angré bessikoi.
              <br />
              <br />
              une dernière chose avant de postuler : nous recevons beaucoup de
              candidatures alors restez vous-même et évitez les lettres de
              motivation trop générique, parlez-nous et de votre savoir faire
            </p>
          </div>
        </div>
        <div className="hero-content-one order-1 h-full md:w-1/2 w-full lg:p-0 lg:pt-0 lg:pl-36 p-0">
          <img
            src="/img-two/content-ca.png"
            alt=""
            srcset=""
            className="h-[300px] w-[500px]"
          />
        </div>
      </div>
    </>
  );
}
