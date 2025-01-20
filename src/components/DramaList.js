import React from "react";
import DramaItem from "./DramaItems";

const DramaList = ({subTitle, dramas}) =>{
    return(
    <>
    <h1>{subTitle}</h1>

    { dramas&&dramas.length > 0 ? 
     (
        <ul className="movieList">
        {dramas.map((drama,index) =>  
        <DramaItem 
          key={index}
          name={drama.name}
          poster_path={drama.poster_path}
          first_air_date={drama.first_air_date}
          vote_average={drama.vote_average}
          overview={drama.overview}
        />
        )}
        </ul>
        ) :
    <p>로딩중...</p>
    }
    
    </>
      
    )

  
   
}

export default DramaList;