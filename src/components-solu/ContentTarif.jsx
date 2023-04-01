import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

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
            <tr>
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
                LES ESSENTIELS
              </th>
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
            <tr>
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
                GESTION DES LIVRAISONS
              </th>
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
            <tr>
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
                MARKETING & COMMUNICATION
              </th>
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
            <tr>
              <th className="table-cell p-[10px] sm:p-[20px] text-[#21264D]">
                ACCOMPAGNEMENT & SUPPORT
              </th>
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
      {/* Contact */}
      <section class="bg-[#4D148C] text-black">
        <div class="container px-6 py-12 mx-auto">
          <div class="lg:flex lg:items-center lg:-mx-6">
            <div class="lg:w-1/2 lg:mx-6 lg:mb-80 text-white">
              <h1 class="text-3xl font-semibold  capitalizetext-white lg:text-5xl">
                Nos équipes sont ici
                <br />
                pour vous conseiller sur
                <br />
                nos tarifs.
              </h1>

              <div class="mt-6 space-y-8 md:mt-8">
                <p class="flex items-start -mx-2 p-6">
                  Vous avez deszones d'ombres sur l'utilisation de l'interface
                  Shopopop ou nos tarifs ? Contactez-nous !
                </p>
              </div>
            </div>
            {/* Forùm */}
            <div class="mt-8 lg:w-1/2 lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50 ">
                <h1 class="text-3xl font-semibold  capitalizetext-white lg:text-3xl text-black">
                  Devenez Partenaire
                </h1>

                <form class="mt-6">
                  <div class="flex-1">
                    <input
                      id="tel"
                      name="number"
                      type="text"
                      placeholder="vous etes un... *"
                      class="rounded-full block w-full px-5 py-3 mt-2 bg-white text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                      required
                    />
                  </div>
                  <br/>
                  <br/>
                  <div class="flex-1">
                    <div className="flex space-x-3">
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="type de commerce"
                        class="rounded-full bg-white block w-1/2 px-5 py-3 mt-2 text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="type de commerce"
                        class="rounded-full bg-white block w-1/2 px-5 py-3 mt-2 text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <div class="flex-1">
                    <div className="flex space-x-3">
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="nom"
                        class="rounded-full bg-white block w-1/2 px-5 py-3 mt-2 text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="prénom"
                        class="rounded-full bg-white block w-1/2 px-5 py-3 mt-2 text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>
                  </div>
                  <br />
                  <div class="flex-1">
                    <div className="flex space-x-3">
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="email"
                        class="rounded-full block w-1/2 px-5 py-3 mt-2 bg-white text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="numéro de téléphone"
                        class="rounded-full block w-1/2 px-5 py-3 mt-2 bg-white text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>
                  </div>
                  <br/>
                  <br/>
                  <div class="flex-1">
                    <div className="flex space-x-3">
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="nom de l'entreprise"
                        class="rounded-full block w-1/2 px-5 py-3 mt-2 bg-white text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                      <input
                        id="name"
                        name="from_name"
                        type="text"
                        placeholder="code postal"
                        class="rounded-full block w-1/2 bg-white px-5 py-3 mt-2 text-gray-300 placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                        required
                      />
                    </div>
                  </div>
                  <div class="w-full mt-6">
                    <label class="block mb-2 text-sm text-white font-semibold">
                      Message
                    </label>
                    <textarea
                      class="rounded-3xl block w-full h-32 px-5 bg-white py-3 mt-2 text-gray-300 placeholder-gray-400  border border-gray-200  md:h-48 dark:placeholder-gray-600 bg-black-900  dark:border-gray-700 focus:border-red-700 dark:focus:border-red-700 focus:ring-red-700 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                      required
                      name="message"
                    ></textarea>
                  </div>

                  <button class="rounded-full w-1/2 sm:ml-32 ml-20 px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#db6013]  hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-red-700 focus:ring-opacity-50">
                    Envoyez
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white  cursor-pointer"
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
