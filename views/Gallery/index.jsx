import Link from "next/link";
import React from "react";
import slugify from "slugify";

const Gallery = ({ data }) => {
  const baseUrl = "http://147.182.247.8:1337";
  // const getData = data.data.map(
  //   (item) => item.attributes.designFile.data[0].attributes.url
  // );

  const getData = data.data.map((item) => item.attributes);

  const slicedFirstImage = getData.slice(0, 1);
  const slicedData = getData.slice(1, 5);
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Link href={`photo-detail/${slugify(slicedFirstImage[0].title)}`}>
              <img
                src={baseUrl + slicedFirstImage[0].designFile.data[0].attributes.url}
                alt=""
                className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {slicedData.map((item, index) => {
              return (
                <Link href={`photo-detail/${slugify(item.title) }`} key={index}>
                  <img
                    src={baseUrl + item.designFile.data[0].attributes.url}
                    alt=""
                    className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          {data.data.map((item, index) => {
            return (
              <div key={index}>
                <Link href={`photo-detail/${slugify(item.attributes.title) }`}>
                  <img
                    src={
                      baseUrl +
                      item.attributes.designFile.data[0].attributes.url
                    }
                    alt=""
                    className="w-full transition-all duration-500 hover:opacity-80 cursor-pointer"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
