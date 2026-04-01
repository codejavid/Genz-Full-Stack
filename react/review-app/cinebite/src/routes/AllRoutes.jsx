import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import PrivateRoute from "../auth/PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <MovieList apiPath="movie/now_playing" />
          </PrivateRoute>
        }
      />

      <Route
        path="movie/:id"
        element={
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        }
      />

      <Route
        path="movie/popular"
        element={
          <PrivateRoute>
            <MovieList apiPath="movie/popular" />
          </PrivateRoute>
        }
      />

      <Route
        path="movie/top"
        element={
          <PrivateRoute>
            <MovieList apiPath="movie/top_rated" />
          </PrivateRoute>
        }
      />

      <Route
        path="movie/upcoming"
        element={
          <PrivateRoute>
            <MovieList apiPath="movie/upcoming" />
          </PrivateRoute>
        }
      />

      <Route
        path="search"
        element={
          <PrivateRoute>
            <Search apiPath="search/movie" />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};