import React from 'react';
import '../src/components/flip.css';
import Team from '../src/components/team';
import Footer from './Footer';

const Moabout = () =>{
 
    return ( <>
        <div className='main'>
        <h1 className = "display-6 text-center">Movie Recommendation Web-App</h1>
        <div className = "p-3 mb-2 bg-dark text-light">
        <p className = "lead text-justify">Movie Search Destination is a free web-based film recommendation service. It gives some recommendation based on you search.
        About site and How it works:
        Now days peoples watching movies to make their busy life calm , watching movie is not that easy as it takes a lot of 
        time to select a movie due to large data set of movies exist in the world and it is very difficult and time consuming process to 
        people to select a movie due to large data set but we can achieve this with the help of movie recommendation system using 
        content based filtering ,where this recommendation system recommend a movie to the user based on the content he/she is 
        watching..</p>
    </div>
    <h2 className = "p-3 mb-2 display-6 text-center text-dark">Myself</h2>

    {Team.map((value) =>{
        return(
         <div class="container d-flex align-items justify-content-center flex-wrap">
         <div class="box">
             <div class="body">
                 <div class="imgContainer">
                     <img src={value.imgsrc} alt="img"/>
                 </div>
                 <div class="content d-flex flex-column align-items-center justify-content-center">
                     <div>
                         <h3 class="text-black fs-5">{value.name}</h3>
                         <p class="fs-6 text-black">{value.des}</p>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     
    )})}
    </div>
   <Footer/>
        </>
        )
}
 
export default Moabout;
 

