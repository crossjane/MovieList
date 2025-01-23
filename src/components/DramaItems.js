import React from "react";

const DramaItem = ({name, poster_path, first_air_date, vote_average, overview, editItem, id, onChangeInput, isEdit, tempTitle, doneEdit}) => {
    return(   
        <li className="movieList-li">
            { isEdit?
            <>
                <input
                value={tempTitle}
                onChange={onChangeInput}               
                />     
                <button onClick={() => doneEdit()}>완료료</button><br/>
            </>
            :
            <>
                <p>{name}</p>
                <button onClick={() => editItem(id)}>수정</button><br/>
            </>
            }
            
            
            <img 
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={name}
            style={{ width: '50%', borderRadius: '8px' , marginTop: '20px'}}
            />
        <div className='textContainer'>
            <p>방영 시작: {first_air_date}</p>
            <p>관객 평: {vote_average}</p>
            <p>{overview}</p>
            <button >삭제</button>
        </div>
        </li>
        )} ;  
    

export default DramaItem;