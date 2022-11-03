import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Movies from "../component";
import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import slug from "slug";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <div>
      {movies.results.map((mov) => (
        <li>
          <Link href={`/movies/${mov.id}`}>mov.name</Link>
        </li>
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://rickandmortyapi.com/api/character/");
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
