import React from "react";
import { StyleSheet, View, Text } from "react-native";
import MovieList from "./components/movieList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello there</Text>
      <MovieList />
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
});
