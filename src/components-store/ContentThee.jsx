import React from "react";
import { Link } from "react-router-dom";

export default function ContentThee() {
  return (
    <>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-16">
        <div className="order-1 h-full md:w-1/2 w-full lg:pl-56  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Livraison Inter-magasin
            </strong>
            <p className="text-[17px] mt-12 text-black">
              Parmi vos clients, il y a ceux qui préfèrent aller au magasin pour
              obtenir des conseils, choisir leurs articles avec soin, et éviter
              toute erreur. Il y a aussi ceux qui n'ont pas de véhicule pour
              faciliter le transport. Ceux qui ont des contraintes physiques qui
              les empêchent de porter des charges lourdes et massives. Ou ceux
              qui veulent poursuivre leurs achats sans avoir à faire face à leur
              sac ou sacs.
              <br />
              <br />
              <strong>
                Pour tous ceux-là, il y a la livraison en lâcher de chariot.
              </strong>
            </p>
            <br />
            <br />
            <br />
            <Link to="/">
              <label
                tabIndex={0}
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white cursor-pointer"
              >
                Je veux en savoir plus
              </label>
            </Link>
          </div>
        </div>
        <div className="order-2 md:w-1/2 w-full lg:p-16 lg:pt-16 lg:pl-32 p-12">
          <img
            src="/img-store/hero-store-1.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[400px]"
          />
        </div>
      </div>
      {/** Content */}
      <div className="hero-content-two   w-full  flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2]  lg:mt-32 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Pas besoin d'un site Web ou d'un livreur professionnel avec
              Chapchrono!
            </strong>
            <p className="text-[17px] mt-6 text-black">
              <strong>
                La livraison par chariot est pour tous les commerçants et tous
                leurs clients.
              </strong>
              <br />
              <br />
              <strong>Pour vous ?</strong> Pas besoin d'avoir un site de
              commerce électronique, simplement connecter à l'interface
              Chapchrono en quelques clics pour créer une demande de livraison.
            </p>
            <p className="text-[17px] mt-6 text-black">
              <strong>Pour vos clients ?</strong> Rien n’a changé, c’est même
              plus simple qu’auparavant. Comme d’habitude, ils vont à votre
              magasin pour faire leurs achats et demandent ensuite la livraison
              à la maison, au checkout ou à la réception.
            </p>
          </div>
        </div>
        <div className="hero-content-one order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-36 p-12">
          <img
            src="/img-store/hero-store-2.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[400px]"
          />
        </div>
      </div>
      {/* Advantage */}
      <div className="flex flex-col lg:justify-center bg-white lg:h-[550px] h-[1350px] w-full lg:pt-0 p-[35px]">
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          Les avantages de notre solution
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/img-store/logo-store-1.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                #1
              </strong>
              <div className="text-center text-black">
                Votre client{" "}
                <strong>
                  va au
                  <br />
                  magasin et choisit les produits
                </strong>
                <br />
                qu'il veut acheter.
              </div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/img-store/logo-store-2.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                #2
              </strong>
              <div className="text-center text-black">
                Il se rend ensuite à la caisse
                <br />
                (ou à l’accueil){" "}
                <strong>
                  pour payer et
                  <br />
                  choisir le delais de livraison.
                </strong>
              </div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/img-store/logo-store-3.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                #3
              </strong>
              <div className="text-center text-black">
                Vous entrez{" "}
                <strong>
                  les
                  <br />
                  informations de votre
                  <br />
                  client
                </strong>
                (temps de livraison,
                <br />
                adresse, etc.) sur l’interface de
                <br />
                livraison Chapchrono.
              </div>
            </li>
            {/**** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/img-store/logo-store-4.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                #4
              </strong>
              <div className="text-center text-black">
                Un membre de notre
                <br />
                communauté{" "}
                <strong>
                  reçoit votre
                  <br />
                  commande du magasin
                </strong>{" "}
                à
                <br />
                l’heure indiquée et le livraison
                <br />
                personnellement à la maison de
                <br />
                votre client.
              </div>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      {/** Patner */}
      <div className="partner-container flex justify-center bg-[#EFEFF2] h-[223px] w-full p-[35px]">
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full ">
          <ul className="list-partner flex">
            <li>
              <img
                src="/logo/logo-one.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-logo.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-four.png"
                alt=""
                srcset=""
                className="w-[160px] h-[84px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-two.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-three.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
          </ul>
        </div>
      </div>
      {/* Content */}
      <div className="hero-content-two   w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:mt-32 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Optez pour la livraison en lacher de chariot avec Chapchrono :
            </strong>
            <ul className="mt-12">
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <p className="text-black">
                    <strong>La livraison le jour même</strong>
                    <br />
                    Vos clients peuvent choisir leur propre horaire de livraison
                    et seront livrés dans les 2 heures par des particuliers,
                    même le dimanche et les jours fériés.
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
                  <p className="text-black">
                    <strong>Le suivi de vos livraisons</strong>
                    <br />
                    L'interface de Chapchrono vous permet de suivre vos livraisons
                    en temps réel. Vos clients seront également informés de
                    l'arrivée de leur commande par SMS ou par courrier
                    électronique.
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
                  <p className="text-black">
                    <strong>Un service client dédié</strong>
                    <br />
                    Notre équipe de soutien aux clients suit de près chacune de
                    vos livraisons et intervient si nécessaire pour répondre aux
                    questions et résoudre les problèmes.
                  </p>
                </div>
              </li>
            </ul>
            <br />
            <br />
            <br />
            <Link to="/">
              <label
                tabIndex={0}
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white cursor-pointer"
              >
                Je veux en savoir plus
              </label>
            </Link>
          </div>
        </div>
        <div className="hero-content-one order-1  md:w-1/2 w-full lg:p-16 lg:pt-32 lg:pl-36 p-12">
          <img
            src="/img-store/hero-store-3.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[400px]"
          />
        </div>
      </div>
    </>
  );
}
