import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "769a84efb3msh8f59bd4c654c15fp105b18jsnaf8ceb6a4a81",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };

  fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return <div></div>;
};

export default Movies;
