import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xucqn6i",
        "template_hmtgiad",
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
                Développez votre activité
                <br />
                avec le cotransportage
              </h1>

              <div class="mt-6 space-y-8 md:mt-8">
                <p class="flex flex-col items-start -mx-2 p-6">
                  Consultez nos offres et renseignez-vous sur nos services.
                  <br />
                  <br />
                  <p>
                    <strong className="font-bold">SOUPLESSE :</strong>pas de
                    limite de livraisons sur un
                    <br className="items-rounded" />
                    même créneau horaire
                  </p>
                  <br />
                  <p>
                    <strong className="font-bold">RAPIDITE :</strong>pas de
                    limite de livraisons sur un même
                  </p>
                  <br />
                  <p>
                    <strong className="font-bold">ECONOMIQUE :</strong>mise en
                    place de la livraison sans frais
                    <br className="items-rounded" />
                    structurel et humain
                  </p>
                  <br />
                  <p>
                    <strong className="font-bold">COMPETITIF :</strong>
                    acquisition de nouveaux clients et
                    <br className="items-rounded" />
                    augmentation de votre panier moyen
                  </p>
                </p>
              </div>
            </div>
            {/* Forùm */}
            <div class="mt-8 lg:w-1/2 lg:mx-6">
              <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-3xl shadow-2xl lg:max-w-xl shadow-gray-300/50 ">
                <form class="mt-6" ref={form} onSubmit={sendEmail}>
                  {/* profession */}
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
                      <option className="text-gray-600">particulier</option>
                      <option className="text-gray-600">professionnel</option>
                    </select>
                  </div>
                  {/* type de commerce et Secteur d'activité*/}
                  <div class="flex-1 mt-3">
                    <div className="flex space-x-3">
                      <select
                        name="type_commerce"
                        type="text"
                        placeholder="type de commerce *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      >
                        <option disabled>type de commerce*</option>
                        <option>Grande distribution</option>
                        <option>Commerce indépendant</option>
                      </select>
                      <select
                        name="secteur_activite"
                        type="text"
                        placeholder="Secteur d'acivité *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600  dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      >
                        <option disabled>Secteur d'activité *</option>
                        <option>Distribution Alimentaire</option>
                        <option>Maison, bricolage</option>
                        <option>Caviste, épicirie fine</option>
                        <option>Fleuriste</option>
                        <option>Sports & Loisirs</option>
                        <option>Marketplace</option>
                        <option>Fourniture de bureau, papèterie</option>
                        <option>Automobile</option>
                        <option>Culture</option>
                        <option>Mode, prêt à porter</option>
                        <option>Soins & Beauté</option>
                        <option>Autre</option>
                      </select>
                    </div>
                  </div>
                  {/** Nom et prénom */}
                  <div class="flex-1 mt-3">
                    <div className="flex space-x-3">
                      <input
                        name="name"
                        type="text"
                        placeholder="nom*"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                      <input
                        name="last_name"
                        type="text"
                        placeholder="prénom*"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                    </div>
                  </div>
                  {/* Numero de telephone et email */}
                  <div class="flex-1 mt-3">
                    <div className="flex space-x-3">
                      <input
                        name="email"
                        type="text"
                        placeholder="email *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                      <input
                        name="phone"
                        type="text"
                        placeholder="Numero de Télephone*"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                    </div>
                  </div>
                  {/* code postal et nom de l'entreprise */}
                  <div class="flex-1 mt-3">
                    <div className="flex space-x-3">
                      <input
                        name="entreprise"
                        type="text"
                        placeholder="Nom de l'entreprise *"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                        required
                      />
                      <input
                        name="postal"
                        type="text"
                        placeholder="Code postal (falcutatif)"
                        class="rounded-full bg-white text-gray-600 block w-1/2 px-5 py-2 mt-2  placeholder-gray-400  border border-gray-200  dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-gray-700 dark:focus:border-gray-700"
                      />
                    </div>
                  </div>
                  {/** message */}
                  <div class="w-full mt-0">
                    <label class="block mb-2 text-sm text-white font-semibold">
                      Message
                    </label>
                    <textarea
                      class="rounded-3xl block w-full h-28 px-5 bg-white py-3 mt-2 text-gray-600 placeholder-gray-400  border border-gray-200  md:h-28 dark:placeholder-gray-600 bg-black-900  dark:border-gray-700 "
                      placeholder="Dites nous en plus sur vous"
                      required
                      name="message"
                    ></textarea>
                  </div>

                  <button
                    htmlFor="my-modal-3"
                    className="rounded-full w-1/2 sm:ml-32 ml-20 sm:px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white  transition-colors duration-300 transform bg-[#db6013]  hover:bg-[#ba571a] "
                  >
                    Je prends contact
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
