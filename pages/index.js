import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Movies from "../component";

export default function Home({ movies }) {
  console.log(movies, "sss");
  return (
    <div className={styles.container}>
      {/*<Movies />*/}
      {movies.map((data) => (
        <img src={data.cover} alt={"photo"} />
      ))}
      ss
    </div>
  );
}
export async function getStaticProps() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "769a84efb3msh8f59bd4c654c15fp105b18jsnaf8ceb6a4a81",
      "X-RapidAPI-Host": "movie-quote.p.rapidapi.com",
    },
  };

  const movies = await fetch(
    "https://movie-quote.p.rapidapi.com/movie/so%20far%20so%20good",
    options
  ).then((response) => response.json());

  return {
    props: {
      movies,
    },
  };
}
