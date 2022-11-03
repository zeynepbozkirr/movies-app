import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import { Fade } from "react-awesome-reveal";
import { Center, Square, Circle, Image } from "@chakra-ui/react";
import Flippy, { BackSide, FrontSide } from "react-flippy";

export default function movieDetail({ movies }) {
  console.log(movies, "detail movies");
  return (
    <Center>
      <Flippy
        flipOnHover={true}
        flipDirection="horizontal"
        // ref={ref}
      >
        <FrontSide style={{ width: "100%", height: "100%" }}>
          <Image src={movies.image} alt={movies.name}></Image>
          <Fade>
            <p>{movies.name}</p>
          </Fade>
        </FrontSide>
        <BackSide>
          <Fade>
            <p>{movies.name}</p>
            <p>{movies.created}</p>
            <p>{movies.gender}</p>
          </Fade>
        </BackSide>
      </Flippy>
    </Center>
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
