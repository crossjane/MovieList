import React from "react";

const MovieItem = ({
    poster_path, 
    title, 
    release_date, 
    vote_average, 
    overview, 
    id, 
    deleteItem, 
    editItem, 
    onChangeInput, 
    doneEditItem,
    tempTitle,
    division,
    editId,
    isEdit,
    clickCheckbox,
    isChecked
})=> {
    return (


        <li className="movieList-li">
            <button onClick={()=>deleteItem(id, division)}>삭제</button>
            <input
                type="checkbox"
                className="checkbox"
                onChange={()=>clickCheckbox(id)}
                checked={isChecked}
            />
            <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={title}
                style={{
                width: "300px",
                aspectRatio: 1,
                borderRadius: "8px",
                marginTop: "20px",
                height: "450px"
                }}
            />

             { isEdit? (
            <>
                <input 
                    value={tempTitle}
                    onChange={(event) => onChangeInput(event, id, division)}
                />
                <button onClick={()=>doneEditItem(id, division)}>완료</button>

            </>
                
              ) : (
                <>
             <p>{title}</p>
             <button onClick={( ) => editItem(id, title, division)} >수정</button>
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