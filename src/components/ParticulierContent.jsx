import React from "react";

export default function ParticulierContent() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full  w-full lg:pl-20 pt-10 lg:pt-16">
          <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
            <strong className="md:text-[54px] text-[36px] text-center  text-[#21264D] md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Pour commerncer ....
            </strong>
            <div className="mt-12 flex flex-col  justify-center text-center text-[#21264D] text-[18px]  w-full sm:px-96 px-12">
              <form>
                {/* Nom et prénoms */}
                <strong className="md:text-[18px] text-[16px] text-center  text-[#21264D] md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
                  Nom et prénoms
                </strong>
                <input
                  name="name"
                  type="text"
                  placeholder="Entrez votre nom*"
                  class="rounded-full bg-white text-gray-600 block w-full px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                  required
                />
                {/* Adresse email */}
                <strong className="md:text-[18px] text-[16px] text-center  text-[#21264D] md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
                  Adresse mail
                </strong>
                <input
                  name="name"
                  type="text"
                  placeholder="Entrez votre nom*"
                  class="rounded-full bg-white text-gray-600 block w-full px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                  required
                />
                {/* Date de naissance */}
                <strong className="md:text-[18px] text-[16px] text-center  text-[#21264D] md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
                  Date de naissance
                </strong>
                <input
                  name="name"
                  type="date"
                  class="rounded-full bg-white sm:ml-0 ml-12 text-gray-600 block w-full px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200"
                  required
                />
                {/* Pays de livraison */}
                <strong className="md:text-[18px] text-[16px] text-center  text-[#21264D] md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
                  Dans quelle ville souhaitez vous livrer ?
                </strong>
                <div class="flex-1">
                  <select
                    name="profession"
                    type="text"
                    placeholder="vous êtes un ...*"
                    class="rounded-full block w-full px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                    required
                  >
                    <option className="text-gray-600" disabled>
                      vous êtes un ...*
                    </option>
                    <option className="text-gray-600">Abidjan</option>
                    <option className="text-gray-600">Man</option>
                    <option className="text-gray-600">Divo</option>
                    <option className="text-gray-600">Issia</option>
                    <option className="text-gray-600">Bouaké</option>
                    <option className="text-gray-600">Man</option>
                    <option className="text-gray-600">Khorogo</option>
                    <option className="text-gray-600">Bouaké</option>
                    <option className="text-gray-600">Sans-Pédro</option>
                    <option className="text-gray-600">Yamoussoukro</option>
                    <option className="text-gray-600">Anyama</option>
                    <option className="text-gray-600">Odiené</option>
                    <option className="text-gray-600">Daloa</option>
                    <option className="text-gray-600">Abengouro</option>
                    <option className="text-gray-600">Grand-Bassam</option>
                    <option className="text-gray-600">Gagnoa</option>
                    <option className="text-gray-600">Duékoué</option>
                    <option className="text-gray-600">Soubré</option>
                    <option className="text-gray-600">Oumé</option>
                    <option className="text-gray-600">Bouaflé</option>
                    <option className="text-gray-600">Gluiglo</option>
                    <option className="text-gray-600">Bingerville</option>
                    <option className="text-gray-600">Agboville</option>
                    <option className="text-gray-600">Ferkessédougou</option>
                    <option className="text-gray-600">Daoukro</option>
                    <option className="text-gray-600">Dabou</option>
                    <option className="text-gray-600">Adzopé</option>
                    <option className="text-gray-600">Aboisso</option>
                    <option className="text-gray-600">Bonoua</option>
                    <option className="text-gray-600">Tingréla</option>
                    <option className="text-gray-600">Sassandra</option>
                    <option className="text-gray-600">Assaoufé</option>
                    <option className="text-gray-600">Aboisso</option>
                  </select>
                </div>
                {/* Transport */}
                <strong className="md:text-[18px] text-[16px] text-center  text-[#21264D] md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
                  Quel moyen de transport souhaitez vous utiliser pour livrer ?
                </strong>
                <div class="flex-1">
                  <select
                    name="profession"
                    type="text"
                    placeholder="vous êtes un ...*"
                    class="rounded-full block w-full px-5 py-2 mt-2  bg-white text-gray-600 placeholder-gray-600  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                    required
                  >
                    <option className="text-gray-600" disabled>
                        Votre moyen de transport
                    </option>
                    <option className="text-gray-600">Léger(vélo, scooter, à pied)</option>
                    <option className="text-gray-600">Standard(citadine, vélo cargo)</option>
                    <option className="text-gray-600">Familial(berline, SUV, break)</option>
                    <option className="text-gray-600">Utilitaire(Camionnette, van)</option>
                  </select>
                  <button
                    htmlFor="my-modal-3"
                    className="rounded-full w-1/2  sm:px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform hover:bg-[#37145d] bg-[#4D148C] "
                  >
                    Soumettre
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
