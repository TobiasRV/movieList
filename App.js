import React, { useState } from "react";
import {
  StyleSheet,
  StatusBar,
  Image,
  View,
  Platform,
  TextInput,
} from "react-native";
import { Container, Content, Icon, Input, Item } from "native-base";
import MovieList from "./app/components/MovieList";

export default function App() {
  const [value, setValue] = useState("");
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.headerImage}
            source={require("./app/assets/header-image.png")}
          />
        </View>
        <Content>
          <Item style={styles.textInput}>
            <Image
              style={{ width: 40, height: 40, marginRight: 10 }}
              source={require("./app/assets/claqueta.png")}
            />
            <TextInput
              style={{ fontSize: 20 }}
              placeholder="Search Movie"
              onChangeText={(text) => setValue(text)}
            />
          </Item>
          <MovieList text={value} />
        </Content>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    flex: 0.1,
    backgroundColor: "#FFFFFF",
  },
  headerImage: {
    flex: 1,
    width: "50%",
    height: "50%",
    marginLeft: "25%",
  },
  textInput: {
    flex: 1,
    marginRight: "10%",
    marginLeft: "10%",
    marginBottom: "5%",
    marginTop: "5%",
  },
});
