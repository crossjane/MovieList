import React, {  useEffect } from "react";
import { useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";


function Main() {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const [movies, setMovies] = useState({
    nowPlayings:[],
    popular:[],
    topRated:[],
    upcoming:[]
  });
  

  async function initData() {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=ko-KR",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      }
    );
    const data = await result.json();
  //배열 -> 반복문
    for(let i = 0; i < data.results.length; i++){
       data.results[i].isEdit = false;
       data.results[i].tempTitle = "";
       data.results[i].isChecked = false;
     }


    return new Promise(function(resolve,reject){
          resolve(data.results);
    })

  }

  async function initData2() {
    const result = await fetch("https://api.themoviedb.org/3/movie/popular?language=ko-KR", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${process.env.REACT_APP_API_KEY}`,

      },
    });
    const data = await result.json();
    for(let i = 0; i < data.results.length; i++){
      data.results[i].isEdit = false;
      data.results[i].tempTitle = "";
      data.results[i].isChecked = false;
    }

    return new Promise(function(resolve, reject){
        resolve(data.results);
    })
    
  }

  async function initData3() {
    const result = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=ko-KR", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const data = await result.json();
    for(let i = 0; i < data.results.length; i++){
      data.results[i].isEdit = false;
      data.results[i].tempTitle = "";
      data.results[i].isChecked = false;
    }

    return new Promise(function(resolve,reject){
        resolve(data.results);
    })
  }

  async function initData4() {
    const result = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=ko-KR", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
        `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    });
    const data = await result.json();
    for(let i = 0; i < data.results.length; i++){
      data.results[i].isEdit = false;
      data.results[i].tempTitle = "";
      data.results[i].isChecked = false;
    }
    return new Promise(function(resolve,reject){
      resolve(data.results);
    })
  }

    function deleteItem(id, division){
      const filteredMovies = movies[division].filter((movie) => movie.id !== id);
      const copyMoviess = {...movies}
      // copyMoviess[division] = filteredMovies
      setMovies(copyMoviess);
      
    }


  //주소값이 기떄문에.. 참조해서 만 쓴것. 
  function editItem(id,title, division){
    const copyMovies = {...movies};
    const findMovieIndex = copyMovies[division].findIndex((movie) => movie.id === id);
    if(findMovieIndex !== -1) {
      const copyFindMovie = {...copyMovies[division][findMovieIndex]};

      copyFindMovie.isEdit = true;
      copyFindMovie.tempTitle = title;
      copyMovies[division][findMovieIndex] = copyFindMovie;
      setMovies(copyMovies);
    
    }
  

   
  }

  function onChangeInput(event, id, division){

    const copyMovies = {...movies};
    const findMovieIndex= copyMovies[division].findIndex((movie) => movie.id === id);
    if (findMovieIndex !== -1){
      copyMovies[division][findMovieIndex].tempTitle = event.target.value;
    }
    setMovies(copyMovies);

  // 객체를 복사 -> 해당 인덱스를 찾음 -> 해당인덱스가 있다면 -> 해당 인덱스의 특정(division) 객체를 복사함 -> 그럼 그 객체의 tempTile로 들어가서 이벤트를 발생시킴-> 그 변경된
 
    
  }


  function doneEditItem(id, division){

    const copyMovies = {...movies};
    const findMovieIndex = copyMovies[division].findIndex((movie) => movie.id === id);
    if(findMovieIndex !== -1){
      const copyFindMovie = {...movies[division][findMovieIndex]};

      copyFindMovie.title = copyFindMovie.tempTitle;
      copyFindMovie.isEdit = false;
      
      copyMovies[division][findMovieIndex] = copyFindMovie;


    }
    setMovies(copyMovies);
   
    }


    function clickCheckbox(id, division){
      const copyMovies = {...movies};
      const findMovieIndex = copyMovies[division].findIndex((movie) => movie.id === id);
      if(findMovieIndex !== -1){
        const copyFindMovie = {...movies[division][findMovieIndex]};
        
      // toggle 기능 !! 상태에 반대로 설정해줌!!!
        copyFindMovie.isChecked = !copyFindMovie.isChecked;
        copyMovies[division][findMovieIndex] = copyFindMovie;
    
      }
      setMovies(copyMovies);
      
     }

    function checkboxDelete(division){
      const copyMovies = {...movies};
      const filteredMovies = copyMovies[division].filter((movie) => !movie.isChecked);
      copyMovies[division]  = filteredMovies;
      setMovies(copyMovies);

    }




   async function init(){
    const nowPlaying = await initData();
    const popular = await initData2();
    const topRated = await initData3();
    const upcoming = await initData4();

    const copyMovies = {...movies};
    copyMovies.nowPlayings = nowPlaying;
    copyMovies.popular = popular;
    copyMovies.topRated = topRated;
    copyMovies.upcoming = upcoming;

    setMovies(copyMovies);
   }


  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <div className="Mainbody">
        <div style={{ display: "flex", flexDirection: "column" }}>
            <MovieList  checkboxDelete={checkboxDelete} clickCheckbox={clickCheckbox} doneEditItem={doneEditItem} onChangeInput={onChangeInput}  editItem={editItem} deleteItem={deleteItem} subTitle={"상영예정 영화"} movies={movies.upcoming} division={"upcoming"}/> 
            <MovieList  checkboxDelete={checkboxDelete} clickCheckbox={clickCheckbox} doneEditItem={doneEditItem} onChangeInput={onChangeInput}  editItem={editItem} deleteItem={deleteItem} subTitle={"이달의 영화"} movies={movies.nowPlayings} division={"nowPlayings"}/> 
            <MovieList  checkboxDelete={checkboxDelete} clickCheckbox={clickCheckbox} doneEditItem={doneEditItem} onChangeInput={onChangeInput}  editItem={editItem} deleteItem={deleteItem} subTitle={"유명한 영화"} movies={movies.popular} division={"popular"} /> 
            <MovieList  checkboxDelete={checkboxDelete} clickCheckbox={clickCheckbox} doneEditItem={doneEditItem} onChangeInput={onChangeInput}  editItem={editItem} deleteItem={deleteItem} subTitle={"평점 높은 영화"} movies={movies.topRated} division={"topRated"}/> 
        </div>
      </div>
    </>
  );
}

export default Main;
