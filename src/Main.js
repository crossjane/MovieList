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
    copyMoviess[division] = filteredMovies
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
    if(division === "upcoming"){
      const copyUpcomings =[...upcoming];
      const findUpcoming = copyUpcomings.find((movie) => movie.id === id);
      if(findUpcoming){
        findUpcoming.tempTitle = event.target.value;
      }
      setUpcoming(copyUpcomings);
   } else if (division === "nowPlayings"){
      const copyNowplayings =[...nowPlayings];
      const findNowplayings = copyNowplayings.find((movie) => movie.id === id);
      if(findNowplayings){
        findNowplayings.tempTitle = event.target.value;
      }
      setNowPlayings(copyNowplayings);
   } else if (division === "topRated"){
      const copyTopRated =[...topRated];
      const findTopRated = copyTopRated.find((movie) => movie.id === id);
      if(findTopRated){
        findTopRated.tempTitle = event.target.value;
      }
      setTopRated(copyTopRated);
    } else if (division === "popular"){
      const copyPopulars =[...popular];
      const findPopular = copyPopulars.find((movie) => movie.id === id);
      if(findPopular){
        findPopular.tempTitle = event.target.value;
      }
      setPopular(copyPopulars);
    }
    
  }


  function doneEditItem(id, division){
      if(division === "upcoming"){
        const copyUpcomings =[...upcoming];
        const findUpcoming = copyUpcomings.find((movie) => movie.id === id);
        if(findUpcoming){
          findUpcoming.title = findUpcoming.tempTitle;
          findUpcoming.isEdit = false;
        }
        setUpcoming(copyUpcomings);
    } else if (division === "nowPlayings"){
        const copyNowplayings =[...nowPlayings];
        const findNowplayings = copyNowplayings.find((movie) => movie.id === id);
        if(findNowplayings){
          findNowplayings.title = findNowplayings.tempTitle;
          findNowplayings.isEdit = false;
        }
        setNowPlayings(copyNowplayings);
    } else if (division === "topRated"){
        const copyTopRated =[...topRated];
        const findTopRated = copyTopRated.find((movie) => movie.id === id);
        if(findTopRated){
          findTopRated.title = findTopRated.tempTitle;
          findTopRated.isEdit = false;
        }
        setTopRated(copyTopRated);
      } else if (division === "popular"){
        const copyPopulars =[...popular];
        const findPopular = copyPopulars.find((movie) => movie.id === id);
        if(findPopular){
          findPopular.title = findPopular.tempTitle;
          findPopular.isEdit = false;
        }
        setPopular(copyPopulars);
      }
    }


    function clickCheckbox(id, division){
      if(division === "upcoming"){
        const copyUpcomings= [...upcoming];
        const findUpcoming = copyUpcomings.find((movie) =>movie.id === id  );
        if(!findUpcoming.isChecked){
          findUpcoming.isChecked = true;
        } else {
          findUpcoming.isChecked= false;
        }
        setUpcoming(copyUpcomings);
      }else if(division === "nowPlayings"){
        const copyNowplayings= [...nowPlayings];
        const findNowplayings = copyNowplayings.find((movie) =>movie.id === id  );
        if(!findNowplayings.isChecked){
          findNowplayings.isChecked = true;
        } else {
          findNowplayings.isChecked= false;
        }
        setNowPlayings(copyNowplayings);
      }else if(division === "topRated"){
        const copyTopRated= [...topRated];
        const findTopRated = copyTopRated.find((movie) =>movie.id === id  );
        if(!findTopRated.isChecked){
          findTopRated.isChecked = true;
        } else {
          findTopRated.isChecked= false;
        }
        setTopRated(copyTopRated);
      }else if(division === "popular"){
        const copyPopulars= [...popular];
        const findPopular = copyPopulars.find((movie) =>movie.id === id  );
        if(!findPopular.isChecked){
          findPopular.isChecked = true;
        } else {
          findPopular.isChecked= false;
        }
        setPopular(copyPopulars);
      }




     }

    function checkboxDelete(){
      const filteredUpcoming = upcoming.filter((movie) => !movie.isChecked);
      setUpcoming(filteredUpcoming);
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
