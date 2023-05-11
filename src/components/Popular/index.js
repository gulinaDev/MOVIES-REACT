import React, {useContext, useEffect, useState} from 'react';
import {APIKEY} from "../../ApiKey";
import axios from "axios";
import MovieCard from "../page/MovieCard";
import {LanguageContext} from "../../context";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const {language} = useContext(LanguageContext)
    const [page, setPage] = useState(1)
    const [loader, setLoader] = useState(false)
    const arrayPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    window.scroll(0, 0)

    const getPopular = async () => {
        setLoader(true)
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=${language}&page=${page}`)
            const {data} = await res
            setPopular(data.results)
            window.scroll(0, 0)
            setTimeout(() => {
                setLoader(false)

            }, 2000)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPopular()
    }, [language, page])

    return (<div id="movies">
            {
                loader ? <p className="loader py-4 font-bold text-2xl">Loading...</p>
                    :
                    <div className="container">
                <div className="movies">
                    {popular.map(el => (<MovieCard key={el.id} el={el}/>))}
                </div>

                <div className="pagination-btn flex justify-center items-center my-8">
                    {arrayPages.map(el => (<button onClick={() => setPage(el)} style={{
                            background: el === page ? "crimson" : ""
                        }}>{el}</button>))}
                </div>
            </div>
            }
        </div>);
};
export default Popular;