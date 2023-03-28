import React from "react";
import "../App.css";

export default function ContentOne() {
  return (
    <>
      <div className="w-full flex-col md:flex-row flex flex-wrap justify-center bg-white  lg:p-12">
        <div className="hero-content-one  h-full md:w-1/2 w-full lg:pl-40">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              La livraison,
              <br />
              un sujet qui fâche
            </strong>
            <p className="text-[17px] mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at.
            </p>
            <ul className="mt-6">
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <p>
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, unde! Ipsum explicabo esse, veniam repellat totam
                    fugiat amet,
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero-content-two  h-full md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-0 p-0">
          <img src="/hero.png" alt="" srcset="" className="h-[500px] w-[600px]" />
        </div>
      </div>
      {/* SECOND PART CONETNT */}
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-2 h-full md:w-1/2 w-full lg:pl-0  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              La livraison,
              <br />
              un sujet qui fâche
            </strong>
            <p className="text-[17px] mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quibusdam molestiae laborum ratione
              tenetur magni magnam similique natus, et unde eum voluptates
              voluptatem dicta molestias ea qui laudantium laboriosam aperiam
              sunt!
            </p>
            <ul className="mt-6">
              <li className="mt-3">
                <div className="flex">
                  <img
                    src="pic.png"
                    alt=""
                    srcset=""
                    className="h-[12px] w-[24px] m-2"
                  />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore, unde! Ipsum explicabo esse, veniam repellat totam
                    fugiat amet,
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1  md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-56 p-12">
          <img src="/heroTwo.png" alt="" srcset="" className="h-[400px] w-[500px]" />
        </div>
      </div>
    </>
  );
}
