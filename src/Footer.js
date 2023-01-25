import React from "react";
import '../src/components/flip.css'


const Footer = () =>{

    var year = new Date().getFullYear();

    return(
        <>
        <div className="footer">
            <footer><p> © Deepak {year}</p></footer>
        </div>
        </>
    )
}

export default Footer;