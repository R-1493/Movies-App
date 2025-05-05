import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Switch from "./Switch";

const Navbar = () => {
  const { currentUser, logOut } = useAuth(); // Changed from useContext to useAuth

  return (
    <nav className="bg-neutral-100 dark:bg-gray-900 py-3 dark:text-white w-full">
      <div className="flex w-full flex-wrap items-center justify-between px-6">
        <Link className="pr-2 text-2xl font-semibold" to="/">
          React Movie App
        </Link>
        <div className="relative flex items-center">
          {currentUser && (
            <h5 className="mr-2 capitalize">
              {currentUser.displayName || currentUser.email}
            </h5>
          )}
          <Switch />
          <img
            class="h-8 w-8 rounded-full"
            src="data:image/png;base64,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"
          />
          <div className="relative">
            <ul className="absolute left-auto right-0 z-[1000] float-left m-0 mt-1 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700">
              {!currentUser ? (
                <>
                  <li>
                    <Link
                      className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <span
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-white/30"
                    role="button"
                    onClick={() => logOut()}
                  >
                    Logout
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
