import React, { useCallback, useEffect } from 'react';
import {useState} from 'react';


function Main(){

    const [nowPlayings, setNowPlayings] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upcoming, setUpcoming] = useState([]);

    async function initData() {
      const result = await fetch("https://api.themoviedb.org/3/movie/now_playing", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
         }
      });
      const data = await result.json();
      setNowPlayings(data.results);
    }
    

    async function initData2(){
      const result = await fetch("https://api.themoviedb.org/3/movie/popular", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          }
      });
      const data = await result.json();
      setPopular(data.results);
    }

    async function initData3(){
      const result = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          }
      });
      const data = await result.json();
      setTopRated(data.results);
    }


    async function initData4(){
      const result = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          }
      });
      const data = await result.json();
      setUpcoming(data.results);
    }


    
    //마운트가 됐을때 가장 먼저 실행되게 쓰는함수수
    useEffect(() => {
      initData();
      initData2();
      initData3();
      initData4();
    }, []);
    



    return(
    <>
    <div className='MainGrid'>
        <h1>이달의 영화</h1>
        <ul className="movieList">
            {nowPlayings.map((movie,index) =>  
            <li className="movieList-li" key={index}>
                <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '50%', borderRadius: '8px' , marginTop: '20px'}}
                />
            <p>{movie.title}</p>
            <p>개봉 일자: {movie.release_date}</p>
            <p>관객 평: {movie.vote_average}</p>
            <p>{movie.overview}</p>
            </li>
            )}
        </ul>



    </div>
    </>
    );

}

export default Main;