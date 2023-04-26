import React from "react";
import bgSlider from "../bg-slider.png";
import "../App.css";

export default function Swiper() {
  return <>
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
            J'ai utilisé ce service de livraison pour la première fois et j'ai été agréablement 
            surpris. Ils sont très professionnels, ils ont livré mes clients à temps. Je 
            recommande vivement ce service à tous ceux qui recherchent un service de livraison 
            fiable et efficaces, moi je ne m'en lasse plus !
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
  </>;
}
