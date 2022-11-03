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
import Flippy, { BackSide, FrontSide } from "react-flippy";

export default function Home({ movies }) {
  // const ref = useRef();

  return (
    // <Flippy
    //   flipOnHover={true}
    //   flipDirection="horizontal"
    //   // ref={ref}
    // >
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
    // </Flippy>
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
