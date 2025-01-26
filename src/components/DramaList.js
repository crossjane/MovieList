import React from "react";
import DramaItem from "./DramaItems";

const DramaList = ({subTitle, dramas, editItem, doneEdit, onChangeInput, editId, deleteItem, checkboxDelete, checboxId}) =>{
    return(
    <>
    <h1>{subTitle}</h1>
   
    <button onClick={()=>checkboxDelete()}>삭제</button>

    { dramas&&dramas.length > 0 ? 
     (
        <ul 
        style={{
          display:"flex",
          flexDirection:"row",
          overflowX:"scroll",
          padding: 0,
          gap: "20px",
          }}
          className="movieList"
          >
            
        {dramas.map((drama,index) =>  
        <DramaItem 
          key={index}
          name={drama.name}
          poster_path={drama.poster_path}
          first_air_date={drama.first_air_date}
          vote_average={drama.vote_average}
          overview={drama.overview}
          id={drama.id}
          editItem={editItem}
          doneEdit={doneEdit}
          onChangeInput={onChangeInput}
          editId={editId}
          deleteItem={deleteItem}
        />
        )}
        </ul>
        ) :
    <p>로딩중...</p>
    }
    
    </>
      
    )

  
   
}

export default DramaList;