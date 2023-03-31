import React from "react";
import { Link } from "react-router-dom";

export default function ContentCo() {
  return (
    <>
      {/** Card */}
      <div className="mt-6 grid  grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-[#EFEFF2] px-8 sm:px-16 py-24">
        <div class="xl:w-1/4 m-4">
          <div class="h-[452px] w-[308px] bg-white rounded-lg">
            <div className="flex h-full w-full rounded-lg flex-col">
              <div className="h-[35%] rounded-[100%] flex items-center justify-center">
                <img
                  src="/logo/picto_1.png"
                  alt=""
                  className="rounded-[100%] h-[106px]"
                />
              </div>
              <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                <strong className="text-[17px] leading-normal  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                  RENCONTREZ D'AUTRES
                  <br />
                  COTRANSPORTEURS
                </strong>
                <p className="text-center text-[12px] text-black  px-5 mt-8">
                  Les consommateurs qui choisissent d’avoir leurs produits
                  livrés par des personnes qui les ressemblent.
                </p>
                <p className="text-center text-[12px] mt-8 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                  <Link to="/consommateurs">en savoir plus</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 m-4">
          <div class="h-[452px] w-[308px] bg-white rounded-lg">
            <div className="flex h-full w-full rounded-lg flex-col">
              <div className="h-[35%] rounded-[100%] flex items-center justify-center">
                <img
                  src="logo/picto_2.png"
                  alt=""
                  className="rounded-[100%] h-[106px]"
                />
              </div>
              <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                <strong className="text-[17px] leading-normal  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                  RENCONTREZ D'AUTRES
                  <br />
                  COTRANSPORTEURS
                </strong>
                <p className="text-center text-[12px]  text-black px-5 mt-8">
                  Les consommateurs qui choisissent d’avoir leurs produits
                  livrés par des personnes qui les ressemblent.
                </p>
                <p className="text-center text-[12px] mt-8 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                  <Link to="/communauté">en savoir plus</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 m-4">
          <div class="h-[452px] w-[308px] bg-white rounded-lg">
            <div className="flex h-full w-full rounded-lg flex-col">
              <div className="h-[35%] rounded-[100%] flex items-center justify-center">
                <img
                  src="logo/picto_3.png"
                  alt=""
                  className="rounded-[100%] h-[106px]"
                />
              </div>
              <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                <strong className="text-[17px] leading-normal  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                  RENCONTREZ D'AUTRES
                  <br />
                  COTRANSPORTEURS
                </strong>
                <p className="text-center text-[12px]  text-black  px-5 mt-8">
                  Les consommateurs qui choisissent d’avoir leurs produits
                  livrés par des personnes qui les ressemblent.
                </p>
                <p className="text-center text-[12px] mt-8 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                  <Link to="/communauté">vous en etes ou ?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 m-4">
          <div class="h-[452px] w-[308px] bg-white rounded-lg">
            <div className="flex h-full w-full rounded-lg flex-col">
              <div className="h-[35%] rounded-[100%] flex items-center justify-center">
                <img
                  src="logo/picto_4.png"
                  alt=""
                  className="rounded-[100%] h-[106px]"
                />
              </div>
              <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                <strong className="text-[17px] leading-normal  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                  RENCONTREZ D'AUTRES
                  <br />
                  COTRANSPORTEURS
                </strong>
                <p className="text-center text-[12px] text-black  px-5 mt-8">
                  Les consommateurs qui choisissent d’avoir leurs produits
                  livrés par des personnes qui les ressemblent.
                </p>
                <p className="text-center text-[12px] mt-8 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                  <Link to="/consommateurs">vous en etes ou ?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center   lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-12 sm:pt-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Parrainez vos amis
            </strong>
            <p className="text-[17px] mt-12 text-black">
              <strong>Invitez vos amis à rejoindre cette aventure !</strong>{" "}
              Récupérer votre code de parrainage dans l'onglet "Mon Profil" de
              l'application.
              <br />
              <br />
              Votre filleul(e) entre votre code lors de son inscription en
              cliquant sur "J'ai un code parrainage" . Après sa première
              livraison,
              <strong> vous recevrez chacun une rémunération !</strong>
            </p>
            <Link to="/career">
              <label
                tabIndex={0}
                className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full mt-12  p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
                
              >
                Parcourir
              </label>
            </Link>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-16 lg:pt-0 lg:pl-24 p-0">
          <img
            src="/card-img/content-com.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[550px]"
          />
        </div>
      </div>
      {/**Content Logo Text */}
      <div className="flex flex-col items-center mb-0 bg-[#EFEFF2] h-[400px]">
        <img
          src="/logo/logo-no-text.png"
          alt=""
          srcset=""
          className="h-[62px] w-[151px] mt-12"
        />
        <strong className="lg:text-[24px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Rejoignez la communauté sur faceboock
        </strong>
        <p className="text-center lg:px-[400px] mt-4 text-black">
          Rejoignez le groupe Facebook et
          <strong>
            {" "}
            échangez avec les cotransporteurs proches de chez vous !
          </strong>
        </p>
        <label
          tabIndex={0}
          className="hover:bg-[#db6013] bg-[#FF6200] rounded-full p-3 px-10 text-white mt-5 cursor-pointer"
        >
          Rejoindre mon groupe faceboock
        </label>
      </div>
    </>
  );
}
