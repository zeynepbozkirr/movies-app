import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import { Box, Wrap, WrapItem, Image } from "@chakra-ui/react";

export default function Home({ movies }) {
  return (
    <Wrap spacing="20px">
      {movies.results.map((mov) => (
        <WrapItem
          style={{
            height: "154px",
            width: "154px",
            border: " 2px solid  ",
          }}
        >
          <Link href="/movies/[id]" as={`/movies/${mov.id}`}>
            <Image height="150" src={mov.image} alt={mov.name}></Image>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
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
