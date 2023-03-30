import React from "react";

export default function HeroCa() {
  return (
    <>
      <div className="w-full h-[500px] flex-col md:flex-row flex flex-wrap items-center justify-center bg-none lg:mt-10  lg:p-12">
        <div className="h-full  w-full lg:pl-20 pt-10 lg:pt-10">
          <div className="lg:p-4 p-10 flex flex-col items-center justify-center">
            <strong className="md:text-[64px] text-[36px] text-center  text-white md:leading-[78px] tracking-[0.27px]  drop-shadow-lg md:ml-0 md:mt-0 mt-4">
              Rejoignez l'équipe Chapchrono
            </strong>
            <div className="mt-24 flex flex-col sm:flex-row space-y-10 sm:space-y-0 justify-between text-white text-[18px]  w-full">
              <label
                tabIndex={0}
                className="hover:bg-[#7c3912] bg-[#be5010] flex items-center justify-center rounded-full p-3 px-10 text-white cursor-pointer"
              >
                Voir nos offres
              </label>

              <label
                tabIndex={0}
                className="hover:bg-[#7c3912] bg-[#be5010] flex items-center justify-center rounded-full p-3 px-10 text-white cursor-pointer"
              >
                Candidature spontanée
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Contenttt */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="h-full md:w-1/2 w-full lg:pl-40">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#db6013] leading-10 drop-shadow-lg">
              Notre mission ? faire evoluer la livraison
            </strong>
            <p className="text-[17px] mt-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ex, aliquam culpa impedit, veritatis
              qui aut reiciendis omnis rem provident earum, non corporis labore
              et quia eius. Quos expedita amet asperiores.
            </p>
          </div>
        </div>
        <div className="h-full md:w-1/2 w-full lg:p-0 lg:pt-0 lg:pl-0 p-0">
          <img
            src="/tel.png"
            alt=""
            srcset=""
            className="h-[500px] w-[530px]"
          />
        </div>
      </div>
      {/**Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="hero-content-two order-2 h-full md:w-1/2 w-full lg:pl-0">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] leading-10 drop-shadow-lg">
              Notre mission ? faire evoluer la livraison
            </strong>
            <p className="text-[17px] mt-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at. Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Ex, aliquam culpa impedit, veritatis
              qui aut reiciendis omnis rem provident earum, non corporis labore
              et quia eius. Quos expedita amet asperiores.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quos
              molestiae, nobis officiis maxime enim libero minima sit? Nam unde
              quaerat nulla vel ut dignissimos accusantium delectus, eius amet
              obcaecati.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam illo
              voluptas, amet ipsum doloribus dolores. Ex molestias vitae ea
              porro maxime ducimus ab repellendus, dolorem assumenda ut, labore
              pariatur odit!
            </p>
          </div>
        </div>
        <div className="hero-content-one order-1 h-full md:w-1/2 w-full lg:p-0 lg:pt-0 lg:pl-36 p-0">
          <img
            src="/img-two/content-ca.png"
            alt=""
            srcset=""
            className="h-[300px] w-[500px]"
          />
        </div>
      </div>
    </>
  );
}
