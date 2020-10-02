import React, { Component } from "react";
import { Alert, Image, TouchableWithoutFeedback} from "react-native";
import { Card, CardItem, Text } from "native-base";

export default function MovieCard({ item }) {
  return (
    <TouchableWithoutFeedback onPress={()=>{Alert.alert("QUE APRETAS GIL")}}>
      <Card style={{marginTop: "5%"}}>
        <CardItem header>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {item.original_title}
          </Text>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={
              item.backdrop_path == null ? require("../assets/image-not-found.png") : {uri:"https://image.tmdb.org/t/p/w500/" + item.backdrop_path}
              }
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Text>{item.overview}</Text>
        </CardItem>
      </Card>
    </TouchableWithoutFeedback>
  );
}
