import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Form from "../api/Form";

export default function ContentTarif() {
  return (
    <>
      {/*Card */}
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
      {/* TAble */}
      <div className="sm:p-24 p-6 flex items-center justify-center">
        <table className="border-spacing-2 text-black">
          <thead className="border-collapse w-full border-2 border-solid bg-[#EFEFF2]">
            <tr className="bg-[#EFEFF2]">
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
                LES ESSENTIELS
              </th>
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]"></th>
            </tr>
          </thead>
          <tbody className="w-full border-collapse border-2 border-solid">
            <tr className="w-full">
              <td className="border-collapse border-2 border-solid w-1/2">
                <p className="sm:p-[20px] p-3">Livraison rapide</p>
              </td>
              <td className="border-collapse border-2 border-solid w-1/2">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
            {/* Ligne 2 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">
                  Nombre de livraisons / créneau horaire
                </p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 items-center flex justify-center">
                  Illimité
                </p>
              </td>
            </tr>
            {/* Ligne 3 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">
                  Automatisation de vos livraisons (API)
                </p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  Sous condition
                </p>
              </td>
            </tr>
            {/* Ligne 4 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">Facturation mensuelle</p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* TAble */}
      <div className="sm:p-24 p-6 flex items-center justify-center">
        <table className="border-spacing-2 text-black">
          <thead className="border-collapse w-full border-2 border-solid bg-[#EFEFF2]">
            <tr className="bg-[#EFEFF2]">
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
                GESTION DES LIVRAISONS
              </th>
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]"></th>
            </tr>
          </thead>
          <tbody className="w-full border-collapse border-2 border-solid">
            <tr className="w-full">
              <td className="border-collapse border-2 border-solid w-1/2">
                <p className="sm:p-[20px] p-3">
                  Accès à votre Interface Professionnelle
                </p>
              </td>
              <td className="border-collapse border-2 border-solid w-1/2">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
            {/* Ligne 2 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">Création des livraisons</p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 items-center flex justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
            {/* Ligne 3 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">
                  Modification et décalage des livraisons
                </p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
            {/* Ligne 4 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">Suivi en temps réel</p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
            {/* Ligne 5 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">
                  Statistiques de vos livraisons
                </p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* TAble */}
      <div className="sm:p-24 p-6 flex items-center justify-center">
        <table className="border-spacing-2 text-black">
          <thead className="border-collapse w-full border-2 border-solid bg-[#EFEFF2]">
            <tr className="bg-[#EFEFF2]">
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
                MARKETING & COMMUNICATION
              </th>
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]"></th>
            </tr>
          </thead>
          <tbody className="w-full border-collapse border-2 border-solid">
            <tr className="w-full">
              <td className="border-collapse border-2 border-solid w-1/2">
                <p className="sm:p-[20px] p-3">
                  Emails, SMS et notifications clients
                </p>
              </td>
              <td className="border-collapse border-2 border-solid w-1/2">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
            {/* Ligne 2 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">Kit de communication physique</p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 items-center flex justify-center">
                  Sur demande
                </p>
              </td>
            </tr>
            {/* Ligne 3 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">Kit de communication digital</p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  Sur demande
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* TAble */}
      <div className="sm:p-24 p-6 flex items-center justify-center">
        <table className="border-spacing-2 text-black">
          <thead className="border-collapse w-full border-2 border-solid bg-[#EFEFF2]">
            <tr className="bg-[#EFEFF2]">
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
                ACCOMPAGNEMENT & SUPPORT
              </th>
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]"></th>
            </tr>
          </thead>
          <tbody className="w-full border-collapse border-2 border-solid">
            <tr className="w-full">
              <td className="border-collapse border-2 border-solid w-1/2">
                <p className="sm:p-[20px] p-3">
                  Formation individuelle sur l'interface
                </p>
              </td>
              <td className="border-collapse border-2 border-solid w-1/2">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
            {/* Ligne 2 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">
                  Suivi personnalisé avec l'équipe commerciale
                </p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 items-center flex justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
            {/* Ligne 3 */}
            <tr>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3">
                  Support par Chat, téléphone et email, 6J/7 et jours fériés
                </p>
              </td>
              <td className="border-collapse border-2 border-solid">
                <p className="sm:p-[20px] p-3 flex items-center justify-center">
                  <img src="/img-two/yes.png" alt="" className="w-12" />
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Contact Form */}
      <Form />
      {/* Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40">
          <div className="lg:p-4 p-10 text-black">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Une interface réfléchie pour vous
            </strong>
            <p className="text-[17px] mt-6">
              Afin de rendre la livraison collaborative la nouvelle norme pour
              les marchandises de transport, Chapchrono développé des outils
              simples et complets qui combinent le meilleur de la technologie et
              le bon sens commun ancien.
              <br />
              <br />
              Vous n'avez pas besoin d'être un expert informatique ou un
              professionnel de la logistique pour livrer vos clients. Sur
              l’Interface Professionnelle, créez des livraisons en quelques
              secondes (manuellement ou de façon automatique grâce à notre
              connexion API).
            </p>
            <br />
            <br />
            <Link to="/interface" className="mt-5">
              <label
                tabIndex={0}
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 sm:px-10 text-white  cursor-pointer"
              >
                Je découvre l'Interface Professionelle
              </label>
            </Link>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-32 p-0">
          <img
            src="/img-two/hero-sol-3.png"
            alt=""
            srcset=""
            className="sm:h-[500px]  w-[400px]"
          />
        </div>
      </div>
      {/* SECOND PART CONETNT */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10 text-black">
            <strong className="lg:text-[25px] text-3xl text-start font-thin tracking-[0.27px] text-[#db6013] drop-shadow-lg">
              SUPPORT CLIENT
            </strong>
            <br />
            <br />
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Le cotransportage
              <br />
              ça révolutionne
            </strong>
            <p className="text-[17px] mt-6">
              Nos équipes de vente et de soutien aux clients sont ici pour
              répondre à vos questions et vous guider à travers l’interface
              professionnelle :
              <br />
              <br />- Support par Chat, email et ligne téléphonique dédiée aux
              commerçants
              <br />
              - Formations en visio ou en physique
              <br />- Documentation et ressources en ligne
              <br />
              <br />
              Notre équipe de support client est disponible 6 jours par semaine,
              même les jours fériés!
            </p>
          </div>
        </div>
        <div className="order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12">
          <img
            src="/img-two/hero-sol-2.png"
            alt=""
            srcset=""
            className="sm:h-[400px]  w-[400px]"
          />
        </div>
      </div>
    </>
  );
}
