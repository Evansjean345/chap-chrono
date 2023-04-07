import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Partner from "../components/Partner";

export default function ContentSolu() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0 pb-0  sm:h-[200px]">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[25px] text-[#db6013] text-3xl font-thin text-start  tracking-[0.27px]  drop-shadow-lg">
              OFFRE 1
            </strong>
            <br />
            <br />
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Une interface accessible pour toutes les entreprises et les
              équipes.
            </strong>
            <p className="text-[17px] lg:my-16 mt-3 text-black">
              Vous n'avez pas besoin d'être un expert informatique ou un
              professionnel de la logistique pour livrer vos clients. Nous avons
              créé un outil simple pour vous permettre de passer moins de temps
              derrière un écran et plus de temps avec vos clients. Tout ce dont
              vous avez besoin est un e-mail et un mot de passe pour commencer
              la livraison à travers l'interface Chapchrono :
            </p>
          </div>
        </div>
        <div className="order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12  pt-0"></div>
      </div>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10 sm:mt-16">
            <ul className="sm:mt-24 text-black">
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <div className="flex flex-col">
                    <strong>Créez des livraisons</strong>
                    <p>
                      Vous pouvez vous connecter à partir de n'importe quel
                      navigateur et simplement entrer les informations des
                      clients qui veulent être livrés à la maison.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <div className="flex flex-col">
                    <strong>Gardez un oeil sur vos livraisons</strong>
                    <p>
                      Suivez vos livraisons en temps réel, et si vous avez des
                      questions, contactez notre équipe de soutien à la
                      clientèle à Nantes, disponible du lundi au samedi.
                    </p>
                  </div>
                </div>
              </li>
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <div className="flex flex-col">
                    <strong>Et si vous aimez les chiffres</strong>
                    <p>
                      Visualisez vos statistiques sur la période de votre choix
                      (grande taille moyenne du basket, zone de capture, etc.)
                      et exporter vos données de livraison.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <Link to="/cotransporteur">
              <label
                tabIndex={0}
                className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full mt-12 p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
              >
                Je veux une demo
              </label>
            </Link>
          </div>
        </div>
        <div className="order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12">
          <img
            src="/img-two/hero-sol-2.png"
            alt=""
            srcset=""
            className="sm:h-[500px] w-[500px]"
          />
        </div>
      </div>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0 pb-0  sm:h-[200px]">
        <div className="order-1 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[25px] text-[#db6013] text-3xl font-thin text-start  tracking-[0.27px]  drop-shadow-lg">
              OFFRE 2
            </strong>
            <br />
            <br />
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Faites encore plus facile : automatisez vos livraisons avec l’API
              Chapchrono
            </strong>
            <br />
            <br />
            <strong className="lg:text-[15px] text-3xl text-start  tracking-[0.27px] text-[#db6013] drop-shadow-lg">
              Moins d'inquiétude avec la technologie
            </strong>
            <p className="text-[17px] lg:my-16 mt-3 text-black">
              Vous gérez de grands volumes de livraisons ou que vous avez
              plusieurs points de vente intéressés par la livraison à domicile?
              Passez de l'interface Chapchrono à l'API avec quelques clics.
              l'API permet à n'importe quel développeur ou équipe de techniciens
              d'établir des connexions simples, fiables et personnalisées, et
              ainsi éviter:
              <br />
              <br />- Les erreurs manuelles,
              <br />
              - Les tâches répétitives,
              <br />- Les lenteurs d’exécution...
            </p>
          </div>
        </div>
        <div className="order-2 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12  pt-0"></div>
      </div>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="hero-content-one  order-1 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <br className="items-rounded" />
            <strong className="lg:text-[15px] text-3xl text-start  tracking-[0.27px] text-[#db6013] drop-shadow-lg">
              Passez plus de temps avec vos clients
            </strong>
            <p className="text-[17px] lg:my-16 mt-3 text-black">
              En synchronisant vos outils internes à l'API de Chapchrono, vous
              n'avez plus à rien faire : les demandes de livraison sont
              automatiquement créées, transférées, annulées ou retardées en
              fonction des actions de vos clients.
            </p>
            <Link to="/cotransporteur">
              <label
                tabIndex={0}
                className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full mt-12 p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
              >
                Je veux une demo
              </label>
            </Link>
          </div>
        </div>
        <div className="hero-content-two  order-2 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12">
          <img
            src="/img-two/hero-sol-3.png"
            alt=""
            srcset=""
            className="sm:h-[500px] w-[500px]"
          />
        </div>
      </div>
      {/* Patner */}
      <Partner/>
      {/**FAQ */}
      <div className="w-full flex justify-center">
        <strong className="lg:text-[35px] text-3xl text-center p-12 tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          4 petites étapes, pour se conneter à l'API
        </strong>
      </div>
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="hero-content-one order-2 md:mt-24 h-full md:w-1/2 w-full lg:pl-2">
          <div className="lg:p-4 p-10">
            <ul className="mt-6">
              <li className="mt-3 border-b-2">
                <div className="flex">
                  <img
                    src="/logo/1.png"
                    alt=""
                    srcset=""
                    className="h-[55px] w-[55px]"
                  />
                  <strong className="text-start md:mt-3 text-[#21264D]">
                    ACCÉDEZ À NOTRE DOCUMENTATION
                  </strong>
                  {show ? (
                    <>
                      <img
                        src="/logo/moins.png"
                        alt=""
                        srcset=""
                        className="h-[85px] w-[85px] sm:ml-[260px] cursor-pointer"
                        onClick={() => setShow(!show)}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        src="/logo/plus.png"
                        alt=""
                        srcset=""
                        className="h-[65px] w-[65px] sm:ml-[271px]"
                        onClick={() => setShow(!show)}
                      />
                    </>
                  )}
                </div>
                {show ? (
                  <>
                    <p className="p-4 text-black">
                      Avec un seul clic, vous pouvez accéder à notre
                      documentation de référence en ligne, à tout moment.
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li className="mt-3 border-b-2">
                <div className="flex">
                  <img
                    src="/logo/2.png"
                    alt=""
                    srcset=""
                    className="h-[65px] w-[65px]"
                  />
                  <strong className="text-start md:mt-3 text-[#21264D]">
                    ÉCHANGEZ AVEC NOS ÉQUIPES
                  </strong>
                  {show1 ? (
                    <>
                      <img
                        src="/logo/moins.png"
                        alt=""
                        srcset=""
                        className="h-[85px] w-[85px] sm:ml-[290px] cursor-pointer"
                        onClick={() => {
                          setShow1(!show1);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        src="/logo/plus.png"
                        alt=""
                        srcset=""
                        className="h-[65px] w-[65px] sm:ml-[290px]"
                        onClick={() => {
                          setShow1(!show1);
                        }}
                      />
                    </>
                  )}
                </div>
                {show1 ? (
                  <>
                    <p className="p-4 text-black">
                      Une personne de notre équipe se chargera de vous former
                      sur l’interface de gestion des livraisons (environ 15-30
                      min).
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li className="mt-3 border-b-2">
                <div className="flex">
                  <img
                    src="/logo/3.png"
                    alt=""
                    srcset=""
                    className="h-[65px] w-[65px]"
                  />
                  <strong className="text-start md:mt-3 text-[#21264D]">
                    EFFECTUEZ LES TESTS
                  </strong>
                  {show2 ? (
                    <>
                      <img
                        src="/logo/moins.png"
                        alt=""
                        srcset=""
                        className="h-[85px] w-[85px] sm:ml-[360px] cursor-pointer ml-[30px]"
                        onClick={() => {
                          setShow2(!show2);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        src="/logo/plus.png"
                        alt=""
                        srcset=""
                        className="h-[65px] w-[65px] sm:ml-[360px] ml-[30px]"
                        onClick={() => {
                          setShow2(!show2);
                        }}
                      />
                    </>
                  )}
                </div>
                {show2 ? (
                  <>
                    <p className="p-4 text-black">
                      C'est l'étape la plus importante ! Nous fournissons un
                      environnement de test dédié pour vérifier la bonne
                      transmission des échanges entre nos différentes solutions.
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </li>
              <li className="mt-3 border-b-2">
                <div className="flex">
                  <img
                    src="/logo/3.png"
                    alt=""
                    srcset=""
                    className="h-[65px] w-[65px]"
                  />
                  <strong className="text-start md:mt-3 text-[#21264D]">
                    FAITES LA MISE EN LIGNE
                  </strong>
                  {show3 ? (
                    <>
                      <img
                        src="/logo/moins.png"
                        alt=""
                        srcset=""
                        className="h-[85px] w-[85px] sm:ml-[360px] cursor-pointer"
                        onClick={() => {
                          setShow3(!show3);
                        }}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        src="/logo/plus.png"
                        alt=""
                        srcset=""
                        className="h-[65px] w-[65px] sm:ml-[360px]"
                        onClick={() => {
                          setShow3(!show3);
                        }}
                      />
                    </>
                  )}
                </div>
                {show3 ? (
                  <>
                    <p className="p-4 text-black">
                      Une fois que vous avez validé l’échange d’informations,
                      tout ce qui reste à faire est de mettre l’intégration en
                      ligne afin que vous puissiez commencer à livrer vos
                      clients Chapchrono.
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-content-two order-1  h-full md:w-1/2 w-full lg:p-32 lg:pt-12 lg:pl-12 p-12">
          <img
            src="/img-two/hero-sol4.png"
            alt=""
            srcset=""
            className="sm:h-[400px] w-[600px]"
          />
        </div>
      </div>
    </>
  );
}
