import Carusel from "../views/Home/Carusel";
import Footer from "../views/Home/Footer";
export default function Home({ data }) {
  
  return (
    <div className="">
      <Carusel data={data}/>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("http://147.182.247.8:1337/api/posts?populate=*");
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
