import React from "react";
import SunSet from "../../views/SunSet/SunSet";
import { useRouter } from 'next/router';
import slugify from "slugify";
const PhotoDetail = ({data}) => {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  const filteredData = data.data.filter(itm => slugify(itm.attributes.title) == id)
  console.log(filteredData, "filteredData")
  return (
    <div>
      <SunSet filteredData={filteredData}/>
    </div>
  );
};

export default PhotoDetail;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://147.182.247.8:1337/api/posts?populate=*");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}