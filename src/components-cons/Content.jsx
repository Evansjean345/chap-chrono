import React from "react";

export default function Content() {
  return (
    <>
      {/* Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center   lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-12 sm:pt-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start leading-[50px] tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Le cotransportage ?
              <br />
              Vous allez l'appréciez
            </strong>
            <p className="text-[17px] mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at.
            </p>
          </div>
        </div>
        <div className="hero-content-two lg:pt-12  h-full md:w-1/2 w-full lg:p-16  lg:pl-24 p-0">
          <img
            src="/card-img/hero-cons.png"
            alt=""
            srcset=""
            className="h-[400px] w-[450px]"
          />
        </div>
      </div>
      {/*Advantage */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[550px] h-[850px] w-full lg:pt-0 p-[35px] ">
        <br className="supp" />
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          Le cotransportage c'est quoi ?
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Des trajets précis
              </strong>
              <div className="text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit. Nisi
              </div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Des livraisons sur choix
              </strong>
              <div className="text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit. Nisi
              </div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8">
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Des rencontres
              </strong>
              <div className="text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit. Nisi
              </div>
            </li>
          </ul>
        </div>
        <div className="mt-[200px] flex-col flex justify-center items-center sm:mt-32">
          <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg sm:pt-16 lg:pt-0  text-center">
            La livraison, évoluée
          </strong>
          <p className="text-center flex justify-center mt-12 sm:px-32">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro
            unde nemo rem dicta doloremque perferendis aliquid. Minus sequi
            obcaecati expedita? Illum ipsam iusto, rem veniam aut totam dolorem
            voluptas!
          </p>
        </div>
      </div>
      {/* Patner */}
      <div className="partner-container flex-col flex justify-center bg-white h-[223px] w-full p-[35px] ">
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg sm:pt-16  lg:pt-8  text-center">
          Partenaire de Chapchrono
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[528px] w-full ">
          <ul className="list-partner flex">
            <li>
              <img
                src="/logo/logo-one.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-logo.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-four.png"
                alt=""
                srcset=""
                className="w-[160px] h-[84px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-two.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
            <li>
              <img
                src="/logo/logo-three.png"
                alt=""
                srcset=""
                className="w-[160px] h-[64px] m-[25px]"
              />
            </li>
          </ul>
        </div>
      </div>
      {/** Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2] lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start leading-10  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Le bonheur à portée
              <br />
              de clics
            </strong>
            <p className="text-[17px] lg:my-8 mt-6 mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quibusdam molestiae laborum ratione
              tenetur magni magnam similique natus, et unde eum voluptates
              voluptatem dicta molestias ea qui laudantium laboriosam aperiam
              sunt!
            </p>
          </div>
        </div>
        <div className="order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-0 p-12">
          <img
            src="/heroThree.png"
            alt=""
            srcset=""
            className="h-[500px] w-[500px]"
          />
        </div>
      </div>
      <div className="w-full h-full flex-col flex items-center justify-center bg-[#EFEFF2] pb-16">
        <strong className="lg:text-[35px] text-3xl  leading-10 text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Qui sont nos cotransporteurs ?
        </strong>
        <p className="text-[17px] lg:my-8 mt-6 mb-8 text-center sm:px-32">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
          mollitia incidunt et laborum nemo neque odit consequuntur eius
          quisquam! Modi quasi temporibus provident necessitatibus iure neque
          quibusdam in? Fuga, at. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Quibusdam molestiae laborum ratione tenetur magni
          magnam similique natus, et unde eum voluptates voluptatem dicta
          molestias ea qui laudantium laboriosam aperiam sunt!
        </p>
      </div>
    </>
  );
}
