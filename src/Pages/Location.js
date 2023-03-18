import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Cards from "../WikiProject/Cards/Cards"
import InputGroup from '../WikiProject/Filters/Category/InputGroup';

const Location = () => {

    let [id, setId] = useState(1);
    let [info, setInfo] = useState([]);
    let [results, setResults]= useState([]);

    console.log(info)

    let {name,type, dimension, characters} = info;

    let api = `https://rickandmortyapi.com/api/location/${id}`;

    useEffect(()=>{
        (async function(){
          let data = await fetch(api).then(res=>res.json())
          setInfo(data)


          let a = await Promise.all(
            data.residents.map((x)=>{
              return fetch(x).then(res=>res.json());
            })
          );
          setResults(a)
          console.log(a)


        })()
    },[api])

  return (
    <div className='container'>
       <div className='row mb-4'>
        <h1 className='text-center mb-3'> Location : {""}<span className='text-primary'>{name==="" ? "Unknown" : name}</span> </h1>
        <h5 className='text-center'> Dimension : {dimension==="" ? "Unknown" : dimension}</h5>
        <h6 className='text-center'> Type : {type==="" ? "Unknown" : type}</h6>
       </div>
       <div className='row'>
        <div className='col-lg-3 col-12'>
          <h4 className='text-center mb-4'> Pick Location </h4>
          <InputGroup setId={setId} total = {126} name="Location" />
        </div>
        <div className='col-lg-8 col-12'>
          <div className='row'>{<Cards page = "/location/" results={results} />}</div>
        </div>
       </div>
    </div>
  )
}

export default Location