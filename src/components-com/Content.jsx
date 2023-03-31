import React from "react";
import {Link} from "react-router-dom"
import "../App.css";

export default function Content() {
  return (
    <>
      {/*Advantage One */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[550px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <br className="supp" />
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          Des heureux et des sous
        </strong>
        <p className="text-center flex justify-center mt-12 sm:px-32 text-black">
          Chapchrono est idéal pour les gens qui veulent gagner un peu d'argent
          en aidant les autres. Vous pouvez utiliser l'application pour vous
          inscrire à des tâches régulières.
        </p>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo/add-3.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                FCFA
              </strong>
              <div className="text-center text-black">Gain moyen</div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/logo/ad-1.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                +700
              </strong>
              <div className="text-center text-black">téléchargements</div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo/add-2.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                + 550
              </strong>
              <div className="text-center text-black">cotransporteurs</div>
            </li>
          </ul>
        </div>
        <div className="btn-flex flex justify-center items-center sm:mt-32 sm:mr-12">
          <label
            tabIndex={0}
            className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
          >
            Je telecharge l'app
          </label>
        </div>
      </div>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Partager , c'est bien
            </strong>
            <p className="text-[17px] lg:my-16 mt-6 text-black">
              Avez-vous déjà remarqué combien de fois il y a de l'espace
              supplémentaire dans votre voiture quand vous vous déplacez pour
              travailler ou prendre vos enfants de l'école? Que se passe-t-il si
              vous pouviez mettre cet espace à bon usage en faisant des
              livraisons en échange de quelques sous ? C'est ça le
              cotransportage !
            </p>
          </div>
        </div>
        <div className="order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12">
          <img
            src="/heroThree.png"
            alt=""
            srcset=""
            className="sm:h-[500px] w-[500px]"
          />
        </div>
      </div>
      {/*Advantage Twoo */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[750px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <br className="supp" />
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          C'est tellement simple
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo/ad-1.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                CFA
              </strong>
              <div className="text-center text-black">
                <strong>D'abord</strong>
                <br />
                <br />
                Ouvrez l’application
                <br />
                Chapchrono et choisissez une
                <br />
                livraison sur votre chemin
              </div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/logo/car.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                +700
              </strong>
              <div className="text-center text-black">
                <strong>Ensuite</strong>
                <br />
                <br />
                Récupérer la commande
                <br />
                chez le commerçant
                <br />
                partenaire.
              </div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo/add-4.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                + 550
              </strong>
              <div className="text-center text-black">
                <strong>Enfin</strong>
                <br />
                <br />
                Livrez les achats et hop, vos
                <br />
                sous seront crédités dans
                <br />
                votre cagnotte.
              </div>
            </li>
          </ul>
        </div>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
     <br/>
        <div className="btn-flex flex justify-center items-center sm:mt-32">
          <label
            tabIndex={0}
            className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
          >
            Je telecharge l'app
          </label>
        </div>
      </div>
      {/***Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40 sm:pt-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Vivons mieux, ensemble
            </strong>
            <p className="text-[17px] mt-12 text-black">
              Pour partager les meilleures astuces et se raconter des anecdotes,
              la communauté se retrouve sur un groupe Facebook dédié. Entraide,
              partage et solidarité sont les maîtres mots. Allez, venez !
            </p>
           <Link to="/cotransporteur" >
           <label
              tabIndex={0}
              className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full mt-12 p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
            >
              c'est par ici
            </label>
           </Link>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-16 lg:pt-0 lg:pl-0 p-0">
          <img
            src="/card-img/content-com.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[550px]"
          />
        </div>
      </div>
      {/* Patner */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[450px] h-[650px] w-full lg:pt-0 p-[35px]">
        <br className="supp" />
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg  lg:pt-0  text-center">
          Téléchargez l'application
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo/play-store.png"
                alt=""
                srcset=""
                className="w-[208px] h-[108px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/logo/app-store.png"
                alt=""
                srcset=""
                className="w-[208px] h-[108px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
