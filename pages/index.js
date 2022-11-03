import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Movies from "../component";
import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import slug from "slug";

export default function Home({ movies }) {
  return (
    <div>
      {movies.results.map((mov) => (
        <Link href="/movies/[id]" as={`/movies/${mov.id}`}>
          <img src={mov.image} alt="image"></img>
        </Link>
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const res = await unfetch("https://rickandmortyapi.com/api/character/");
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
