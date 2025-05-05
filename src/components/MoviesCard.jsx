import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Corrected import of useAuth hook

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

function MoviesCard({ movie }) {
  if (!movie) return null;

  const { id, title, poster_path, vote_average, overview } = movie;
  const { currentUser } = useAuth(); // Using useAuth hook instead of AuthContext
  const navigate = useNavigate();

  const getVoteClass = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div
      className="relative group rounded-lg overflow-hidden shadow-lg"
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
      <div className="p-4 bg-[#080F36] flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>

        {currentUser && vote_average && (
          <span
            className={`tag ${getVoteClass(
              vote_average
            )} text-white font-semibold py-1 px-2 rounded-md`}
          >
            {vote_average.toFixed(1)}
          </span>
        )}
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
