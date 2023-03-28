import React from "react";

export default function Patner() {
  return (
    <>
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
      {/*Content Three */}
      <div className="flex flex-col items-center mb-12">
        <img
          src="/logo/logo-no-text.png"
          alt=""
          srcset=""
          className="h-[62px] w-[151px] mt-12"
        />
        <strong className="lg:text-[24px] text-3xl text-center  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
          Et vous ?
          <br />
          Souriez, c'est livré
        </strong>
        <p className="text-center lg:px-[400px] mt-4">
          Lorem :
          <br /> ipsum dolor sit, amet consectetur adipisicing elit. Recusandae,
          tempora vero eius inventore veniam quo quis, unde quas rem magnam
          praesentium fuga, beatae suscipit esse vitae quos aliquid quidem
          ratione.
        </p>
        <label
          tabIndex={0}
          className="hover:bg-[#db6013] bg-[#FF6200] rounded-full p-3 px-10 text-white mt-5 cursor-pointer"
        >
            Rejoignez Chapchrono
        </label>
      </div>
    </>
  );
}
