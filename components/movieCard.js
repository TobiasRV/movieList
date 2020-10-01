import React from "react";
import { StyleSheet, Text, Image } from "react-native";
import { Card } from "react-native-elements";

export default function MovieCard({ item }) {
  return (
    <Card>
      <Card.Image
        source={"https://image.tmdb.org/t/p/w200/" + item.poster_path}
      />
      <Card.Title>{item.original_title}</Card.Title>
      <Card.Divider />
      <Text>{item.overview}</Text>
    </Card>
  );
}
