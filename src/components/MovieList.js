import React, { Fragment, useRef} from "react";
import MovieItem from "./MovieItem";

const MovieList = ({subTitle, 
      movies, 
      deleteItem, 
      editItem, 
      onChangeInput, 
      editId, 
      doneEditItem, 
      division, 
      checkboxDelete, 
      clickCheckbox
    })=>{

      const listRef = useRef(null);

      const scrollLeft= ()=>{
        if(listRef.current){
          listRef.current.scrollLeft -=1000;
        }
      };

      const scrollRight = () => {
        if(listRef.current){
          listRef.current.scrollLeft += 1000;
        }
      };


      

    return (
        <Fragment>
        <div className="division-container">
          <h1>{subTitle}</h1>
          <button className="delete-btn" onClick={()=>checkboxDelete(division)}>
            <img src="/img/delete_btn.svg" alt="Eelete" />
          </button>
        </div>

        <div className="carousel-container">
          <button className="scroll-btn left" onClick={scrollLeft}>
            <img src="/img/arrow_left.svg" alt="Left Arrow" />
          </button>
        {
            movies&&movies.length > 0? (
                <ul className="movieList"  ref={listRef}>
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
                  isChecked={movie.isChecked}
                  />
                
                ))}
              </ul>
            ): <p>로딩중...</p>
          } <button className="scroll-btn right" onClick={scrollRight}>
            <img src="/img/arrow_right.svg" alt="Right Arrow" />
          </button>
       </div>
        </Fragment>
    );
}

export default MovieList;