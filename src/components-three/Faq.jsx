import React, { useState } from "react";

export default function Faq() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [showimg, setShowimg] = useState(false);
  const [showimg2, setShowimg2] = useState(false);
  return (
    <>
      <div className="w-full flex justify-center">
        <strong className="lg:text-[35px] text-3xl text-center p-12 tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Rien de plus simple pour se lancer
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
                  <strong className="text-start md:mt-3">
                    prenez contact avoc notre equipe
                  </strong>
                  {show ? (
                    <>
                      <img
                        src="/logo/moins.png"
                        alt=""
                        srcset=""
                        className="h-[85px] w-[85px] md:ml-[260px] cursor-pointer"
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
                        className="h-[65px] w-[65px] md:ml-[271px]"
                        onClick={() => setShow(!show)}
                      />
                    </>
                  )}
                </div>
                {show ? (
                  <>
                    <p className="p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam illo fugiat aperiam. Maxime eligendi aut veniam
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
                  <strong className="text-start md:mt-3">
                    prenez contact avoc notre equipe
                  </strong>
                  {show1 ? (
                    <>
                      <img
                        src="/logo/moins.png"
                        alt=""
                        srcset=""
                        className="h-[85px] w-[85px] md:ml-[260px] cursor-pointer"
                        onClick={() => {
                          setShow1(!show1);
                          setShowimg(!showimg);
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
                        className="h-[65px] w-[65px] md:ml-[260px]"
                        onClick={() => {
                          setShow1(!show1);
                          setShowimg(!showimg);
                        }}
                      />
                    </>
                  )}
                </div>
                {show1 ? (
                  <>
                    <p className="p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam illo fugiat aperiam. Maxime eligendi aut veniam
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
                  <strong className="text-start md:mt-3">
                    prenez contact avoc notre equipe
                  </strong>
                  {show2 ? (
                    <>
                      <img
                        src="/logo/moins.png"
                        alt=""
                        srcset=""
                        className="h-[85px] w-[85px] md:ml-[260px] cursor-pointer"
                        onClick={() => {
                          setShow2(!show2);
                          setShowimg2(!showimg2);
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
                        className="h-[65px] w-[65px] md:ml-[260px]"
                        onClick={() => {
                          setShow2(!show2);
                          setShowimg2(!showimg2);
                        }}
                      />
                    </>
                  )}
                </div>
                {show2 ? (
                  <>
                    <p className="p-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Magnam illo fugiat aperiam. Maxime eligendi aut veniam
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
          {show1 & showimg ? (
            <>
              <img
                src="/logo/illu-2.png"
                alt=""
                srcset=""
                className={show2 & showimg2 ? `hidden` : `h-[400px] w-[600px]`}
              />
            </>
          ) : (
            <>
              {" "}
              <img
                src="/logo/illu-1.png"
                alt=""
                srcset=""
                className={
                  show2 & showimg2 ? `hidden` : `h-[400px] w-[600px]`
                }
              />
            </>
          )}
          {show2 & showimg2 ? (
            <>
              <img
                src="/logo/illu-3.png"
                alt=""
                srcset=""
                className="h-[400px] w-[600px]"
              />
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>
    </>
  );
}
