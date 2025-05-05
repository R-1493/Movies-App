import React from "react";
import { useNavigate } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

function MoviesCard({ movie }) {
  if (!movie) return null;
  const navigate = useNavigate();
  const { id, title, poster_path, overview } = movie;

  return (
    <div
      className="relative group rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={() => navigate(`/details/${id}`)}
    >
      <div className="relative h-80">
        <img
          src={poster_path ? `${IMG_API}${poster_path}` : defaultImage}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = defaultImage;
          }}
        />
      </div>

      <div className="p-4 bg-[#080F36]">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
      </div>

      <div className="absolute right-0 bottom-0 left-0 bg-white bg-opacity-80 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex flex-col justify-end items-center text-center p-4">
        <h4 className="text-black text-lg font-semibold">Overview</h4>
        <p className="text-black text-sm">
          {overview || "No overview available."}
        </p>
      </div>
    </div>
  );
}

export default MoviesCard;
