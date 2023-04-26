import React from "react";

export default function OtherContent() {
  return (
    <>
      <section class="text-gray-600 body-font bg-[#EFEFF2]">
        <div class="px-24 py-24">
          <div class="flex flex-wrap justify-center">
            <div class="xl:w-1/4 m-4">
              <div class="h-[452px] w-[308px] bg-white border-2 border-gray-300 rounded-3xl sm:hover:translate-y-[-18px] transition-all">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none flex items-center justify-center">
                    <img
                      src="/logo/other-2.png"
                      alt=""
                      className="rounded-t-lg h-[120px]"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[13px] leading-normal mt-8  text-center tracking-[0.27px] text-[#db6013] drop-shadow-lg">
                      SUPPORT CLIENT
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-12">
                      Notre service client est ouvert et à votre écoute
                    </p>
                    <p className="text-center text-[12px] mt-20 text-[#250844]">
                      Contact
                    </p>
                    <p className="text-center text-[12px] mt-2 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      <a href="tel:+2250585052897">
                        +225 05 85 05 28 97
                      </a>
                    </p>
                    <p className="text-center text-[12px] mt-2 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      <a href="mailto:info@chapchrono.com">
                        info@chapchrono.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="xl:w-1/4 m-4 ">
              <div class="h-[452px] w-[308px] bg-white border-2 border-gray-300 rounded-3xl sm:hover:translate-y-[-18px] transition-all">
                <div className="flex h-full w-full rounded-lg flex-col">
                  <div className="h-[35%] rounded-lg rounded-b-none flex justify-center items-center">
                    <img
                      src="/logo/other-1.png"
                      alt=""
                      className="rounded-t-lg h-[120px]"
                    />
                  </div>
                  <div className="h-[65%] rounded-lg rounded-t-none flex flex-col items-center">
                    <strong className="text-[13px] leading-normal mt-8  text-center tracking-[0.27px] text-[#db6013] drop-shadow-lg">
                      CONTACT COMMERCIAL
                    </strong>
                    <p className="text-center text-[12px]   px-5 mt-12">
                      Notre équipe commerciale vous contactera dans les plus
                      brefs délais.
                    </p>
                    <p className="text-center text-[12px] mt-20 text-[#250844]">
                      Contact Commercial
                    </p>
                    <p className="text-center text-[12px] mt-2 cursor-pointer hover:text-[#ba571a] text-[#db6013]">
                      <a href="mailto:contact@chapchrono.com">
                      contact@chapchrono.com
                      </a>
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
