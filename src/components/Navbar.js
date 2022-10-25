import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const signOutUser = () => {
    auth.signOut();
    navigate(0);
  };

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-col md:flex-row flex-wrap justify-between items-center">
        <div className="flex items-center justify-between w-full">
          <a href="/" className="flex items-center">
            <img
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              alt="LOGO"
              className="w-24"
            />
          </a>
          <div
            className={`${
              navToggle ? "visible" : "hidden"
            } md:block w-48 md:w-full mx-5 fixed top-10 right-0 z-10 md:static md:top-0`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-md md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0 dark:text-white"
                >
                  TV
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Movies
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Sports
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Disney +
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Kids
                </a>
              </li>
            </ul>
          </div>
          <div className="flex">
            <button
              type="button"
              className="inline-flex items-center justify-center h-10 w-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mx-4"
            >
              <FaSearch />
            </button>

            {user ? (
              <div className="group">
                <button
                  className="text-white border border-2 text-gray-300 rounded-full font-medium rounded-lg text-sm h-10 w-10 text-center inline-flex items-center justify-center"
                  type="button"
                >
                  <FaUser />
                </button>

                <div
                  id="dropdown"
                  className={`group-hover:block hidden p-1 z-10 w-44 bg-gray-800 divide-y divide-gray-100 fixed right-5`}
                >
                  <ul className="text-sm text-gray-700 dark:text-gray-200">
                    <li>
                      <button
                        className={`py-2 px-4 w-full  hover:bg-gray-900 dark:hover:bg-gray-900 dark:hover:text-white`}
                        onClick={() => signOutUser()}
                      >
                        Sign out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <a
                  href="/signup"
                  className="inline-flex items-center bg-blue-800 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700 text-sm font-semibold tracking-wide rounded mx-2"
                >
                  SUBSCRIBE
                </a>
                <a
                  href="/login"
                  className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-sm font-semibold tracking-wide hidden md:block"
                >
                  LOGIN
                </a>
              </div>
            )}
            <button
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={() => {
                setNavToggle(!navToggle);
              }}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
