import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Image,
  StatusBar,
  Platform,
  View,
  SafeAreaView,
  Button,
} from "react-native";
import { Input } from "react-native-elements";
import MovieList from "./components/movieList";

export default function HomeScreen({ navigation }) {
  const [value, setValue] = useState("");
  let searchWaiting = 0;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 300, height: 80 }}
        source={require("../../assets/header-image.png")}
      />
      <ScrollView style={{ width: "100%", height: "100%", marginBottom: 20 }}>
        <View style={{ paddingLeft: 30, paddingRight: 30 }}>
          <Input
            placeholder="Search Movie"
            leftIcon={{ type: "font-awesome", name: "film" }}
            inputStyle={{ marginLeft: 10 }}
            onChangeText={(text) => {
              if (searchWaiting) clearTimeout(searchWaiting);
              searchWaiting = setTimeout(() => {
                searchWaiting = null;
                setValue(text);
              }, 1000);
            }}
          />
        </View>
        <MovieList text={value} navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    ...Platform.select({
      ios: {},
      android: {
        paddingTop: StatusBar.currentHeight,
      },
      default: {
        marginRight: "20%",
        marginLeft: "20%",
      },
    }),
  },
});
