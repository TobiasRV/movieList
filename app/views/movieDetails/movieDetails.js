import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  Platform,
  Button,
} from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function MovieDetails({ route, navigation }) {
  const movieId = route.params.movieId;

  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=ead8068ec023b7d01ad25d135bf8f620&language=en-US`
    )
      .then((response) => response.json())
      .then((json) => setMovie(json))
      .catch((err) => {
        console.log(err.message);
      });
  }, [movieId]);

  const genresArray = movie.genres || [];

  function renderButton() {
    if (Platform.OS === "web")
      return (
        <Button title={"Go Back"} onPress={() => navigation.goBack()}></Button>
      );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: 300, height: 80 }}
        source={require("../../assets/header-image.png")}
      />
      <ScrollView>
        <Card>
          <Card.Title style={styles.text}>{movie.original_title}</Card.Title>
          <Card.Image
            source={
              movie.backdrop_path == null
                ? require("../../assets/image-not-found.png")
                : Platform.OS === "web"
                ? {
                    uri:
                      "https://image.tmdb.org/t/p/original/" +
                      movie.backdrop_path,
                  }
                : {
                    uri:
                      "https://image.tmdb.org/t/p/w780/" + movie.backdrop_path,
                  }
            }
            style={styles.image}
          />
          <Card.Divider style={{ marginTop: 20 }} />

          <Text>
            <Text style={styles.bold}>Original Title: </Text>
            <Text>{movie.original_title + "\n"}</Text>
          </Text>

          <Text>
            <Text style={styles.bold}>Overview: </Text>
            <Text>{movie.overview + "\n"}</Text>
          </Text>

          <Text>
            <Text style={styles.bold}>Genres:</Text>
            {genresArray.map((genre, i) => {
              return <Text key={i}>{"\n" + genre.name}</Text>;
            })}
          </Text>

          <Text>
            <Text style={styles.bold}>{"\n"}Release Date: </Text>
            <Text>{movie.release_date + "\n"}</Text>
          </Text>

          <Text>
            <Text style={styles.bold}>Runtime: </Text>
            <Text>{movie.runtime + " min \n"}</Text>
          </Text>

          <Text>
            <Text style={styles.bold}>Rating: </Text>
            <Text>{movie.vote_average + "\n"}</Text>
          </Text>

          {renderButton()}
        </Card>
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
  image: {
    ...Platform.select({
      ios: {
        height: 160,
        width: null,
      },
      android: {
        height: 160,
        width: null,
      },
      default: {
        height: 500,
      },
    }),
  },
  text: {
    ...Platform.select({
      ios: {
        marginTop: 10,
        fontSize: 15,
      },
      android: {
        marginTop: 10,
        fontSize: 15,
      },
      default: {
        marginTop: 10,
        fontSize: 20,
      },
    }),
  },
  errorImage: {
    ...Platform.select({
      ios: {
        height: 200,
        width: null,
      },
      android: {
        height: 200,
        width: null,
      },
      default: {
        height: 600,
      },
    }),
  },
  bold: {
    fontWeight: "bold",
  },
});
