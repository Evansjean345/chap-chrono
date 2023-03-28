import React from "react";

export default function Content() {
  return (
    <>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Qui sommes nous
            </strong>
            <p className="text-[17px] mt-12 mb-20">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at. Lorem ipsum, dolor sit amet
            </p>
            <label
              tabIndex={0}
              className="hover:bg-[#3b1169] bg-[#4D148C] rounded-full  p-3 px-10 text-white cursor-pointer"
            >
              Découvrir la vidéo
            </label>
          </div>
        </div>
        <div className="order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-24 p-12">
          <img
            src="/img-two/img-content-two.png"
            alt=""
            srcset=""
            className="h-[400px]"
          />
        </div>
      </div>
      {/* Second Part */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2] lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40 lg:mt-10">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Un service favorable à toute une activité
            </strong>
            <p className="text-[17px] mt-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
            </p>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-36 lg:pt-12 lg:pl-0 p-12">
          <img src="/img-two/content-3.png" alt="" srcset="" className="h-[400px] w-[500px]" />
        </div>
      </div>
      {/* Patner Part */}
      <div className="flex flex-col lg:justify-center bg-white lg:h-[550px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          Les avantages de notre solution
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/patner-1.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Flexibilité
              </strong>
              <div className="text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit. Nisi
              </div>
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/logo-two/patner-2.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Flexibilité
              </strong>
              <div className="text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit. Nisi
              </div>
            </li>
            {/****** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/patner-3.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Flexibilité
              </strong>
              <div className="text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit. Nisi
              </div>
            </li>
            {/**** */}
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo-two/partner-4.png"
                alt=""
                srcset=""
                className="w-[68px] h-[68px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
              <strong className="text-center font-[30px] mb-2 text-[#4D148C]">
                Flexibilité
              </strong>
              <div className="text-center">
                Lorem ipsum dolor sit amet
                <br />
                consectetur adipisicing elit. Nisi
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
