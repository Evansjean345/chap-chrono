import React from "react";
import "../App.css";

export default function Card() {
  return (
    <>
      <section class="text-gray-600 body-font bg-[#EFEFF2] ">
        <div class="px-24 py-24">
          <div class="flex flex-wrap justify-center">
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                    <img
                      src="/card-img/card-one.jpg"
                      alt=""
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      Des commerçants
                      <br />
                      attentifs
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque et ducimus reiciendis magnam vero minus explicabo
                      quaerat, dicta obcaecati voluptas delectus nostrum tempore
                      amet adipisci id? Facilis soluta corporis ipsum.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      vous en etes ou ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 m-4 ">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                    <img
                      src="/card-img/card-two.jpg"
                      alt=""
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      Des commerçants
                      <br />
                      attentifs
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque et ducimus reiciendis magnam vero minus explicabo
                      quaerat, dicta obcaecati voluptas delectus nostrum tempore
                      amet adipisci id? Facilis soluta corporis ipsum.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      vous en etes ou ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white rounded-lg">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none">
                    <img
                      src="/card-img/card-three.jpg"
                      alt=""
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[17px] leading-normal mt-16  text-center tracking-[0.27px] text-[#21264D] drop-shadow-lg">
                      Des commerçants
                      <br />
                      attentifs
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque et ducimus reiciendis magnam vero minus explicabo
                      quaerat, dicta obcaecati voluptas delectus nostrum tempore
                      amet adipisci id? Facilis soluta corporis ipsum.
                    </p>
                    <p className="text-center text-[12px] mt-6 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      vous en etes ou ?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
