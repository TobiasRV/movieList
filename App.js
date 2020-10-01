import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import MovieList from "./components/movieList";

export default function App() {
  const [value, setValue] = useState("");
  //const [movie, setMovie] = useState("null");
  return (
    <View style={styles.container}>
      <Text>Movie List</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Search movie"
        onChangeText={(text) => setValue(text)}
      />
      {/* <Button onPress={() => setMovie(value)} title="Search"/> */}
      <MovieList text={value} style={styles.movieList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  }
});
