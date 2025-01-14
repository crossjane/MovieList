import React from 'react';
import {useState} from 'react';


function Main(){

    const [movieList, setMovieList] = useState([
        {
      "adult": false,
      "backdrop_path": "/euYIwmwkmz95mnXvufEmbL6ovhZ.jpg",
      "genre_ids": [
        28,
        12,
        18
      ],
      "id": 558449,
      "original_language": "en",
      "original_title": "Gladiator II",
      "overview": "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
      "popularity": 4201.992,
      "poster_path": "/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg",
      "release_date": "2024-11-05",
      "title": "Gladiator II",
      "video": false,
      "vote_average": 6.776,
      "vote_count": 2120
    },
    {
      "adult": false,
      "backdrop_path": "/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
      "genre_ids": [
        28,
        878,
        35,
        10751
      ],
      "id": 939243,
      "original_language": "en",
      "original_title": "Sonic the Hedgehog 3",
      "overview": "Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.",
      "popularity": 4186.749,
      "poster_path": "/x7NPbBlrvFRJrpinBSRlMOOUWom.jpg",
      "release_date": "2024-12-19",
      "title": "Sonic the Hedgehog 3",
      "video": false,
      "vote_average": 7.655,
      "vote_count": 394
    }]);
    



    return(
    <>
    <div className='MainGrid'>
        <h1>이달의 영화</h1>
        <ul className="movieList">
            {movieList.map((movie,index) =>  
            <li className="movieList-li" key={index}>
                <img 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '50%', borderRadius: '8px' , marginTop: '20px'}}
                />
            <p>{movie.title}</p>
            <p>{movie.overview}</p>
            </li>
            )}
        </ul>



    </div>
    </>
    );

}

export default Main;