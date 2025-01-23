import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import MovieItem from "./components/MovieItem";
import MovieList from "./components/MovieList";
import "./App.css";

function Main() {
  const [nowPlayings, setNowPlayings] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempTitle, setTempTitle] = useState("");
  const [editId, setEditId] = useState();

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

  function deleteItem(id, division){
    if(division === "upcoming") {
      const filteredUpcoming = upcoming.filter((movie) => movie.id !== id);
    setUpcoming(filteredUpcoming);
    } else if(division === "nowPlayings"){
      const filteredNowplayings = nowPlayings.filter((movie) => movie.id !== id);
      setNowPlayings(filteredNowplayings);
    } else if(division === "topRated"){
      const filteredTopRated = topRated.filter((movie) => movie.id !== id);
      setTopRated(filteredTopRated);
    } else if(division === "popular"){
      const filteredPopular = popular.filter((movie) => movie.id !== id);
      setPopular(filteredPopular);
    }
  }


  function editItem(id,title){
    console.log("1221");
    const copyNowplayings =[...nowPlayings];
    const updatedNowplayings = copyNowplayings.map((movie) => movie.id === id ?
    {...movie, isEdit: true}
  : {...movie, isEdit: false} 
  );
   setNowPlayings(updatedNowplayings);
    setEditId(id);
    setTempTitle(title);
    
 
  }

  function onChangeInput(event){
    setTempTitle(event.target.value);
  }


  function doneEditItem(id){
    const copyNowplayings = [...nowPlayings];
    const findIndex= copyNowplayings.findIndex((movie) => movie.id === id);
    if(findIndex !== -1){
      copyNowplayings[findIndex].title = tempTitle;
    }
    setNowPlayings(copyNowplayings);
    setIsEdit(false);
  }

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
            <MovieList tempTitle={tempTitle} doneEditItem={doneEditItem} onChangeInput={onChangeInput} isEdit={isEdit} editItem={editItem} deleteItem={deleteItem} subTitle={"상영예정 영화"} movies={upcoming} division={"upcoming"}/> 
            <MovieList tempTitle={tempTitle} doneEditItem={doneEditItem} onChangeInput={onChangeInput} isEdit={isEdit} editItem={editItem} deleteItem={deleteItem} subTitle={"이달의 영화"} movies={nowPlayings} division={"nowPlayings"}/> 
            <MovieList tempTitle={tempTitle} doneEditItem={doneEditItem} onChangeInput={onChangeInput} isEdit={isEdit} editItem={editItem} deleteItem={deleteItem} subTitle={"유명한 영화"} movies={popular} division={"popular"} /> 
            <MovieList tempTitle={tempTitle} doneEditItem={doneEditItem} onChangeInput={onChangeInput} isEdit={isEdit} editItem={editItem} deleteItem={deleteItem} subTitle={"평점 높은 영화"} movies={topRated} division={"topRated"}/> 
        </div>
      </div>
    </>
  );
}

export default Main;
