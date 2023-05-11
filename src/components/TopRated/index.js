import React, {useContext, useEffect, useState} from 'react';
import {APIKEY} from "../../ApiKey";
import MovieCard from "../page/MovieCard";
import axios from "axios";
import {LanguageContext} from "../../context";


const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const {language} = useContext(LanguageContext)

    const getTopRated = async () =>{
      try {
          const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=${language}&page=1`)
          const {data} = await res
          setTopRated(data.results)
      }catch (error){
          console.log(error)
      }
    }

    useEffect(() =>{
        getTopRated()
    },[language])


    return (
        <div  id="movies">
            <div className="container">
                <div className="movies">
                    {
                        topRated.map(el =>(
                         <MovieCard key={el.id} el={el}/>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default TopRated;