import React from "react";
import { Route, Routes } from "react-router-dom";
import Mohome from "./Mohome";
import Moabout from "./Moabout";
import Momenu from "./Momenu";
import Mocontact from "./Mocontact";

import App from './App';


const Movie = () =>{
    return(
        <>
        <Momenu/><br/>
        <Routes>
            <Route path = '/' element = {<Mohome/>}/>
            <Route path = '/about' element = {<Moabout/>}/>
            <Route path = '/contact' element = {<Mocontact/>}/>
            <Route path = '/search' element = {<App/>}/>
        </Routes>
        </>
    )
}

export default Movie;