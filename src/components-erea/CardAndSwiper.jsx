import React from "react";
import bgSlider from "../bg-slider.png";
import "../App.css";

export default function CardAndSwiper() {
  return (
    <>
      {/* Card Part */}
      <section class="text-gray-600 body-font bg-[#EFEFF2] ">
        <div class="px-24 py-24">
          <div class="flex flex-wrap justify-center">
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                    <img
                      src="/card-img/large-1.jpg"
                      alt=""
                      className="rounded-t-lg h-[206px]"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      SPORTS & LOISIRS
                    </strong>
                    <p className="text-center text-[12px] text-black  px-5 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque et ducimus reiciendis magnam vero minus explicabo
                      quaerat, dicta obcaecati voluptas delectus nostrum tempore
                      amet adipisci id? Facilis soluta corporis ipsum.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      vous en etes ou ?
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
                      src="/card-img/large-2.jpg"
                      alt=""
                      className="rounded-t-lg h-[206px]"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      MODE, PRÊT-À-PORTER
                    </strong>
                    <p className="text-center text-[12px] text-black  px-5 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque et ducimus reiciendis magnam vero minus explicabo
                      quaerat, dicta obcaecati voluptas delectus nostrum tempore
                      amet adipisci id? Facilis soluta corporis ipsum.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      vous en etes ou ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                    <img
                      src="/card-img/large-3.jpg"
                      alt=""
                      className="rounded-t-lg h-[206px]"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      CULTURE
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque et ducimus reiciendis magnam vero minus explicabo
                      quaerat, dicta obcaecati voluptas delectus nostrum tempore
                      amet adipisci id? Facilis soluta corporis ipsum.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      vous en etes ou ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Swiper Part  */}
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
      {/* Partner Part */}
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
              <div className="text-center">partout en Côte d'Ivoire</div>
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
              <div className="text-center">
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
              <div className="text-center">
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
              <div className="text-center">
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
    </>
  );
}
