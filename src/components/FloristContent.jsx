import React from "react";
import bgSlider from "../bg-slider.png";
import Faq from "../components-three/Faq";
import ContentThree from "../components-two/ContentThree";
import { Link } from "react-router-dom";
import Partner from "./Partner";

export default function FloristContent() {
  return (
    <>
      {/* Content */}
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
              <strong>souple, économique et sociale</strong> en faisant
              récupérer les fleurs de vos clients par des cotransporteurs
              (particuliers) lors de leurs déplacements réguliers,
              <strong>moyennant de l'argent.</strong>
            </p>
            <p className="text-[17px] mt-4 mb-8 text-black">
              C'est la philosophie du covoiturage appliquée à la livraison de
              course.
            </p>
            <Link to="/career">
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
      {/* Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-[#E2E7F3]  lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40 lg:mt-10">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Livrez pendant les fêtes et jour fériés
            </strong>
            <p className="text-[17px] mt-6 text-black">
              Profitez d'un service flexible de livraison disponible 7j/7 y
              compris les jours fériés, sans aucune limite de livraisons sur un
              même créneau horaire. Shopopop s’adapte aux fluctuations de la
              demande lors d'évènements tels que la Saint-Valentin ou encore la
              Fête des Mères.
            </p>
            <p className="text-[17px] mt-2 text-black">
              Un service sans condition, sans engagement et sans investissement
              structurel : aucun coût lié à l'achat d'un véhicule et un
              potentiel de livraison exponentiel sans surcoût.
            </p>
            <p className="text-[17px] mt-2 text-black">
              <strong>
                Ce service de livraison « express » à moindre coût, fonctionne
                aussi bien en zone urbaine que rurale.
              </strong>
            </p>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-36 lg:pt-12 lg:pl-32 p-12">
          <img
            src="/img-two/flo-content.png"
            alt=""
            srcset=""
            className="sm:h-[400px]"
          />
        </div>
      </div>
      {/**Advntage */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[550px] h-[1150px] w-full lg:pt-0 p-[35px]">
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
      {/** Swiper */}
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
              <p className="w-[60%] text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus magnam, fugiat iusto eius dicta commodi aperiam totam
                vitae
                <br />
                <br />
                <strong className="text-[#4D148C]">
                  Lorem ipsum, dolor sit
                </strong>
                <br />
                Lorem ipsum, dolor sit
              </p>
              <div className="w-[34%] rounded-[100%]">
                <img
                  src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
              <p className="w-[60%] text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus magnam, fugiat iusto eius dicta commodi aperiam totam
                vitae
                <br />
                <br />
                <strong className="text-[#4D148C]">
                  Lorem ipsum, dolor sit
                </strong>
                <br />
                Lorem ipsum, dolor sit
              </p>
              <div className="w-[34%] rounded-[100%]">
                <img
                  src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
              <p className="w-[60%] text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus magnam, fugiat iusto eius dicta commodi aperiam totam
                vitae
                <br />
                <br />
                <strong className="text-[#4D148C]">
                  Lorem ipsum, dolor sit
                </strong>
                <br />
                Lorem ipsum, dolor sit
              </p>
              <div className="w-[34%] rounded-[100%]">
                <img
                  src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
      {/* Advantage */}
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
      {/* Content */}
      <ContentThree />
      {/** Faq */}
      <Faq />
      {/* Patner */}
      <Partner />
      {/** Content */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="/logo/logo-no-text.png"
          alt=""
          srcset=""
          className="h-[62px] w-[151px] mt-12"
        />
        <strong className="lg:text-[24px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Prenez contact dès maintenant
        </strong>
        <p className="text-center lg:px-[400px] mt-4 text-black">
          Découvrez nos offres, posez vos questions sur notre service, nous
          sommes là pour répondre à vos interrogations.
        </p>
        <Link to="/consommateurs" className="mt-5">
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
