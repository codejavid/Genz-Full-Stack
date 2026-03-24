import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";


export const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={
                <MovieList apiPath="movie/now_playing"/>
            }/>
            <Route path="movie/:id" element={
                <MovieDetails/>
            }/>
            <Route path="movie/popular" element={
                <MovieList apiPath="movie/popular"/>
            }/>
            <Route path="movie/top" element={
                <MovieList apiPath="movie/top_rated"/>
            }/>
             <Route path="movie/upcoming" element={
                <MovieList apiPath="movie/upcoming"/>
            }/>
             <Route path="search" element={
                <Search/>
            }/>
             <Route path="*" element={
                <PageNotFound/>
            }/>
        </Routes>
    )


}