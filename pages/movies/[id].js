import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import { Fade } from "react-awesome-reveal";

export default function movieDetail({ movies }) {
  console.log(movies, "detail movies");
  return (
    <div>
      <Fade>
        <p> {movies.name}</p>
      </Fade>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await unfetch("https://rickandmortyapi.com/api/character/");
  const posts = await res.json();
  console.log(posts, "ppp");

  const paths = posts.results.map((post) => {
    return {
      params: { id: `${post.id}` },
    };
  });
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  console.log(params, "paramss");

  const res = await fetch(
    "https://rickandmortyapi.com/api/character/" + params.id
  );

  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}
