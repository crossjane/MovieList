import React from 'react';
import { useState } from 'react';


function Drama(){

    const [dramaList, setDramaList] = useState([
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
        "overview": "로마의 영웅이자 최고의 검투사였던 막시무스가 콜로세움에서 죽음을 맞이한 뒤 20여 년이 흐른 후. 쌍둥이 황제 게타와 카라칼라의 폭압 아래 시민을 위한 자유로운 나라 로마의 꿈은 잊힌 지 오래다. 한편 아카시우스 장군이 이끄는 로마군에 대패한 후 모든 것을 잃고 노예로 전락한 루시우스는 강한 권력욕을 지닌 마크리누스의 눈에 띄어 검투사로 발탁된다. 로마를 향한 걷잡을 수 없는 분노, 타고난 투사의 기질로 콜로세움에 입성하게 된 루시우스는 결투를 거듭하며 자신이 진짜 누구인지 알게 되고 마침내 로마의 운명을 건 결전을 준비하게 되는데...!",
        "popularity": 4201.992,
        "poster_path": "/b5UXjzW5cLZhprMnlAmsVAA3G4t.jpg",
        "release_date": "2024-11-05",
        "title": "글래디에이터 II",
        "video": false,
        "vote_average": 6.776,
        "vote_count": 2127
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
        "overview": "너클즈, 테일즈와 함께 평화로운 일상을 보내던 초특급 히어로 소닉. 연구 시설에 50년간 잠들어 있던 사상 최강의 비밀 병기 \"섀도우\"가 탈주하자, 세계 수호 통합 부대(약칭 세.수.통)에 의해 극비 소집된다. 소중한 것을 잃은 분노와 복수심에 불타는 섀도우는 소닉의 초고속 스피드와 너클즈의 최강 펀치를 단 단숨에 제압해버린다. 세상을 지배하려는 닥터 로보트닉과 그의 할아버지 제럴드 박사는 섀도우의 엄청난 힘 카오스 에너지를 이용해 인류를 정복하려고 하는데…",
        "popularity": 4186.749,
        "poster_path": "/5ZoI48Puf5i5FwI6HOpunDuJOw0.jpg",
        "release_date": "2024-12-19",
        "title": "수퍼 소닉 3",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 395
      }]);

    return(
    <>
    <div className='MainGrid'>
        <h1>이달의 드라마</h1>
        <ul className="movieList">
            {dramaList.map((drama,index) =>  
            <li className="movieList-li" key={index}>
                <p>{drama.title}</p>
                <img 
                src={`https://image.tmdb.org/t/p/original${drama.poster_path}`}
                alt={drama.title}
                style={{ width: '50%', borderRadius: '8px' , marginTop: '20px'}}
                />
            <div className='textContainer'>
                <p>개봉 일자: {drama.release_date}</p>
                <p>관객 평: {drama.vote_average}</p>
                <p>{drama.overview}</p>
            </div>
            </li>
            )}
        </ul>
    </div>
    </>


    );

}

export default Drama;