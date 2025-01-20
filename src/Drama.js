import React, { useEffect } from 'react';
import { useState } from 'react';
import DramaItem from './components/DramaItems';


function Drama(){

    const [airingToday, setAiringToday] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    
    async function initData() {
      const result = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today",
        {
          method: 'GET',
          headers:{
           "Content-Type" :"application/json",
         },
        }
       )
       const data = await result.json();
       //data가 객체?results?
       setAiringToday(data.results);
    }

    async function initData2() {
      const result = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air",
        {
          method: 'GET',
          headers:{
           "Content-Type" :"application/json",
     },
        }
       )
       const data = await result.json();
       setOnTheAir(data.results);
    }

    async function initData3() {
      const result = await fetch(
        "https://api.themoviedb.org/3/tv/popular",
        {
          method: 'GET',
          headers:{
           "Content-Type" :"application/json",
               },
        }
       )
       const data = await result.json();
       setPopular(data.results);
    }

    async function initData4() {
      const result = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated",
        {
          method: 'GET',
          headers:{
           "Content-Type" :"application/json",
               },
        }
       )
       const data = await result.json();
       setTopRated(data.results);
    }

    useEffect(() => {
      initData();
      initData2();
      initData3();
      initData4();
      },[]);

    return(
    <>
    <div className='MainGrid'>
        <h1>오늘 방영중</h1>
        <ul className="movieList">
            {airingToday.map((drama,index) =>  
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

        <h1>방송 중</h1>
        <ul className="movieList">
         {airingToday.map((drama,index) =>  
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

  


        <h1>인기 있는</h1>
        <ul className="movieList">
        {airingToday.map((drama,index) =>  
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


        <h1>최고 평점</h1>
        <ul className="movieList">
        {airingToday.map((drama,index) =>  
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
    </div>
    </>


    );

}

export default Drama;