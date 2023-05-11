import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../ApiKey";
import {useParams} from "react-router-dom";
import MovieCard from "../components/page/MovieCard";
import {LanguageContext} from "../context";
import {GrFormNext, GrFormPrevious} from "react-icons/gr";

const SearchResult = () => {
    const {language} = useContext(LanguageContext)
    const [result, setResult] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const {movieName} = useParams()
    const getResult = async (key, name) => {
        const response = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${name}&language=${language}&page=${page}`)
        setTotalPage(response.data.total_pages)
        setResult(response.data.results)
        window.scroll(0, 0)
    }



    useEffect(() => {
        getResult(APIKEY, movieName)
    }, [language, movieName, page])

    useEffect(() => {
        setPage(1)
    }, [movieName])

    return (
        <div id="movies">
            <div className="container">
                <div className="movies">
                    {
                        result.map(el => (<MovieCard el={el} key={el.id}/>))
                    }
                </div>

                <div className="movies-buttons flex justify-between items-center my-12">
                    <button style={{visibility: page === 1 ? "hidden" : "visible"}} onClick={() => setPage(page - 1)}
                            className="ml-12"><GrFormPrevious className="text-3xl ml-2"/></button>

                    <h3 className="font-serif text-xl mb-8">{page} / {totalPage}</h3>

                    <button style={{visibility: page === totalPage ? "hidden" : "visible"}}
                            onClick={() => setPage(page + 1)}><GrFormNext className="text-3xl ml-2"/></button>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;