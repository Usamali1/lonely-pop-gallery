import React from "react";
import Gallery from "../views/Gallery";

const galleryPage = ({data}) => {

 
  return (
    <div>
      <Gallery data={data}/>
    </div>
  );
};

export default galleryPage;
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://147.182.247.8:1337/api/posts?populate=*");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}