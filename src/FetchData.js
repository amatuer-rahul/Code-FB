import React, {useEffect, useState} from 'react'
import Card from './Card.js';

const FetchData = () => {
    const [data, setData] = useState([]);
    
    const getData = () => {
        fetch("http://localhost:3001/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            //console.log(res);
            return res.json();
        }).then((data_res) => {
            //console.log(data_res.movies);
            setData(data_res.movies);
        });
    }
    useEffect(() => {
        getData()
        //console.log(data.movies);
    }, []);
  return (
    <div>
        <div style={{display: 'flex'}}>
      {data.length && data.map((movie) => {
        return <Card key={movie.name} name={movie.name} rating={movie.rating} date={movie.releaseDate}/>
        
       })
      }
      </div>
    </div>
  )
}

export default FetchData
