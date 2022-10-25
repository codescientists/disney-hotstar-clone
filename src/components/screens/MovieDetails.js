import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ISO6391 from "iso-639-1";
import Row from "../Row";
import axios from "axios";
const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [similarMovies, setSimilarMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      axios
        .all([
          axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`
          ),
          axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`
          ),
        ])
        .then(
          axios.spread((...responses) => {
            const details = responses[0].data;
            const simMovies = responses[1].data.results;

            setMovie(details);
            setSimilarMovies(simMovies);
          })
        )
        .catch(function (error) {
          console.log(error);
        })
    };

    fetchData();
  }, [movieId]);

  return (
    <>
      <div className="h-[30rem] w-full flex justify-center items-center">
        <div className="bg-gray-800 h-[30rem] w-[80rem] flex justify-between flex-col-reverse md:flex-row relative">
          <div
            className="flex flex-col p-14 md:p-28 absolute md:relative w-full"
            style={{
              background: "linear-gradient(0deg, black, transparent)",
            }}
          >
            <h2 className="text-3xl font-bold">{movie?.title}</h2>
            <p className="my-2 font-semibold text-gray-300">
              <span>{ISO6391.getName(movie?.original_language)}</span>
              <span className="mx-2">&#x2022;</span>
              <span>{(movie?.genres)?.map((genre) => (`${genre.name},`))}</span>
            </p>
            <p className="text-lg text-gray-200">{movie?.overview}</p>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt="Thor Love and Thunder"
            className="h-full"
          />
        </div>
      </div>
      <div className="mx-10 my-8">
        <h2 className="text-2xl font-bold mt-10">More Like This</h2>
        <Row movies={similarMovies} />
      </div>
    </>
  );
};

export default MovieDetails;
