import React from "react";
import bgSlider from "../bg-slider.png";
import { Link } from "react-router-dom";
import "../App.css";

export default function ContentOne() {
  return (
    <>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Expédier depuis le magasin
            </strong>
            <p className="text-[17px] mt-6 text-black">
              Face aux nombreux événements et crises qui ont marqué le quotidien
              des petits et grands commerces, la livraison à domicile s'est
              révélée être un levier essentiel de la distribution. Que votre
              ambition soit de proposer un service rapide et flexible à vos
              clients ou gagner en maturité face à d'autres acteurs de votre
              secteur, le Ship from Store est une solution qui vous permet de
              livrer vos clients à partir de votre magasin, et non à partir
              d’une plateforme d'entreposage.
            </p>
            <p className="text-[17px] mt-6 text-black">
              Chapchrono est là pour vous accompagner dans la mise en place de ce
              service ! Réduisez la distance et les délais de livraison en vous
              appuyant sur le maillage territorial de vos points de vente, et
              proposez une livraison flexible, économique, collaborative et
              rapide à vos clients. Ensemble, multiplions vos opportunités !
            </p>
          </div>
        </div>
        <div className="order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-12 p-4">
          <img
            src="/img-store/img-one.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[600px]"
          />
        </div>
      </div>
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
      {/* Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2]  lg:p-12 sm:mt-32 mt-6">
        <div className="h-full md:w-1/2 w-full lg:pl-40">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Attirez de nouveaux clients
            </strong>
            <p className="text-[17px] mt-6 text-black">
              Saviez-vous que l'une des principales raisons pour lesquelles un
              internaute abandonne son panier d’achat sur internet, est parce
              que le temps de livraison est trop long? Avec Chapchrono,
              développer votre clientèle en offrant des livraisons rapides,
              disponibles 24 heures par jour, dans les zones urbaines et
              rurales.
              <br />
              <br />
              Notre solution de livraison collaborative répond également aux
              besoins des clients qui sont âgés, utilisateurs sans véhicule, ou
              simplement occupés!
            </p>
          </div>
        </div>
        <div className="h-full md:w-1/2 w-full lg:p-16 lg:pt-0 lg:pl-36 p-12">
          <img
            src="/img-store/img-two.png"
            alt=""
            srcset=""
            className="sm:h-[300px] w-[350px]"
          />
        </div>
      </div>
      {/** Content */}
      <div className="hero-content-two   w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Une expérience client assurée
            </strong>
            <p className="text-[17px] mt-6 text-black">
              La solution de Chapchrono vous permet de contrôler l’ensemble du
              trajet de livraison.
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
                  <p className="text-black">
                    Un suivi en temps réel de vos livraisons
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
                    Vos clients sont informés en direct du parcours de leur
                    livraison
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
                    Notre support client est disponible 6 jours sur 7
                  </p>
                </div>
              </li>
            </ul>
            <p className="text-[17px] mt-6 text-black">
              Chez Chapchrono, nous chargeons la relation avec les clients, les
              équipes magasins et les cotransporteurs (livreurs particuliers).
            </p>
          </div>
        </div>
        <div className="hero-content-one order-1  md:w-1/2 w-full lg:p-16 lg:pt-28 lg:pl-56 p-12">
          <img
            src="/img-store/img-three.png"
            alt=""
            srcset=""
            className="h-[300px] w-[300px]"
          />
        </div>
      </div>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2] lg:mt-0 lg:p-12 lg:pt-0">
        <div className="hero-content-two order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              2 formules pour gérer votre livraison
            </strong>
            <p className="text-[17px] lg:my-16 mt-6 mb-8 text-black">
              Notre interface est{" "}
              <strong>accessible à partir de votre navigateur web</strong>, où
              vous pouvez créer vos envois manuellement ou en utilisant une
              entrée automatique de données pour vos informations de livraison
              via une <strong>API intégrée.</strong>
            </p>
            <Link to="/interface" className="mt-5">
              <label
                tabIndex={0}
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white  cursor-pointer"
              >
                Cliquez là
              </label>
            </Link>
          </div>
        </div>
        <div className="hero-content-one order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-12 p-12">
          <img
            src="/img-two/pc-img.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[500px]"
          />
        </div>
      </div>
      {/* Swiper */}
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
        <Link to="/career" className="mt-5">
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
