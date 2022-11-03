import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import {
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

export default function Home({ movies }) {
  return (
    <Wrap spacing="30px">
      {movies.results.map((mov) => (
        <WrapItem>
          <Link href="/movies/[id]" as={`/movies/${mov.id}`}>
            <img src={mov.image} alt="image"></img>
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
