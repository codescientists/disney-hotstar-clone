import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper";

import ISO6391 from "iso-639-1";
import { Link } from "react-router-dom";

const Row = ({ movies }) => {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={30}
      navigation={true}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }}
      className={window.matchMedia("(max-width: 700px)").matches && "swiper-navigation-disabled"}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <Link to={`/movies/${movie.id}`} className="h-[14rem] md:h-[18rem] flex justify-center items-center rounded-md">
            <div className="group relative hover:scale-110 cursor-pointer duration-300">
              <img
                src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
                alt=""
                className="rounded-md"
                loading="lazy"
              />
              <div
                className={`hidden group-hover:flex flex-col absolute w-full bottom-0 px-2 py-4 duration-300 rounded-md`}
                style={{
                  background: "linear-gradient(0deg, black, transparent)",
                }}
              >
                <h6 className="text-sm font-semibold">{movie?.title}</h6>
                <p className="text-[11px]">
                  {ISO6391.getName(movie?.original_language)},{" "}
                  {movie?.release_date.slice(0, 4)}
                </p>
                <p className="text-[10px]">{movie.overview.slice(0, 100)}...</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))
      }
    </Swiper >
  );
};

export default Row;
