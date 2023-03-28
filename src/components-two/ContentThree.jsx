import React from "react";

export default function ContentThree() {
  return (
    <>
      <div className="w-full  flex-col md:flex-row flex flex-wrap justify-center bg-white lg:mt-0 lg:p-12 lg:pt-0">
        <div className="order-1 h-full md:w-1/2 w-full lg:pl-56  lg:p-12">
          <div className="lg:p-4 p-10">
            <strong className="lg:text-[35px] text-3xl text-start  tracking-[0.27px] text-[#21264D] drop-shadow-lg">
              La livraison,
              <br />
              un sujet qui fâche
            </strong>
            <p className="text-[17px] lg:my-16 mt-6 mb-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              mollitia incidunt et laborum nemo neque odit consequuntur eius
              quisquam! Modi quasi temporibus provident necessitatibus iure
              neque quibusdam in? Fuga, at. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quibusdam molestiae laborum ratione
              tenetur magni magnam similique natus, et unde eum voluptates
              voluptatem dicta molestias ea qui laudantium laboriosam aperiam
              sunt!
            </p>
            <label
              tabIndex={0}
              className="hover:bg-[#db6013] bg-[#FF6200] rounded-full  p-3 px-10 text-white mt-5 cursor-pointer"
            >
              Cliquez là
            </label>
          </div>
        </div>
        <div className="order-2 md:w-1/2 w-full lg:p-16 lg:pt-12 lg:pl-12 p-12">
          <img
            src="/img-two/pc-img.png"
            alt=""
            srcset=""
            className="h-[500px] w-[500px]"
          />
        </div>
      </div>
    </>
  );
}
