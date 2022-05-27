import React, { useState, useEffect, useCallback, useRef } from "react";

import { BsArrowRight, BsArrowLeft, BsDash } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper/core";

SwiperCore.use([Virtual]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const Carusel = ({ data }) => {
  const swiperRef = useRef(null);

  const [currentIndex, updateCurrentIndex] = useState(0);
  const params = {
    initialSlide: 2,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,
    loop: true,
    autoplay: true,
  };

  // Manipulate swiper from outside
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      updateIndex();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  const updateIndex = useCallback(
    () => updateCurrentIndex(swiperRef.current.swiper.realIndex),
    []
  );
  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [updateIndex, swiperRef]);
  var sliderSettings = {
    150: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    440: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    680: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 1024
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  };
  const baseUrl = "http://147.182.247.8:1337";
  const getData = data.data.map(
    (item) => item.attributes.designFile.data[0].attributes.url
  );
 
  const slicedFirstImage = getData.slice(0, 1);
  const slicedData = getData.slice(1, 5);

  return (
    <div className="w-full ">
      <div className="max-w-7xl mx-auto  px-5 py-20 rounded-lg">
        <div className="relative">
          <div className="absolute top-1/2 -left-20 transform -translate-y-1/2">
            <a className="px-2 cursor-pointer" onClick={goPrev}>
              <BsArrowLeft className="text-6xl" />
            </a>
          </div>
          <Swiper
            slidesPerView={1}
            navigation
            breakpoints={sliderSettings}
            {...params}
            ref={swiperRef}
          >
            {slicedFirstImage.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <img
                        src={baseUrl + item}
                        alt=""
                        className="w-full transition-all duration-300 hover:opacity-90"
                        onClick={goNext}
                      />
                    </div>

                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
                      {slicedData.map((itm, index) => {
                        return (
                          <img
                            src={baseUrl + itm}
                            alt=""
                            className="w-full transition-all duration-300 hover:opacity-90"
                            onClick={goNext}
                            key={index}
                          />
                        );
                      })}
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            
            
          </Swiper>
          <div className="absolute top-1/2 -right-20 transform -translate-y-1/2">
            <a className="px-2 cursor-pointer" onClick={goNext}>
              <BsArrowRight className="text-6xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carusel;
