import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <>
      <div className="w-full block lg:flex h-[50vh] bg-[#4D148C]">
        <div className="bg-none w-full h-[300px] lg:w-[30%] flex flex-col items-center p-8 ">
          <img src="/logo/logo-title.png" alt="" className="w-[230px] ml-8" />
          <label
            tabIndex={0}
            className="hover:bg-[#ba571a] bg-[#db6013] rounded-full p-3 px-8 text-white w-[300px]"
          >
            <Link to="/career">Devenez commerçant partenaire</Link>
          </label>
          <label
            tabIndex={0}
            className="hover:bg-[#ba571a] bg-[#db6013] rounded-full mt-6 p-3 px-6 text-white w-[220px]"
          >
            <Link to="/cotransporteur">Devenez cotransporteur</Link>
          </label>
        </div>
        <div className="lg:flex block w-full h-full lg:w-[70%] bg-[#4D148C]">
          <div className="lg:w-1/4 bg-none h-[300px] flex justify-center pt-16 bg-[#4D148C]">
            <ul>
              <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-[#db6013] transition-all cursor-pointer">
                Services
              </li>
              <Link to="/fromYourStore">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Depuis votre magasin
                </li>
              </Link>
              <Link to="/betweenYourStore">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Entre vos magasins
                </li>
              </Link>
              <Link to="/interface">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Interface professionnelle et Api
                </li>
              </Link>
              <Link to="/cotransporteur">
                <li className=" hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Cotransportage
                </li>
              </Link>
            </ul>
          </div>
          <div className="lg:w-1/4 bg-none h-[300px] flex justify-center pt-16 bg-[#4D148C]">
            <ul>
              <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-[#db6013] transition-all cursor-pointer">
                Grande distribution
              </li>
              <Link to="/largeErea">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Grandes surfaces spécialisées
                </li>
              </Link>
              <Link to="/trade">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Commerces indépendants
                </li>
              </Link>
              <Link to="/florist">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Fleuriste
                </li>
              </Link>
            </ul>
          </div>
          <div className="lg:w-1/4 bg-none h-[300px] flex justify-center pt-16 bg-[#4D148C] ">
            <ul className="ul-items">
              <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-[#db6013] transition-all cursor-pointer">
                Partciculiers
              </li>
              <Link to="/cotransporteur">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Cotransporteurs
                </li>
              </Link>
              <Link to="/communauté">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  La commmunauté
                </li>
              </Link>
              <Link to="/consommatuers">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Consommateurs
                </li>
              </Link>
            </ul>
          </div>
          <div className="lg:w-1/4 bg-none h-[300px] flex justify-center pt-16 bg-[#4D148C]">
            <ul className="ul-items">
              <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-[#db6013] transition-all cursor-pointer">
                A propos
              </li>
              <Link to="/">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Qui sommes-nous ?
                </li>
              </Link>
              <Link to="/career">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Carrières
                </li>
              </Link>
              <Link to="/career">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  Contact
                </li>
              </Link>
              <Link to="/faq">
                <li className="pb-4  hover:translate-x-[-10px] hover:translate-y-[-2px] text-white transition-all cursor-pointer">
                  FAQ
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
