import React from "react";

export default function ContentCo() {
  return (
    <>
      {/** Card */}
      <div className="mt-6 grid  grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-[#EFEFF2] px-8 sm:px-16 py-24">
        <div class="xl:w-1/4 m-4">
          <div class="h-[452px] w-[308px] bg-white rounded-lg">
            <div className="flex h-full w-full rounded-lg flex-col">
              <div className="h-[35%] rounded-[100%] flex items-center justify-center">
                <img
                  src="/logo/picto_1.png"
                  alt=""
                  className="rounded-[100%] h-[106px]"
                />
              </div>
              <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                <strong className="text-[17px] leading-normal  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                  Des commerçants
                  <br />
                  attentifs
                </strong>
                <p className="text-center text-[12px]   px-5 mt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  et ducimus reiciendis magnam vero minus explicabo quaerat,
                  dicta obcaecati voluptas delectus nostrum tempore amet
                  adipisci id? Facilis soluta corporis ipsum.
                </p>
                <p className="text-center text-[12px] mt-8 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                  vous en etes ou ?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 m-4">
          <div class="h-[452px] w-[308px] bg-white rounded-lg">
            <div className="flex h-full w-full rounded-lg flex-col">
              <div className="h-[35%] rounded-[100%] flex items-center justify-center">
                <img
                  src="logo/picto_2.png"
                  alt=""
                  className="rounded-[100%] h-[106px]"
                />
              </div>
              <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                <strong className="text-[17px] leading-normal  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                  Des commerçants
                  <br />
                  attentifs
                </strong>
                <p className="text-center text-[12px]   px-5 mt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  et ducimus reiciendis magnam vero minus explicabo quaerat,
                  dicta obcaecati voluptas delectus nostrum tempore amet
                  adipisci id? Facilis soluta corporis ipsum.
                </p>
                <p className="text-center text-[12px] mt-8 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                  vous en etes ou ?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 m-4">
          <div class="h-[452px] w-[308px] bg-white rounded-lg">
            <div className="flex h-full w-full rounded-lg flex-col">
              <div className="h-[35%] rounded-[100%] flex items-center justify-center">
                <img
                  src="logo/picto_3.png"
                  alt=""
                  className="rounded-[100%] h-[106px]"
                />
              </div>
              <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                <strong className="text-[17px] leading-normal  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                  Des commerçants
                  <br />
                  attentifs
                </strong>
                <p className="text-center text-[12px]   px-5 mt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  et ducimus reiciendis magnam vero minus explicabo quaerat,
                  dicta obcaecati voluptas delectus nostrum tempore amet
                  adipisci id? Facilis soluta corporis ipsum.
                </p>
                <p className="text-center text-[12px] mt-8 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                  vous en etes ou ?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="xl:w-1/4 m-4">
          <div class="h-[452px] w-[308px] bg-white rounded-lg">
            <div className="flex h-full w-full rounded-lg flex-col">
              <div className="h-[35%] rounded-[100%] flex items-center justify-center">
                <img
                  src="logo/picto_4.png"
                  alt=""
                  className="rounded-[100%] h-[106px]"
                />
              </div>
              <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                <strong className="text-[17px] leading-normal  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                  Des commerçants
                  <br />
                  attentifs
                </strong>
                <p className="text-center text-[12px]   px-5 mt-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  et ducimus reiciendis magnam vero minus explicabo quaerat,
                  dicta obcaecati voluptas delectus nostrum tempore amet
                  adipisci id? Facilis soluta corporis ipsum.
                </p>
                <p className="text-center text-[12px] mt-8 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                  vous en etes ou ?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** Content */}
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center   lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-12 sm:pt-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              Parrainez vos amis
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
              Parcourir
            </label>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-16 lg:pt-0 lg:pl-24 p-0">
          <img
            src="/card-img/content-com.png"
            alt=""
            srcset=""
            className="h-[400px] w-[550px]"
          />
        </div>
      </div>
      {/**Content Logo Text */}
      <div className="flex flex-col items-center mb-0 bg-[#EFEFF2] h-[400px]">
        <img
          src="/logo/logo-no-text.png"
          alt=""
          srcset=""
          className="h-[62px] w-[151px] mt-12"
        />
        <strong className="lg:text-[24px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Rejoignez la communauté sur faceboock
        </strong>
        <p className="text-center lg:px-[400px] mt-4">
          Lorem : ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          tempora vero eius inventore veniam quo quis, unde quas rem magnam
          praesentium fuga, beatae suscipit esse vitae quos aliquid quidem
          ratione.
        </p>
        <label
          tabIndex={0}
          className="hover:bg-[#db6013] bg-[#FF6200] rounded-full p-3 px-10 text-white mt-5 cursor-pointer"
        >
            Rejoindre mon groupe faceboock
        </label>
      </div>
    </>
  );
}
