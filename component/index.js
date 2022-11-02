import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "769a84efb3msh8f59bd4c654c15fp105b18jsnaf8ceb6a4a81",
      "X-RapidAPI-Host": "movies-news1.p.rapidapi.com",
    },
  };

  fetch("https://movies-news1.p.rapidapi.com/movies_news/recent", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <div></div>;
};

export default Movies;
