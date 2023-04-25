import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import bgSlider from "../bg-slider.png";
import Partner from "../components/Partner";

export default function ContentTwo() {
  return (
    <>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-1 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Expédier depuis votre magasin
            </strong>
            <p className="text-[17px] mt-6 text-black">
              Lorsqu’un client veut acheter un produit qui n’est plus disponible
              dans votre magasin, vous pouvez appeler Shopop. Face aux déficits
              en stock, notre solution vous permet de{" "}
              <strong>réapprovisionner votre magasin</strong> en offrant des
              <strong>livraisons expresses entre les magasins</strong> dans la
              même ville.
            </p>
            <p className="text-[17px] mt-6 text-black">
              Ce service permet de <strong>fidéliser votre clientèle</strong> et
              de pallier aux déceptions dues aux ruptures de stocks.
            </p>
          </div>
        </div>
        <div className="order-2  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-12 p-4">
          <img
            src="/img-store/img-store-1.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[600px]"
          />
        </div>
      </div>
      {/** Patner */}
      <Partner/>
      {/* Advantage */}
      <div className="flex flex-col lg:justify-center bg-white lg:h-[350px] h-[1150px] w-full lg:pt-0 p-[35px]">
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
      {/** Content */}
      <div className="hero-content-two   w-full  flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2]  lg:mt-32 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Un réapprovisionnemnt rapide et flexible
            </strong>
            <p className="text-[17px] mt-6 text-black">
              Le service de livraison de Chapchrono vous permet de planifier
              plusieurs livraisons d'un magasin à un autre. Avec ce service,
              vous pouvez recevoir les produits attendus par les clients pendant
              la journée et à tout moment de la journée.
            </p>
            <p className="text-[17px] mt-6 text-black">
              Vous pouvez suivre en temps réel le parcours du cotransporteur
              (livreur particulier du produit) et informer le client de l'heure
              d'arrivée de son produit dans votre boutique.
            </p>
          </div>
        </div>
        <div className="hero-content-one order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-36 p-12">
          <img
            src="/img-store/pc-store.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[400px]"
          />
        </div>
      </div>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-1 h-full md:w-1/2 w-full lg:pl-56  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Une interface business : comment ça marche ?
            </strong>
            <p className="text-[17px] mt-6 text-black">
              La plateforme est accessible depuis un navigateur web et vous
              pouvez démarrer les livraisons le jour même, après la création de
              votre compte.
            </p>
            <ul className="mt-6">
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[12px] m-2"
                  />
                  <p className="text-black">
                    Indiquez les coordonnées de votre magasin
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
                    Renseignez le magasin où le Cotransporteur (livreur
                    particulier ) doit récupérer le produit en rupture de stock
                    dans votre boutique
                  </p>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[12px] m-2"
                  />
                  <p className="text-black">
                    Sélectionnez la date et l’heure de livraison souhaitée
                  </p>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[12px] m-2"
                  />
                  <p className="text-black">
                    Lancez la livraison entre vos magasins
                  </p>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <p className="text-black">
                    Regardez chaque étape du processus de livraison, de quand un
                    vendeur l’enregistre jusqu’à quand il arrive dans votre
                    magasin.
                  </p>
                </div>
              </li>
            </ul>
            <br />
            <br />
            <Link to="/cotransporteur">
              <label
                tabIndex={0}
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white cursor-pointer"
              >
                En savoir plus
              </label>
            </Link>
          </div>
        </div>
        <div className="order-2 md:w-1/2 w-full lg:p-16 lg:pt-32 lg:pl-12 p-12">
          <img
            src="/img-two/pc-img.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[500px]"
          />
        </div>
      </div>
      {/** Swiper */}
      <div
        className="flex justify-center flex-col py-28 items-center lg:py-32 lg:p-32 bg-cover"
        style={{ backgroundImage: `url(${bgSlider})` }}
      >
        <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-white drop-shadow-lg">
          Ils ont adoptés le service
        </strong>
        <br />
        <br />
        <br />
        <div className="carousel w-96 h-96 md:h-96 md:w-full">
          <div
            id="slide1"
            className="carousel-item relative w-96 h-96 md:h-96 md:w-full"
          >
            <div className="h-full w-full bg-white flex py-12 px-2 md:px-20 space-x-6 rounded-[54px] relative">
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
            <div className="h-full w-full bg-white flex py-16 px-2 md:px-20 space-x-6 rounded-[54px] relative">
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
      {/* Content */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="/logo/logo-no-text.png"
          alt=""
          srcset=""
          className="h-[62px] w-[151px] mt-12"
        />
        <strong className="lg:text-[24px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Faites comme eux, livrez vos clients dans
          <br />
          votre ville et ses environs !
        </strong>
        <p className="text-center lg:px-[400px] mt-4 text-black">
          Aujourd'hui, plus de 600 magasins partenaires nous font déjà confiance
          !
        </p>
        <Link to="/" className="mt-5">
          <label
            tabIndex={0}
            className="hover:bg-[#db6013] bg-[#FF6200] rounded-full p-3 px-10 text-white cursor-pointer"
          >
            Rejoignez Chapchrono
          </label>
        </Link>
      </div>
    </>
  );
}
