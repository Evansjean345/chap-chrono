import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function FormPost() {
  const [view, setView] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xucqn6i",
        "template_1logehr",
        form.current,
        "0mpN-Bf8gsnpHEveu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("votre demande a bien été prise en compte ");
    e.target.reset();
  };

  return (
    <>
      <section class="bg-[#4D148C] text-black">
        <div class="container px-6 py-12 mx-auto">
          <div class="lg:flex lg:items-center lg:-mx-6">
            <div class="lg:w-1/2 lg:mx-6 lg:mb-80 text-white">
              <h1 class="text-3xl font-semibold  capitalizetext-white lg:text-5xl">
                Devenir un livreur à
                <br />
                Chap chrono
              </h1>

              <div class="mt-6 space-y-8 md:mt-8">
                <p class="flex flex-col items-start -mx-2 p-6">
                  Consultez nos offres et renseignez-vous sur nos services.
                  <br />
                  <br />
                  <p>
                    <strong className="font-bold">OFFRE 1:</strong>
                    entre 80 000f et 100 000f/mois du lundi au samedi
                    <br className="items-rounded" />+ commissions allant jusqu'à
                    50000fcfa.
                  </p>
                  <br />
                  <p>
                    <strong className="font-bold">OFFRE 2:</strong>
                    5000f par jour si vous voulez travailler uniquement les
                    dimanches
                    <br className="items-rounded" />
                    soit 4 dimanches dans le mois =25 000f ou 5000f par dimanche
                    payé cash
                  </p>
                  <br />
                  <p>une moto pour les livraisons</p>
                </p>
              </div>
            </div>
            {/* Forùm */}
            <div class="mt-8 lg:w-1/2 lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-3xl shadow-2xl lg:max-w-xl shadow-gray-300/50 ">
                <form class="mt-6" ref={form} onSubmit={sendEmail}>
                  {/** Full name et email */}
                  <div class="flex-1 mt-3">
                    <div className="flex sm:space-x-40 space-x-12">
                      <label
                        class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                        for="full_name"
                      >
                        Nom et prénoms
                      </label>
                      <label
                        class="block font-semibold mb-2 ml-2 text-sm text-gray-600 "
                        for="email"
                      >
                        Adresse e-mail
                      </label>
                    </div>
                    <div className="flex space-x-3">
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        placeholder="nom complet *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="adresse mail *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                    </div>
                  </div>
                  {/* Contact et âge */}
                  <div class="flex-1 mt-3">
                    <div className="flex sm:space-x-56 space-x-28">
                      <label
                        class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                        for="contact"
                      >
                        Contact
                      </label>
                      <label
                        class="block font-semibold mb-2 ml-2 text-sm text-gray-600 "
                        for="age"
                      >
                        Âge
                      </label>
                    </div>
                    <div className="flex space-x-3">
                      <input
                        id="contact"
                        name="contact"
                        type="text"
                        placeholder="contact *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                      <input
                        id="age"
                        name="age"
                        type="text"
                        placeholder="âge *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                    </div>
                  </div>
                  {/* Lieu de residence et permis */}
                  <div class="flex-1 mt-3">
                    <div className="flex sm:space-x-40 space-x-24">
                      <label
                        class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                        for="residence"
                      >
                        Lieu de résidence
                      </label>
                      <label
                        class="block font-semibold mb-2 ml-2 text-sm text-gray-600 "
                        for="permis"
                      >
                        Permis de conduire
                      </label>
                    </div>
                    <div className="flex space-x-3">
                      <input
                        id="residence"
                        name="residence"
                        type="text"
                        placeholder="entrez le lieu*"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                      <select
                        name="permis"
                        type="text"
                        class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      >
                        <option className="text-gray-600" disabled>
                          Permis A *
                        </option>
                        <option className="text-gray-600">valide</option>
                        <option className="text-gray-600">non valide</option>
                      </select>
                    </div>
                  </div>
                  {/** Conduite et Casier */}
                  <div class="flex-1 mt-3">
                    <div className="flex sm:space-x-32 space-x-4">
                      <label
                        class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                        for="conduite"
                      >
                        Savez vous conduire
                        <br className="items-rounded" />
                        une moto à embrayage
                      </label>
                      <label
                        class="block font-semibold mb-2 ml-2 text-sm text-gray-600 "
                        for="casier"
                      >
                        Pouvez vous fournir
                        <br className="items-rounded" />
                        un casier judiciaire
                      </label>
                    </div>
                    <div className="flex space-x-3">
                      <select
                        name="conduite"
                        type="text"
                        class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      >
                        <option className="text-gray-600">oui</option>
                        <option className="text-gray-600">non</option>
                      </select>
                      <select
                        name="casier"
                        type="text"
                        class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      >
                        <option className="text-gray-600">oui</option>
                        <option className="text-gray-600">non</option>
                      </select>
                    </div>
                  </div>
                  {/** telephone et temps */}
                  <div class="flex-1 mt-3">
                    <div className="flex sm:space-x-28 space-x-2">
                      <label
                        class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                        for="tel"
                      >
                        Avez vous un smartphone
                        <br />
                        pouvant supporter
                        <br />
                        l'application Chapchrono
                      </label>
                      <label
                        class="block font-semibold mb-2 sm:ml-2 text-sm text-gray-600 "
                        for="time"
                      >
                        Depuis combien de
                        <br />
                        temps êtes
                        <br />
                        vous livreur
                      </label>
                    </div>
                    <div className="flex space-x-3">
                      <select
                        name="tel"
                        type="text"
                        class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      >
                        <option className="text-gray-600">oui</option>
                        <option className="text-gray-600">non</option>
                      </select>
                      <input
                        id="time"
                        name="time"
                        type="text"
                        placeholder="exemple 2 ans *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                    </div>
                  </div>
                  <button
                    onClick={()=>setView(!view)}
                   className={view ? "hidden" : "rounded-full w-1/2 sm:ml-32 ml-20 sm:px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#db6013]  hover:bg-[#ba571a] "}>
                    suivant
                  </button>
                  {/** Second Part Formulaire */}
                  {view ? (
                    <>
                      {/** Travail et employeur */}
                      <div class="flex-1 mt-3">
                        <div className="flex sm:space-x-40 space-x-24">
                          <label
                            class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                            for="travail"
                          >
                            Avez déjà travaillé &nbsp;
                            <br className="items-rounded" />
                            avec
                          </label>
                          <label
                            class="block font-semibold mb-2 sm:ml-2 text-sm text-gray-600 "
                            for="employeur"
                          >
                            Pourquoi avez quittez &nbsp;
                            <br className="items-rounded" />
                            votre ancien employeur
                          </label>
                        </div>
                        <div className="flex space-x-3">
                          <select
                            name="travail"
                            type="text"
                            class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          >
                            <option className="text-gray-600">jumia</option>
                            <option className="text-gray-600">glovo</option>
                            <option className="text-gray-600">yango</option>
                            <option className="text-gray-600">autres</option>
                            <option className="text-gray-600">
                              particulier
                            </option>
                          </select>
                          <input
                            id="employeur"
                            name="employeur"
                            type="text"
                            placeholder="entrez votre reponse *"
                            class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          />
                        </div>
                      </div>
                      {/* Livraison et Etude */}
                      <div class="flex-1 mt-3">
                        <div className="flex sm:space-x-24 space-x-10">
                          <label
                            class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                            for="livraison"
                          >
                            Pouvez vous realiser plus de
                            <br />
                            20 livraisons par jour
                          </label>
                          <label
                            class="block font-semibold mb-2 ml-2 text-sm text-gray-600 "
                            for="etude"
                          >
                            Quel est votre &nbsp;
                            <br className="items-rounded" />
                            niveau d'etude
                          </label>
                        </div>
                        <div className="flex space-x-3">
                          <select
                            name="livraison"
                            type="text"
                            class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          >
                            <option className="text-gray-600">oui</option>
                            <option className="text-gray-600">non</option>
                            <option className="text-gray-600">peut-être</option>
                          </select>
                          <select
                            name="etude"
                            type="text"
                            class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          >
                            <option className="text-gray-600">Primaire</option>
                            <option className="text-gray-600">
                              Secondaire
                            </option>
                            <option className="text-gray-600">Bac</option>
                            <option className="text-gray-600">Bac +</option>
                          </select>
                        </div>
                      </div>
                      {/* Morale et Livraison Number */}
                      <div class="flex-1 mt-3">
                        <div className="flex sm:space-x-16 space-x-8">
                          <label
                            class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                            for="morale"
                          >
                            Si vous êtes retenu, pourriez-vous indiquer un
                            contact qui pourrait être garant de
                            <br className="items-rounded" />
                            votre bonne moralité ?
                          </label>
                          <label
                            class="block font-semibold mb-2 sm:ml-2 text-sm text-gray-600 "
                            for="livraison_number"
                          >
                            Quel est le nombre de livraisons records que vous
                            avez effectué en une journée
                            <br className="items-rounded" />
                            de travail ?
                          </label>
                        </div>
                        <div className="flex space-x-3">
                          <select
                            name="morale"
                            type="text"
                            class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          >
                            <option className="text-gray-600">oui</option>
                            <option className="text-gray-600">non</option>
                          </select>
                          <input
                            id="livraison_number"
                            name="livraison_number"
                            type="text"
                            placeholder="reponse *"
                            class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          />
                        </div>
                      </div>
                      {/* Objectif et Month */}
                      <div class="flex-1 mt-3">
                        <div className="flex sm:space-x-14 space-x-8">
                          <label
                            class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                            for="objectif"
                          >
                            Avez-vous des clients de 5 et 10 colis sous la main
                            que vous pouvez activer
                            <br className="items-rounded" />
                            pour vous aider à atteindre tes objectifs ?
                          </label>
                          <label
                            class="block font-semibold mb-2 sm:ml-2 text-sm text-gray-600 "
                            for="month"
                          >
                            Je souhaite travailler seulement chaque dimanche
                            pour 5000f/jour
                            <br className="items-rounded" />
                            ou 25000 CFA le mois pour 4 dimanches
                          </label>
                        </div>
                        <div className="flex space-x-3">
                          <select
                            name="objectif"
                            type="text"
                            class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          >
                            <option className="text-gray-600">
                              oui j'en ai
                            </option>
                            <option className="text-gray-600">
                              non j'en ai même pas
                            </option>
                          </select>
                          <select
                            name="month"
                            type="text"
                            class="rounded-full block w-1/2 px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          >
                            <option className="text-gray-600">
                              oui ça m'arrange
                            </option>
                            <option className="text-gray-600">
                              non ça m'arrange pas
                            </option>
                          </select>
                        </div>
                      </div>
                      {/* Disponibilité */}
                      <div class="flex-1 mt-3">
                        <div className="flex sm:space-x-40 space-x-12">
                          <label
                            class="block font-semibold mb-2 ml-3 text-sm text-gray-600 "
                            for="disponible"
                          >
                            Quel est votre disponibilité
                          </label>
                        </div>
                        <div className="flex space-x-3">
                          <input
                            id="disponible"
                            name="disponible"
                            type="text"
                            placeholder="reponse *"
                            class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                            required
                          />
                        </div>
                      </div>
                      <button className="rounded-full w-1/2 sm:ml-32 ml-20 sm:px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#db6013]  hover:bg-[#ba571a] ">
                        Je postule
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
