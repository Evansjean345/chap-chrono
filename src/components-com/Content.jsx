import React from "react";
import "../App.css";

export default function Content() {
  return (
    <>
      {/*Advantage One */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[550px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <br className="supp" />
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          Des heureux et des sous
        </strong>
        <p className="text-center flex justify-center mt-12 sm:px-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro
          unde nemo rem dicta doloremque perferendis aliquid. Minus sequi
          obcaecati expedita? Illum ipsam iusto, rem veniam aut totam dolorem
          voluptas!
        </p>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo/add-3.png"
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
                src="/logo/ad-1.png"
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
                src="/logo/add-2.png"
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
        <div className="btn-flex flex justify-center items-center sm:mt-32">
          <label
            tabIndex={0}
            className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
          >
            Je telecharge l'app
          </label>
        </div>
      </div>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Partager , c'est bien
            </strong>
            <p className="text-[17px] lg:my-16 mt-6">
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
        <div className="order-1 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12">
          <img
            src="/heroThree.png"
            alt=""
            srcset=""
            className="h-[500px] w-[500px]"
          />
        </div>
      </div>
      {/*Advantage Twoo */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[550px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <br className="supp" />
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          C'est tellement simple
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo/ad-1.png"
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
                src="/logo/car.png"
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
                src="/logo/add-4.png"
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
        <div className="btn-flex flex justify-center items-center sm:mt-32">
          <label
            tabIndex={0}
            className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
          >
            Je telecharge l'app
          </label>
        </div>
      </div>
      {/***Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40 sm:pt-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Vivons mieux, ensemble
            </strong>
            <p className="text-[17px] mt-12">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at.
            </p>
            <label
              tabIndex={0}
              className="hover:bg-[#ba571a] flex items-center justify-center bg-[#db6013] rounded-full mt-12 p-1 py-3 px-4 text-white w-[180px] cursor-pointer"
            >
              c'est par ici
            </label>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-16 lg:pt-0 lg:pl-0 p-0">
          <img
            src="/card-img/content-com.png"
            alt=""
            srcset=""
            className="h-[400px] w-[550px]"
          />
        </div>
      </div>
      {/* Patner */}
      <div className="flex flex-col lg:justify-center bg-[#EFEFF2] lg:h-[450px] h-[650px] w-full lg:pt-0 p-[35px]">
        <br className="supp" />
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg  lg:pt-0  text-center">
          Téléchargez l'application
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/logo/play-store.png"
                alt=""
                srcset=""
                className="w-[208px] h-[108px] my-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
            </li>
            {/** */}
            <li className="flex flex-col  items-center lg:mx-8">
              <img
                src="/logo/app-store.png"
                alt=""
                srcset=""
                className="w-[208px] h-[108px] m-[45px] mb-4 drop-shadow-md lg:hover:scale-125 transition-all"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
