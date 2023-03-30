import React from "react";

export default function ContentThee() {
  return (
    <>
      {/* Content */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-16">
        <div className="order-1 h-full md:w-1/2 w-full lg:pl-56  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Livraison Inter-magasin
            </strong>
            <p className="text-[17px] mt-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, provident corporis iusto recusandae dolorum neque
              ducimus, nemo earum odio obcaecati unde magni debitis esse ut
              eaque atque accusamus et autem.
            </p>
            <br />
            <br />
            <br />
            <label
              tabIndex={0}
              className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white cursor-pointer"
            >
              Je veux en savoir plus
            </label>
          </div>
        </div>
        <div className="order-2 md:w-1/2 w-full lg:p-16 lg:pt-16 lg:pl-32 p-12">
          <img
            src="/img-store/hero-store-1.png"
            alt=""
            srcset=""
            className="h-[400px] w-[400px]"
          />
        </div>
      </div>
      {/** Content */}
      <div className="hero-content-two   w-full  flex-col md:flex-row flex flex-wrap justify-center bg-[#EFEFF2]  lg:mt-32 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Pas besoin d'un site Web ou d'un livreur professionnel avec
              Chapchrono
            </strong>
            <p className="text-[17px] mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut id
              cupiditate sit architecto quis consequatur fuga eos aspernatur
              beatae pariatur! Enim quaerat exercitationem, unde vitae quia
              adipisci sed quasi nisi? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ut id cupiditate sit architecto quis consequatur
              fuga eos aspernatur beatae pariatur! Enim quaerat exercitationem,
              unde vitae quia adipisci sed quasi nisi?
            </p>
            <p className="text-[17px] mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
            </p>
          </div>
        </div>
        <div className="hero-content-one order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-36 p-12">
          <img
            src="/img-store/hero-store-2.png"
            alt=""
            srcset=""
            className="h-[400px] w-[400px]"
          />
        </div>
      </div>
      {/* Advantage */}
      <div className="flex flex-col lg:justify-center bg-white lg:h-[350px] h-[1150px] w-full lg:pt-0 p-[35px]">
        <strong className="lg:text-[35px] text-3xl flex justify-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg pt-16 lg:pt-0  text-center">
          Les avantages de notre solution
        </strong>
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full lg:mt-8">
          <ul className="list-partner flex">
            <li className="flex flex-col items-center lg:mx-8">
              <img
                src="/img-store/logo-store-1.png"
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
                src="/img-store/logo-store-2.png"
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
                src="/img-store/logo-store-3.png"
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
                src="/img-store/logo-store-4.png"
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
      <br />
      <br />
      {/** Patner */}
      <div className="partner-container flex justify-center bg-[#EFEFF2] h-[223px] w-full p-[35px]">
        <div className=" flex p-[25px] justify-center bg-none h-[128px] w-full ">
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
      {/* Content */}
      <div className="hero-content-two   w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:mt-32 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Optez pour la livraison en lacher de chariot avec Chapchrono
            </strong>
            <ul className="mt-12">
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <p>
                    <strong>lorem lorem lorem lorem </strong>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, unde! Ipsum explicabo esse, veniam repellat totam
                    fugiat amet,
                  </p>
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
                  <p>
                    <strong>lorem lorem lorem lorem </strong>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, unde! Ipsum explicabo esse, veniam repellat totam
                    fugiat amet,
                  </p>
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
                  <p>
                    <strong>lorem lorem lorem lorem </strong>
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, unde! Ipsum explicabo esse, veniam repellat totam
                    fugiat amet,
                  </p>
                </div>
              </li>
            </ul>
            <br />
            <br />
            <br />
            <label
              tabIndex={0}
              className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white cursor-pointer"
            >
              Je veux en savoir plus
            </label>
          </div>
        </div>
        <div className="hero-content-one order-1  md:w-1/2 w-full lg:p-16 lg:pt-32 lg:pl-36 p-12">
          <img
            src="/img-store/hero-store-3.png"
            alt=""
            srcset=""
            className="h-[400px] w-[400px]"
          />
        </div>
      </div>
    </>
  );
}
