import React from "react";
import "../App.css";

export default function Card() {
  return (
    <>
      <section class="text-gray-600 body-font bg-[#EFEFF2] ">
        <div class="px-24 py-24">
          <div class="flex flex-wrap justify-center">
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                    <img
                      src="/card-img/card-one.jpg"
                      alt=""
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      Des commerçants
                      <br />
                      attentifs
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                      Les magasins indépendants et les grandes entreprises
                      choisissent des livraisons plus justes.
                    </p>
                    <p className="text-center text-[12px] mt-10 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      Vous en êtes où?
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
                      src="/card-img/card-two.jpg"
                      alt=""
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      Des cotransporteurs
                      <br />
                      bienveillants
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                      Les personnes qui profitent régulièrement de leurs
                      commutes pour faire des livraisons, en échange de quelques
                      sous
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      Et si c'était vous?
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
                      src="/card-img/card-three.jpg"
                      alt=""
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      Des consommateurs
                      <br />
                      consciencieux
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                      Les consommateurs qui choisissent d’avoir leurs produits
                      livrés par des personnes qui les ressemblent.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      Ça vous parle?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
