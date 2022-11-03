import Link from "next/link";
import unfetch from "isomorphic-unfetch";
import {
  Grid,
  GridItem,
  SimpleGrid,
  Box,
  Wrap,
  WrapItem,
  Image,
} from "@chakra-ui/react";
import { useRef } from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";

export default function Home({ movies }) {
  // const ref = useRef();

  return (
    <div>
      <Wrap spacing="30px">
        {movies.results.map((mov) => (
          <WrapItem>
            <Link href="/movies/[id]" as={`/movies/${mov.id}`}>
              <Image src={mov.image} alt={mov.name}></Image>
            </Link>
          </WrapItem>
        ))}
      </Wrap>
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
