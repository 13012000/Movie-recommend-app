import React from 'react';
import Banner from '../src/components/Banner';
import SData from '../src/components/Sdata';
import MovieList1 from './components/MovieList1';



const Mohome = () =>{
    
    return (<> 
    
   <Banner/>
   <div class="p-2 my-3 bg-dark text-light"><h2 className = "lead display-5 text-center">Some Personal Recommendations For You</h2></div>
   
   {SData.length === 0 ?
        <div className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
    </div>: 
    SData.map((val) =>{
        return (
         
        <MovieList1
        key={val.id}
        imgsrc = {val.imgsrc}
        title= {val.title}
        sname = {val.sname}
        link = {val.links}
        />  
        )
 
    })
    }
   
 
</>)
}
 
export default Mohome;
 

