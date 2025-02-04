import React, { useEffect } from 'react';
import { useState } from 'react';
import DramaList from './components/DramaList';


function Drama(){

    const [airingToday, setAiringToday] = useState([]);
    const [onTheAir, setOnTheAir] = useState([]);
    const [popular, setPopular] = useState([]);
    const [topRated, setTopRated] = useState([]);


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
       for(let i = 0; i < data.results.length; i++){
        data.results[i].isEdit = false;
        data.results[i].tempName = "";
        data.results[i].isChecked = false;
       }
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
       for(let i = 0; i < data.results.length; i++){
        data.results[i].isEdit = false;
        data.results[i].tempName = "";
        data.results[i].isChecked = false;
       }
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
       for(let i = 0; i < data.results.length; i++){
        data.results[i].isEdit = false;
        data.results[i].tempName = "";
        data.results[i].isChecked = false;
       }
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
       for(let i = 0; i < data.results.length; i++){
        data.results[i].isEdit = false;
        data.results[i].tempName = "";
        data.results[i].isChecked = false;
       }
       setTopRated(data.results);
    }

    function editItem(id, name, division){
      console.log("editItem");

        if(division === "airingToday"){
          const copyAiringToday = [...airingToday];
          const findAiringToday = copyAiringToday.find((drama) => drama.id === id);
          if(findAiringToday){
            findAiringToday.isEdit = true;
            findAiringToday.tempName = name;
          }
          setAiringToday(copyAiringToday);

        } else if(division === "onTheAir"){
          const copyOnTheAir = [...onTheAir];
          const findOnTheAir = copyOnTheAir.find((drama) => drama.id === id);
          if(findOnTheAir){
            findOnTheAir.isEdit = true;
            findOnTheAir.tempName = name;
          }
          setOnTheAir(copyOnTheAir);
      

        } else if(division === "popular"){
        const copyPopulars = [...popular];
        const findPopular = copyPopulars.find((drama) => drama.id === id);
        if(findPopular){
          findPopular.isEdit = true;
          findPopular.tempName = name;
        }
        
        setPopular(copyPopulars);
        }else if(division === "topRated"){
          const copyTopRated = [...topRated];
          const findTopRated = copyTopRated.find((drama) => drama.id === id);
          if(findTopRated){
            findTopRated.isEdit = true;
            findTopRated.tempName = name;
          }
          setTopRated(copyTopRated);
        }
      }


    function onChangeInput(e, id, division){
      if(division === "airingToday"){
          const copyAiringToday = [...airingToday];
          const findAiringToday = airingToday.find((drama)=> drama.id === id);
          if(findAiringToday){
            findAiringToday.tempName = e.target.value;
          }
          setAiringToday(copyAiringToday);
        } else if(division === "onTheAir"){
          const copyOnTheAir = [...onTheAir];
          const findOnTheAir = onTheAir.find((drama)=> drama.id === id);
          if(findOnTheAir){
            findOnTheAir.tempName = e.target.value;
          }
          setOnTheAir(copyOnTheAir);
        } else if(division === "popular"){
          const copyPopulars = [...popular];
          const findPopulars = popular.find((drama)=> drama.id === id);
          if(findPopulars){
            findPopulars.tempName = e.target.value;
          }
          setAiringToday(copyPopulars);
        } else if(division === "topRated"){
          const copyTopRated = [...topRated];
          const findTopRated = topRated.find((drama)=> drama.id === id);
          if(findTopRated){
            findTopRated.tempName = e.target.value;
          }
          setTopRated(copyTopRated);
        } 

      }

    function doneEdit(id, division){
      if(division === "airingToday"){
        const copyAiringToday = [...airingToday];
        const findAiringToday = airingToday.find((drama)=> drama.id === id);
        if(airingToday){
          findAiringToday.name = findAiringToday.tempName;
          findAiringToday.isEdit = false;
        }
        setAiringToday(copyAiringToday);
      
      }else if(division === "onTheAir"){
        const copyOnTheAir = [...onTheAir];
        const findOnTheAir = onTheAir.find((drama)=> drama.id === id);
        if(onTheAir){
          findOnTheAir.name = findOnTheAir.tempName;
          findOnTheAir.isEdit = false;
        }
        setAiringToday(copyOnTheAir);
      
      }else if(division === "popular"){
        const copyPopulars = [...popular];
        const findPopular = popular.find((drama)=> drama.id === id);
        if(popular){
          findPopular.name = findPopular.tempName;
          findPopular.isEdit = false;
        }
        setAiringToday(copyPopulars);
      
      }else if(division === "topRated"){
        const copyTopRated = [...topRated];
        const findTopRated = topRated.find((drama)=> drama.id === id);
        if(topRated){
          findTopRated.name = findTopRated.tempName;
          findTopRated.isEdit = false;
        }
        setAiringToday(copyTopRated);
      
      }
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

    function clickCheckbox(id, division){
      if(division === airingToday){
      const copyAiringToday=[...airingToday];
      const findAiringToday = copyAiringToday.find((drama)=> drama.id === id);
        if(!findAiringToday.isChecked){
          findAiringToday.isChecked = true;
        } else {
          findAiringToday.isChecked = false;
        }
        setAiringToday(copyAiringToday);
       }else if(division === onTheAir){
        const copyOnTheAir=[...onTheAir];
        const findOnTheAir = copyOnTheAir.find((drama)=> drama.id === id);
          if(!findOnTheAir.isChecked){
            findOnTheAir.isChecked = true;
          } else {
            findOnTheAir.isChecked = false;
          }
          setOnTheAir(copyOnTheAir);
        }else if(division === popular){
          const copyPopulars=[...popular];
          const findPopular = copyPopulars.find((drama)=> drama.id === id);
            if(!findPopular.isChecked){
              findPopular.isChecked = true;
            } else {
              findPopular.isChecked = false;
            }
          setPopular(copyPopulars);
        }else if(division === topRated){
          const copyTopRated=[...topRated];
          const findTopRated = copyTopRated.find((drama)=> drama.id === id);
          if(!findTopRated.isChecked){
            findTopRated.isChecked = true;
          } else {
            findTopRated.isChecked = false;
          }
        setTopRated(copyTopRated);
     }
    }

    function checkboxDelete(division){
      if(division === airingToday){
        const deletedAiringToday = airingToday.filter((drama) => !drama.isChecked );
        setAiringToday(deletedAiringToday);
      } else if(division === onTheAir){
        const deletedOnTheAir = onTheAir.filter((drama) => !drama.isChecked );
        setOnTheAir(deletedOnTheAir);
      } else if(division === popular){
        const deletedPopular = popular.filter((drama) => !drama.isChecked );
        setPopular(deletedPopular);
      } else if(division === topRated){
        const deletedTopRated = topRated.filter((drama) => !drama.isChecked );
        setTopRated(deletedTopRated);
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        
      <DramaList clickCheckbox={clickCheckbox} checkboxDelete={checkboxDelete} deleteItem={deleteItem} doneEdit={doneEdit} onChangeInput={onChangeInput} editItem={editItem} subTitle={"오늘 방영중"} dramas={airingToday} division={"airingToday"}/>
       
      <DramaList clickCheckbox={clickCheckbox} checkboxDelete={checkboxDelete} deleteItem={deleteItem} doneEdit={doneEdit} onChangeInput={onChangeInput} editItem={editItem} subTitle={"방송 중"} dramas={onTheAir} division={"onTheAir"}/>

      <DramaList clickCheckbox={clickCheckbox} checkboxDelete={checkboxDelete} deleteItem={deleteItem} doneEdit={doneEdit} onChangeInput={onChangeInput} editItem={editItem} subTitle={"인기 있는"} dramas={popular} division={"popular"}/>

      <DramaList clickCheckbox={clickCheckbox} checkboxDelete={checkboxDelete} deleteItem={deleteItem} doneEdit={doneEdit} onChangeInput={onChangeInput} editItem={editItem} subTitle={"최고 평점"} dramas={topRated} division={"topRated"}/>
      </div> 
    </div>
    </>


    );

}

export default Drama;