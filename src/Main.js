import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import MovieItem from "./components/MovieItem";
import MovieList from "./components/MovieList";


function Main() {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  async function initData() {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
           },
      }
    );
    const data = await result.json();
    setNowPlayings(data.results);
  }

  async function initData2() {
    const result = await fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       },
    });
    const data = await result.json();
    setPopular(data.results);
  }

  async function initData3() {
    const result = await fetch("https://api.themoviedb.org/3/movie/top_rated", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       },
    });
    const data = await result.json();
    setTopRated(data.results);
  }

  async function initData4() {
    const result = await fetch("https://api.themoviedb.org/3/movie/upcoming", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

  return (
    <>
      <div className="Mainbody">
        <div style={{ display: "flex", flexDirection: "column" }}>
            <MovieList subTitle={"상영예정 영화"} movies={upcoming}/> 
            <MovieList subTitle={"이달의 영화"} movies={nowPlayings}/> 
            <MovieList subTitle={"유명한 영화"} movies={popular}/> 
            <MovieList subTitle={"평점 높은 영화"} movies={topRated}/> 
        </div>
      </div>
    </>
  );
}

export default Main;
