import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ISO6391 from "iso-639-1";
import genres from "../constants/genres";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Banner = ({ movies }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      spaceBetween={100}
      slidesPerView={1}
      navigation={true}
      loop={true}
      scrollbar={{ draggable: true }}
    >
      {movies.slice(0, 5).map((movie) => (
        <SwiperSlide key={movie.id}>
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
                  <span>
                    {
                      genres.find(function getGenre(genre) {
                        return genre.id === movie.genre_ids[0];
                      }).name
                    }
                  </span>
                </p>
                <p className="text-lg text-gray-200">
                  {movie.overview.slice(0, 100)}...
                </p>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt="Thor Love and Thunder"
                className="h-full"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
