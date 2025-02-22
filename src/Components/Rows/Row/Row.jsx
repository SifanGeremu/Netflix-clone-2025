import React, { useEffect, useState } from "react";
import "../Row/Row.css"
import axios from "../../../Utils/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function RowList({ title, fetchUrl, isLargeRow }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching from:", fetchUrl); // Debugging
        const request = await axios.get(fetchUrl);
        console.log("API Response:", request.data); // Debugging

        if (request.data && request.data.results) {
          setMovies(request.data.results);
        } else {
          console.error("Invalid API response:", request.data);
          setMovies([]); // Prevent errors if API response is empty
        }
      } catch (error) {
        console.error("API Fetch Error:", error);
        setMovies([]); // Prevent undefined state in case of an error
      }
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(Movie?.title || Movie?.original_name || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          }
        })
        .catch((error) => console.log("Trailer Fetch Error:", error));
    }
  };

  return (
    <div className="row">
      <h1>{title}</h1>

      {movies.length === 0 ? (
        <p>Loading...</p> // Show loading until movies are fetched
      ) : (
        <div className="row__posters">
          {movies.map((Movie) => (
            <img
              key={Movie.id}
              onClick={() => handleClick(Movie)} // ✅ Use correct variable
              className={`rowposter ${isLargeRow ? "rowposterLarge" : ""}`}
              src={`${baseURL}${
                isLargeRow ? Movie.poster_path : Movie.backdrop_path
              }`}
              alt={Movie.name || Movie.title}
            />
          ))}
        </div>
      )}

      <div className="row__youtube">
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default RowList;
