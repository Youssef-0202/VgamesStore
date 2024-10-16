import React from "react";
import useGenres from "../hooks/useGenres";
import { li } from "framer-motion/client";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}> {genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
