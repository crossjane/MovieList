import React, { useEffect } from 'react';
import { useState } from 'react';
import DramaList from './components/DramaList';


function Drama(){

    const [airingToday, setAiringToday] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [tempTitle, setTempTitle] = useState("");
    const [_, setEditId] = useState();
  

    async function initData() {
      const result = await fetch(
        "https://api.themoviedb.org/3/tv/airing_today",
        {
          method: 'GET',
          headers:{
           "Content-Type" :"application/json",
            Authorization : 
               `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
       )
       const data = await result.json();
       //data가 객체?results?
       setAiringToday(data.results);
    }

    async function initData2() {
      const result = await fetch(
        "https://api.themoviedb.org/3/tv/on_the_air",
        {
          method: 'GET',
          headers:{
           "Content-Type" :"application/json",
            Authorization : 
               `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
       )
       const data = await result.json();
       setOnTheAir(data.results);
    }

    async function initData3() {
      const result = await fetch(
        "https://api.themoviedb.org/3/tv/popular",
        {
          method: 'GET',
          headers:{
           "Content-Type" :"application/json",
            Authorization : 
               `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
       )
       const data = await result.json();
       setPopular(data.results);
    }

    async function initData4() {
      const result = await fetch(
        "https://api.themoviedb.org/3/tv/top_rated",
        {
          method: 'GET',
          headers:{
           "Content-Type" :"application/json",
            Authorization : 
               `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
       )
       const data = await result.json();
       setTopRated(data.results);
    }

    function editItem(id, name){
      setIsEdit(true);
      setEditId(id);
      setTempTitle(name);
    }

    function onChangeInput(e){
      setTempTitle(e.target.value);
    }

    function doneEdit(id){
    
    }

    function deleteItem(id, division){
        if(division === airingToday){
        const filteredItem = airingToday.filter((dramas)=> dramas.id !== id);
        setAiringToday(filteredItem);
      } else if(division === onTheAir){
        const filteredItem = onTheAir.filter((dramas)=> dramas.id !== id);
        setAiringToday(filteredItem);
      } else if(division === popular){
        const filteredItem = popular.filter((dramas)=> dramas.id !== id);
        setAiringToday(filteredItem);
      } else if(division === topRated){
        const filteredItem = topRated.filter((dramas)=> dramas.id !== id);
        setAiringToday(filteredItem);
      } 
    }


    useEffect(() => {
      initData();
      initData2();
      initData3();
      initData4();
      },[]);

    return(
    <>
    <div className='MainGrid'>
      <DramaList deleteItem={deleteItem} doneEdit={doneEdit} tempTitle={tempTitle} isEdit={isEdit} onChangeInput={onChangeInput} editItem={editItem} subTitle={"오늘 방영중"} dramas={airingToday}/>
        
      <DramaList deleteItem={deleteItem} doneEdit={doneEdit} tempTitle={tempTitle} isEdit={isEdit} onChangeInput={onChangeInput} editItem={editItem} subTitle={"방송 중"} dramas={onTheAir}/>

      <DramaList deleteItem={deleteItem} doneEdit={doneEdit} tempTitle={tempTitle} isEdit={isEdit} onChangeInput={onChangeInput} editItem={editItem} subTitle={"인기 있는"} dramas={popular}/>

      <DramaList deleteItem={deleteItem} doneEdit={doneEdit} tempTitle={tempTitle} isEdit={isEdit} onChangeInput={onChangeInput} editItem={editItem} subTitle={"최고 평점"} dramas={topRated}/>
      
    </div>
    </>


    );

}

export default Drama;