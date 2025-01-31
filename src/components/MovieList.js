import React, { Fragment } from "react";
import MovieItem from "./MovieItem";

const MovieList = ({subTitle, movies, deleteItem, editItem, onChangeInput, editId, doneEditItem, division, checkboxDelete, clickCheckbox})=>{
    return (
        <Fragment>
        <h1>{subTitle}</h1>
        <button onClick={()=>checkboxDelete()}>삭제</button>
        {
            movies&&movies.length > 0? (
                <ul
                style={{
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "scroll",
                  padding: 0,
                  gap: "20px",
                }}
              >
                {movies.map((movie, index) => (
                  <MovieItem
                  key={index}
                  poster_path={movie.poster_path} 
                  title ={movie.title} 
                  release_date={movie.release_date} 
                  vote_average={movie.vote_average} 
                  overview={movie.overview}
                  deleteItem ={deleteItem}
                  id={movie.id}
                  editItem={editItem}
                  isEdit={movie.isEdit}
                  onChangeInput={onChangeInput}
                  doneEditItem={doneEditItem}
                  tempTitle={movie.tempTitle}
                  division={division}
                  editId={editId}
                  clickCheckbox={clickCheckbox}
                  />
                ))}
              </ul>
            ): <p>로딩중...</p>
        }
       
        </Fragment>
    );
}

export default MovieList;