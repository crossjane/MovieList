import React from "react";

const DramaItem = ({name, poster_path, first_air_date, vote_average, overview}) => {
    return(   
        <li className="movieList-li">
            <p>{name}</p>
            <img 
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={name}
            style={{ width: '50%', borderRadius: '8px' , marginTop: '20px'}}
            />
        <div className='textContainer'>
            <p>방영 시작: {first_air_date}</p>
            <p>관객 평: {vote_average}</p>
            <p>{overview}</p>
        </div>
        </li>
        )} ;  
    

export default DramaItem;