import React from "react";
const SunSet = ({filteredData}) => {
  const baseUrl = "http://147.182.247.8:1337";
  const imagefile = baseUrl + filteredData[0]?.attributes?.designFile.data[0].attributes.url
 
  return (
    <div>
      <div className="main-container px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
          <div className="mb-10 md:mb-0">
            <img
              src={imagefile}
              alt=""
              className="w-full"
              
            />
          </div>
          <div>
            <div>
              <h2 className="sunset-text capitalize lg:mt-5">Title: <span className="text-2xl"> {filteredData[0]?.attributes?.title}</span></h2>
              <h2 className="sunset-text">Created By: <span className="text-2xl"> {filteredData[0]?.attributes?.discordName}</span></h2>
              <h2 className="sunset-text">TwiterLink: <span className="text-2xl"> {filteredData[0]?.attributes?.twitterLink}</span></h2>
              <p>
              {filteredData[0]?.attributes?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SunSet;
