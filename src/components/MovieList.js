import React, { Fragment } from "react";
import MovieItem from "./MovieItem";

const MovieList = ({subTitle, movies, deleteItem, editItem, isEdit, onChangeInput, doneEditItem, tempTitle, division})=>{
    return (
        <Fragment>
        <h1>{subTitle}</h1>
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
                  isEdit={isEdit}
                  onChangeInput={onChangeInput}
                  doneEditItem={doneEditItem}
                  tempTitle={tempTitle}
                  division={division}
                  />
                ))}
              </ul>
            ): <p>로딩중...</p>
        }
       
        </Fragment>
    );
}

export default MovieList;