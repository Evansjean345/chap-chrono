import React from "react";

export default function HeroFaq() {
  return (
    <>
      <div className="w-full flex-col bg-[#EFEFF2] sm:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12 py-28">
        <div className="sm:w-[20%] w-full h-full flex items-center justify-center">
          <img
            src="/logo/icon-left.png"
            alt=""
            className="h-[179px] w-[317px]"
          />
        </div>
        <div className="sm:w-[60%] w-full">
          <div className="h-full  w-full  sm:pt-10 lg:pt-20">
            <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
              <strong className="md:text-[64px] text-[36px] text-gray-700 text-center md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Comment pouvons-nous vous aider ?
              </strong>
              <p className="mt-6 text-center text-gray-700 text-[18px]">
              Vous trouverez ici toutes les réponses à vos questions
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-[20%] w-full h-full flex items-center justify-center">
          <img
            src="/logo/icon-right.png"
            alt=""
            className="h-[179px] w-[317px] "
          />
        </div>
      </div>
      {/*** Content Card */}
      <section class="text-gray-600 body-font bg-white ">
        <div class="px-24 py-24">
          <div class="flex flex-wrap justify-center">
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white border-2 border-gray-300 rounded-lg sm:hover:translate-y-[-18px] transition-all">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none flex items-center justify-center">
                    <img
                      src="/card-img/card-1.png"
                      alt=""
                      className="rounded-t-lg h-[120px]"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-8  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                    Vous êtes un
                      <br />
                    commerçant partenaire
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                    Vous êtes un commerçant partenaire ou souhaitez le devenir et 
                    proposer la livraison en cotransportage à vos clients ?
                    Trouvez des réponses à toutes vos questions dans cette catégorie!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 m-4 ">
              <div class="h-[452px] w-[308px] bg-white border-2 border-gray-300 rounded-lg sm:hover:translate-y-[-18px] transition-all">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none flex justify-center items-center">
                    <img
                      src="/card-img/card-2.png"
                      alt=""
                      className="rounded-t-lg h-[120px]"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-8  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                    Vous êtes un
                      <br />
                    cotransporteur
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                    Êtes-vous un cotransporteur ou voulez-vous devenir un? 
                    trouver des réponses à toutes vos questions dans cette 
                    catégorie!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white border-2 border-gray-300 rounded-lg sm:hover:translate-y-[-18px] transition-all">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none flex justify-center items-center">
                    <img
                      src="/card-img/card-3.png"
                      alt=""
                      className="rounded-t-lg h-[120px]"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-8  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                    Vous êtes un
                      <br />
                    consommateur
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                    Vous vous faites livrer par <br />
                    Chapchrono ou si vous avez des questions sur la livraison, 
                    vous trouverez les réponses que vous cherchez dans cette 
                    catégorie!
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
