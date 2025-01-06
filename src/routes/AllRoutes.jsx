import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, PageNotFound, Search } from "../pages";

import Signup from "../auth/Signup";
import Signin from "../auth/Signin";

import PrivateRoute from "../auth/PrivateRoute";

export const AllRoutes = () => {

    return(
        <Routes>

            <Route path="signin" element={<Signin/>}/>

            <Route path="signup" element={<Signup/>}/>

            <Route path="/" element={
                <PrivateRoute>
                    <MovieList apiPath="movie/now_playing" title="Home"/>
                </PrivateRoute>
            }/>
            <Route path="movie/:id" element={
                <PrivateRoute>
                    <MovieDetails/>
                </PrivateRoute>
            }/>
            <Route path="movies/popular" element={
                <PrivateRoute>
                    <MovieList apiPath="movie/popular" title="Popular"/>
                </PrivateRoute>
            }/>
            <Route path="movies/top" element={
                <PrivateRoute>
                    <MovieList apiPath="movie/top_rated" title="Top"/>
                </PrivateRoute>
            }/>
            <Route path="movies/upcoming" element={
                <PrivateRoute>
                    <MovieList apiPath="movie/upcoming" title="Upcoming"/>
                </PrivateRoute>
            }/>
            <Route path="search" element={
                <PrivateRoute>
                    <Search apiPath="search/movie"/>
                </PrivateRoute>
            }/>
            
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )

}