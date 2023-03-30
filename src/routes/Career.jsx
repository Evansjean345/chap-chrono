import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import HeroCa from "../components-story/HeroCa";
import bg from "../bg-ca.png";

export default function Career() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${bg})`,
        }}
        className="bg-contain"
      >
        <NavLink>
          <nav className="flex w-full h-[150px] pt-8 bg-white" id="navLink">
            <div className="w-[12%] ml-20">
              <Link to="/">
                <img src="/logo.png" alt="" srcset="" />
              </Link>
            </div>
            <div className="w-[88%] font-medium">
              <ul className="flex justify-between mt-12 ">
                <li className="hover:bg-[#22282a1d] text-[#4D148C] rounded-md p-1 ml-14 font-extrabold">
                  <Link to="/">Site web</Link>
                </li>
                <li className="mr-[78px]">
                  <div className="dropdown dropdown-left dropdown-hover">
                    <label
                      tabIndex={0}
                      className="hover:bg-[#37145d] bg-[#4D148C] rounded-full p-3 px-10 text-white"
                    >
                      Voir nos offres
                    </label>
                    <div
                      tabIndex={0}
                      className="dropdown-content   shadow bg-base-100 rounded-box w-[600px] flex"
                    >
                      <div className="w-1/2 bg-[#4D148C] text-white rounded-md p-8">
                        <h1>Bienvenue parmis nous</h1>
                        <br />
                        <p>
                          {" "}
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur provident hic quam, assumenda nihil
                          nulla eum
                        </p>
                        <br />
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Consectetur provident hic quam, assumenda nihil
                          nulla eum
                        </p>
                      </div>
                      <div className="w-1/2 p-8 ">
                        <div className="rounded-lg w-full h-[70px] flex border-2 bg-slate-50  hover:border-[#4D148C] mb-6">
                          <div className=" w-[20%] p-2">
                            <img src="/user.png" alt="" className="" />
                          </div>
                          <div className="w-[80%] p-2 font-light">
                            <Link to="/particulier">
                              <h6 className="text-sm font-semibold text-[#4D148C]">
                                je suis un particulier ,
                              </h6>
                              <p className="text-xs">
                                intéressé pour devenir cotransporteur.
                              </p>
                            </Link>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg w-full h-[70px] flex border-2 bg-slate-50  hover:border-[#4D148C] mb-6">
                            <div className=" w-[20%] p-2">
                              <img src="/boutique.png" alt="" className="" />
                            </div>
                            <div className="w-[80%] p-2 font-light">
                              <Link to="/commercant">
                                <h6 className="text-sm font-semibold text-[#4D148C]">
                                  je suis un commerçant ,
                                </h6>
                                <p className="text-xs">
                                  intéressé pour devenir commerçant partenaire.
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="rounded-lg w-full h-[70px] flex border-2 bg-slate-50  hover:border-[#4D148C]">
                            <div className=" w-[20%] p-2">
                              <img src="/coeur.png" alt="" className="" />
                            </div>
                            <div className="w-[80%] p-2 font-light">
                              <Link to="/other">
                                <h6 className="text-sm font-semibold text-[#4D148C]">
                                  ni l'un ni l'autre ,
                                </h6>
                                <p className="text-xs">
                                  je souhaite prendre contact avec l'equipe.
                                </p>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </NavLink>
        {/*Nav-mobile */}
        <NavLink className="nav-res justify-between w-full flex z-30 pr-5 md:mt-10 bg-white pt-5">
          <div className="md:w-[20%] w-[30%]">
            <img src="/logo.png" alt="" />
          </div>
          <div className="w-[10%] flex justify-end md:p-5">
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <img src="/menu.svg" alt="" srcset="" className="text-white" />
            </button>
          </div>
          {/* Nav-res-items */}
        </NavLink>
        <div ref={navRef} className="hidden relative bg-white z-50 h-[100vh]">
          <ul>
            <li className="md:px-16 px-4  pt-12">
              <div className="border-t  py-4 px-12 border-gray-200">
                <div className="flex justify-between items-center cursor-pointer">
                  <p className="font-extrabold leading-4 text-[#4D148C]">
                    <Link to="/">Site web</Link>
                  </p>
                </div>
              </div>
            </li>
            <li className="md:px-16 px-4 mt-6">
              <div className="py-4  px-12  border-gray-200">
                <div
                  onClick={() => setShow2(!show2)}
                  className="flex justify-between items-center cursor-pointer "
                >
                  <button
                    onClick={() => setShow2(!show2)}
                    className="hover:bg-[#37145d] bg-[#4D148C] rounded-full p-3 px-10  text-white"
                  >
                    Voir nos offres
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                      aria-label="show or hide"
                    >
                      <svg
                        className={
                          "transform " + (show2 ? "rotate-180" : "rotate-0")
                        }
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 1L5 5L1 1"
                          stroke="#ffff"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </button>
                </div>
                {/* //////////////////////////////////////*/}
                <div
                  className={
                    "pt-4 text-base leading-normal w-full bg-white text-gray-600 " +
                    (show2 ? "block" : "hidden")
                  }
                  id="sect"
                >
                  <div className="w-full bg-white h-[300px] z-50">
                    <div className="rounded-lg w-full h-[70px] flex border-2 bg-slate-50  hover:border-[#4D148C] mb-6">
                      <div className=" w-[20%] p-2">
                        <img src="/user.png" alt="" className="" />
                      </div>
                      <div className="w-[80%] p-2 font-light">
                        <Link to="/particulier">
                          <h6 className="text-sm font-semibold text-[#4D148C]">
                            je suis un particulier ,
                          </h6>
                          <p className="text-xs">
                            intéressé pour devenir cotransporteur.
                          </p>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="rounded-lg w-full h-[70px] flex border-2 bg-slate-50  hover:border-[#4D148C] mb-6">
                        <div className=" w-[20%] p-2">
                          <img src="/boutique.png" alt="" className="" />
                        </div>
                        <div className="w-[80%] p-2 font-light">
                          <Link to="/commercant">
                            <h6 className="text-sm font-semibold text-[#4D148C]">
                              je suis un commerçant ,
                            </h6>
                            <p className="text-xs">
                              intéressé pour devenir commerçant partenaire.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="rounded-lg w-full h-[70px] flex border-2 bg-slate-50  hover:border-[#4D148C]">
                        <div className=" w-[20%] p-2">
                          <img src="/coeur.png" alt="" className="" />
                        </div>
                        <div className="w-[80%] p-2 font-light">
                          <Link to="/other">
                            <h6 className="text-sm font-semibold text-[#4D148C]">
                              ni l'un ni l'autre ,
                            </h6>
                            <p className="text-xs">
                              je souhaite prendre contact avec l'equipe.
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <HeroCa />
      </section>
    </>
  );
}
