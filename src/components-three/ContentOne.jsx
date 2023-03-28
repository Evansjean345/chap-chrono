import React from "react";

export default function ContentOne() {
  return (
    <>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Qui sommes nous ?
            </strong>
            <p className="text-[17px] mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at. Lorem ipsum, dolor sit amet
            </p>
            <p className="text-[17px] mt-4 mb-8">
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
      {/* Second part  */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2] lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Livrez pendant les jours fériés
            </strong>
            <p className="text-[17px] mt-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at.
            </p>
            <br />
            <strong className="text-[17px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt
            </strong>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-36 lg:pt-0 lg:pl-12 p-12">
          <img src="/img-two/hero-3.png" alt="" srcset="" className="h-[500px]" />
        </div>
      </div>
    </>
  );
}
