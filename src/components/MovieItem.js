import React, { useState } from "react";

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


    const [isMore, setIsMore] = useState(false);

    function onClick(){
        setIsMore(!isMore);

    }

    return (
        <li className="movieList-li">
    
            <input
                type="checkbox"
                className="checkbox"
                onChange={()=>clickCheckbox(id, division)}
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
             <div className="title-container">
                <span>{title}</span>
                <button className="edit-btn" onClick={( ) => editItem(id, title, division)} >
                    <img src="/img/edit_btn.svg" alt="Edit-btn"/>
                </button>
             </div>
             </>
                     ) 
            }           
            <p>개봉 일자: {release_date}</p>
            <p>관객 평: {vote_average}</p>
            <p style={{height:280, overflowY:"scroll",scrollbarWidth:"none"}}>
                {isMore ? overview : (overview.length > 250? `${overview.substring(0,250)}...` :overview)}
            </p>
            {overview.length < 250? null :<button onClick={onClick}>{isMore ? "접기" : "더보기"}</button>}
            </li>
        )
    
};

export default MovieItem;