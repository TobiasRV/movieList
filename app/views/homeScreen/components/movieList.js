import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { Card } from "react-native-elements";

export default function MovieList({ text, navigation }) {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    if (text == "") {
      fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=ead8068ec023b7d01ad25d135bf8f620&language=en-US&page=1"
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setMovieList(responseJson.results);
        })
        .catch((err) => {
          setMovieList(err.message);
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
          setMovieList(err.message);
        });
    }
  }, [text]);

  var cardList = [];
  if (movieList != undefined) {
    movieList.forEach((movie) => {
      cardList.push(
        <TouchableWithoutFeedback
          key={movie.id}
          onPress={() => {
            navigation.navigate("MovieDetails", { movieId: movie.id });
          }}
        >
          <Card>
            <Card.Title style={styles.text}>{movie.original_title}</Card.Title>
            <Card.Image
              source={
                movie.backdrop_path == null
                  ? require("../../../assets/image-not-found.png")
                  : Platform.OS === "web"
                  ? {
                      uri:
                        "https://image.tmdb.org/t/p/original/" +
                        movie.backdrop_path,
                    }
                  : {
                      uri:
                        "https://image.tmdb.org/t/p/w780/" +
                        movie.backdrop_path,
                    }
              }
              style={styles.image}
            />
            <Card.Divider style={{ marginTop: 20 }} />
            <Text style={styles.text}>{movie.overview}</Text>
          </Card>
        </TouchableWithoutFeedback>
      );
    });
  }

  if (cardList.length > 0) return cardList;
  else
    return (
      <Card>
        <Card.Title style={styles.text}>UPPPSSS</Card.Title>
        <Card.Image
          source={require("../../../assets/movie-not-found.png")}
          style={styles.errorImage}
        />
      </Card>
    );
}

const styles = StyleSheet.create({
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
});
