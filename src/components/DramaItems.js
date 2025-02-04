import React from "react";

const DramaItem = ({
        name,
        poster_path, 
        first_air_date, 
        vote_average, 
        overview, 
        editItem, 
        id, 
        onChangeInput, 
        isEdit, 
        tempName, 
        doneEdit, 
        editId, 
        deleteItem, 
        clickCheckbox,
        division
        }) => {
    return(   
        <li className="movieList-li">
            <input
                type="checkbox"
                className="checkbox"  
                onClick={()=>clickCheckbox(id)}
            />
            { isEdit ?(
            <>
                <input
                value={tempName}
                onChange={(e) => onChangeInput (e, id, division)}               
                />     
                <button onClick={() => doneEdit(id, division)}>완료</button><br/>
            </>
             ) : (
            <>
                <p>{name}</p>
                <button onClick={() => editItem(id, name, division)}>수정</button><br/>
            </>
             )
            }
            
            
            <img 
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={name}
            style={{ 
                width: "300px",
                borderRadius: '8px' , 
                marginTop: '20px',
                height:"450px",
            }}
            />
        <div className='textContainer'>
            <p>방영 시작: {first_air_date}</p>
            <p>관객 평: {vote_average}</p>
            <p>{overview}</p>
            <button onClick={()=>deleteItem(id, division)}>삭제</button>
        </div>
        </li>
        )} ;  
    

export default DramaItem;