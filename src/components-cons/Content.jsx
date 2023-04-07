import React from "react";


export default function Content() {
  return (
    <>
      {/* Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center   lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-12 sm:pt-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start leading-[50px] tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Le cotransportage ?
              <br />
              Vous allez l'appréciez
            </strong>
            <p className="text-[17px] mt-6 text-black">
              À un moment donné, nous avons tous eu des problèmes avec les
              livraisons - temps d'attente interminable, livreurs qui ne font
              pas signe de vie, ou les marchandises endommagées.
            </p>
          </div>
        </div>
        <div className="hero-content-two lg:pt-12  h-full md:w-1/2 w-full lg:p-16  lg:pl-24 p-0">
          <img
            src="/card-img/hero-cons.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[450px]"
          />
        </div>
      </div>
      {/*Advantage */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[550px] h-[850px] w-full lg:pt-0 p-[35px] ">
        <br className="supp" />
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          Le cotransportage c'est quoi ?
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Des trajets précis
              </strong>
              <div className="text-center text-black">
                Des gens qui profitent de
                <br />
                leur route pour livrer
                <br />
                vos courses
              </div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Des livraisons sur choix
              </strong>
              <div className="text-center text-black">
                Vous pouvez choisir le
                <br />
                temps de livraison qui
                <br />
                fonctionne pour vous et à
                <br />
                l'adresse de votre choix.
              </div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8">
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Des rencontres
              </strong>
              <div className="text-center text-black">
                L'occasion d'effectuer de nouvelle
                <br />
                rencontre
              </div>
            </li>
          </ul>
        </div>
        <br className="nav-res" />
        <div className="mt-[200px] flex-col flex justify-center items-center sm:mt-32">
          <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg sm:pt-16 lg:pt-0  text-center">
            La livraison, évoluée
          </strong>
          <p className="text-center flex justify-center mt-12 sm:px-32 text-black">
            Service de livraisons innovant avec une solution de cotransportage
            pour la livraison combine le meilleur de la technologie et le bon
            vieux sens commun. Une communauté de gens quotidiens profite de
            leurs trajets réguliers pour faire des livraisons le long du chemin.
            Actuellement Chapchrono c'est ...
          </p>
        </div>
      </div>
      {/* Patner */}
      <div className="partner-container-two flex-col flex items-center justify-center bg-white h-[323px] w-full p-[35px]">
        <div className="partner-container-two flex p-[25px] justify-center bg-none h-[128px] w-full ">
          <ul className="list-partner flex">
            <li>
              <img
                src="/logo-partner/partner-express-glob.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo-partner/partner-lion.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo-partner/partner-rue.png"
                alt=""
                srcset=""
                className="w-[160px] h-[84px] m-[25px]"
              />
            </li>
          </ul>
        </div>
      </div>
      {/** Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2] lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start leading-10  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Le bonheur à portée
              <br />
              de clics
            </strong>
            <p className="text-[17px] lg:my-8 mt-6 mb-8 text-black">
              Notre service de livraison de cotransportation se caractérise par
              sa fiabilité, sa qualité et sa flexibilité. Faites donc vos achats
              avec nos détaillants partenaires et choisissez d'avoir vos
              articles livrés par un particulier!
            </p>
          </div>
        </div>
        <div className="order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-0 p-12">
          <img
            src="/heroThree.png"
            alt=""
            srcset=""
            className="sm:h-[500px] w-[500px]"
          />
        </div>
      </div>
      {/* Content */}
      <div className="w-full h-full flex-col flex items-center justify-center bg-[#EFEFF2] pb-16 ">
        <strong className="lg:text-[35px] text-3xl  leading-10 text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Qui sont nos cotransporteurs ?
        </strong>
        <p className="text-[17px] lg:my-8 mt-6 mb-8 text-center sm:px-32 text-black px-6">
          Les cotransporteurs sont des gens ordinaires, comme vous et moi, qui
          profitent de leurs trajets habituels pour livrer d'autres personnes.
          Pour chaque service rendu, ils reçoivent quelques sous et un grand
          merci. Notre communauté ne fait que s'agrandir chaque jours !
        </p>
      </div>
    </>
  );
}
