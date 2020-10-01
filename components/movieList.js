import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import MovieCard from "./movieCard";

export default function MovieList({ text }) {
  const [movieList, setMovieList] = useState([]);
  if (text == "null") {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=ead8068ec023b7d01ad25d135bf8f620&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setMovieList(responseJson.results);
      })
      .catch((err) => {
        alert(Error(err));
      });
  } else {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=ead8068ec023b7d01ad25d135bf8f620&language=en-US&query=${text}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        setMovieList(responseJson.results);
      })
      .catch((err) => {
        alert(Error(err));
      });
  }

  return (
    <FlatList
      data={movieList}
      renderItem={({ item }) => <MovieCard item={item} />}
    />
  );
}
