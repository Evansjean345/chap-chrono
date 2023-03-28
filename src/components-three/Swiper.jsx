import React from "react";
import bgSlider from "../bg-slider.png";
import "../App.css";

export default function Swiper() {
  return <>
          <div
        className="flex justify-center py-28  lg:py-32 lg:p-32 bg-cover"
        style={{ backgroundImage: `url(${bgSlider})` }}
      >
        <div className="carousel w-96 h-96 md:h-96 md:w-full">
          <div
            id="slide1"
            className="carousel-item relative w-96 h-96 md:h-96 md:w-full"
          >
            <div className="h-full w-full bg-white flex py-16 px-2 md:px-20 space-x-6 rounded-[54px] relative">
              <div className="w-[6%]">
                <img src="/img-two/comma.png" alt="" className="h-12 w-12" />
              </div>
              <p className="w-[60%] text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus magnam, fugiat iusto eius dicta commodi aperiam totam
                vitae
                <br />
                <br />
                <strong className="text-[#4D148C]">
                  Lorem ipsum, dolor sit
                </strong>
                <br />
                Lorem ipsum, dolor sit
              </p>
              <div className="w-[34%] rounded-[100%]">
                <img
                  src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="h-64 w-72 rounded-[100%]"
                />
              </div>
              <div className="absolute flex bottom-5 md:bottom-10 right-[180px] md:right-[600px] space-x-2">
                <a
                  href="#slide1"
                  className="h-[8px] w-[8px] my-[5px] bg-[#db6013] rounded-full"
                ></a>
                <a
                  href="#slide2"
                  className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
                ></a>
                <a
                  href="#slide3"
                  className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
                ></a>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
              >
                ❮
              </a>
              <a
                href="#slide2"
                className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative w-96 h-96 md:h-96 md:w-full"
          >
            <div className="h-full w-full bg-white flex py-16 px-2 md:px-20 space-x-6 rounded-[54px] relative">
              <div className="w-[6%]">
                <img src="/img-two/comma.png" alt="" className="h-12 w-12" />
              </div>
              <p className="w-[60%] text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus magnam, fugiat iusto eius dicta commodi aperiam totam
                vitae
                <br />
                <br />
                <strong className="text-[#4D148C]">
                  Lorem ipsum, dolor sit
                </strong>
                <br />
                Lorem ipsum, dolor sit
              </p>
              <div className="w-[34%] rounded-[100%]">
                <img
                  src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="h-64 w-72 rounded-[100%]"
                />
              </div>
              <div className="absolute flex bottom-5 md:bottom-10 right-[180px] md:right-[600px] space-x-2">
                <a
                  href="#slide1"
                  className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
                ></a>
                <a
                  href="#slide2"
                  className="h-[8px] w-[8px] my-[5px] bg-[#db6013] rounded-full"
                ></a>
                <a
                  href="#slide3"
                  className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
                ></a>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide1"
                className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
              >
                ❮
              </a>
              <a
                href="#slide3"
                className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
              >
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide3"
            className="carousel-item relative w-96 h-96 md:h-96 md:w-full"
          >
            <div className="h-full w-full bg-white flex py-16 px-2 md:px-20 space-x-6 rounded-[54px] relative">
              <div className="w-[6%]">
                <img src="/img-two/comma.png" alt="" className="h-12 w-12" />
              </div>
              <p className="w-[60%] text-start">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus magnam, fugiat iusto eius dicta commodi aperiam totam
                vitae
                <br />
                <br />
                <strong className="text-[#4D148C]">
                  Lorem ipsum, dolor sit
                </strong>
                <br />
                Lorem ipsum, dolor sit
              </p>
              <div className="w-[34%] rounded-[100%]">
                <img
                  src="https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                  className="h-64 w-72 rounded-[100%]"
                />
              </div>
              <div className="absolute flex bottom-5 md:bottom-10 right-[180px] md:right-[600px] space-x-2">
                <a
                  href="#slide1"
                  className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
                ></a>
                <a
                  href="#slide2"
                  className="h-[8px] w-[8px] my-[5px] bg-[#e9ae89] rounded-full"
                ></a>
                <a
                  href="#slide3"
                  className="h-[8px] w-[8px] my-[5px] bg-[#db6013] rounded-full"
                ></a>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href="#slide2"
                className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
              >
                ❮
              </a>
              <a
                href="#slide4"
                className="btn-slider btn btn-circle bg-[#db6013] hover:bg-[#e9ae89]"
              >
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
  </>;
}
