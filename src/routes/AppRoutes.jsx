import React from "react";
import { Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Pokemon from "../pages/Pokemon";
import PokemonDetails from "../pages/PokemonDetails";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element = { <Home/> } />
            <Route path="/pokemon" element = { <Pokemon/>} />
            <Route path="/pokemon/:name" element = { <PokemonDetails/>} />

        </Routes>
    )
}

export default AppRoutes;