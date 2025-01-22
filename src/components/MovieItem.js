import React from "react";

const MovieItem = ({
    poster_path, 
    title, 
    release_date, 
    vote_average, 
    overview, 
    index, 
    deleteItem, 
    editItem, 
    isEdit, 
    onChangeInput, 
    doneEditItem,
    tempTitle,
    division
})=> {
    return (

        <li className="movieList-li">
            <button onClick={()=>deleteItem(index, division)}>삭제</button>
            <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={title}
                style={{
                width: "500px",
                aspectRatio: 1,
                borderRadius: "8px",
                marginTop: "20px",
                }}
            />

             { isEdit? (
            <>
                <input 
                    value={tempTitle}
                    onChange={onChangeInput}
                />
                <button onClick={doneEditItem}>완료</button>

            </>
                
              ) : (
                <>
             <p>{title}</p>
             <button onClick={( ) => editItem(index, title)} >수정</button>
             </>
                     ) 
            }

            
            
           

            
            <p>개봉 일자: {release_date}</p>
            <p>관객 평: {vote_average}</p>
            <p>{overview}</p>
            </li>
        )
    
};

export default MovieItem;