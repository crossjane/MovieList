import React from "react";

const MovieItem = ({poster_path, title, release_date, vote_average, overview})=> {
    return (

        <li className="movieList-li">
            {/* <button onClick={deleteItem}>삭제</button> */}
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
            <p>{title}</p>
            <button>수정</button>
            <p>개봉 일자: {release_date}</p>
            <p>관객 평: {vote_average}</p>
            <p>{overview}</p>
            </li>
        )
    
};

export default MovieItem;