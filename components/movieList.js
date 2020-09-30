import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import MovieCard from "./movieCard";

export default function MovieList() {
  const [movieList, setMovieList] = useState([]);
  fetch(
    "https://api.themoviedb.org/3/movie/now_playing?api_key=ead8068ec023b7d01ad25d135bf8f620&language=en-US&page=1"
  )
    .then((response) => response.json())
    .then((responseJson) => {
      setMovieList(responseJson.results);
    })
    .catch((err) => {
      alert(Error("Error retriving the data: " + err));
    });

  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1", done: false },
    { text: "create an app", key: "2", done: false },
    { text: "delete search history", key: "3", done: true },
  ]);
  return (
    <FlatList
      data={movieList}
      renderItem={({ item }) => <MovieCard item={item} />}
    />
    // <FlatList
    //   data={todos}
    //   renderItem={({ item }) => <Text>{item.text}</Text>}
    // />
  );
}
