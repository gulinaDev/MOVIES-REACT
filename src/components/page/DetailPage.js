import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import {useParams} from "react-router-dom";
import Actors from "../Actors";
import Videos from "../Videos";
import {LanguageContext} from "../../context";
import Modal from "./Modal/Modal";

const DetailPage = () => {
    const [detail, setDetail] = useState({})
    const {language} = useContext(LanguageContext)
    const {movieId} = useParams()
    const getDetail = async (id, key) => {
        try {
            const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=${language}`)
            const {data} = res
            setDetail(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getDetail(movieId, APIKEY)
    }, [language])

    const {poster_path, title, overview, release_date, runtime, backdrop_path, vote_average} = detail

    return (
        <>
            <div id="detail" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}") no-repeat left/cover`,
                color: "white"
            }}>
                <div className="container">
                    <div className="detail">
                        <Modal detail={detail}/>
                        <div className="detail--desc font-serif">
                            <h1 className=" py-4">{title}</h1>
                            <p>{overview}</p>
                            <p className="py-4 text-amber-400">{release_date}</p>
                            <h3 className="py-4">{Math.floor(runtime / 60)} h: {runtime % 60}min</h3>
                            <div className="detail--desc__square">
                                <div className="detail--desc__square--block">
                                    <div className="detail--desc__square--block__percent" style={{
                                        background: `conic-gradient(#367762 ${Math.round(vote_average * 10) * 3.59}deg, #092828  0deg)`
                                    }}>
                                        <p className="">{Math.round(detail.vote_average * 10)}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Actors movieId={movieId}/>
            <Videos movieId={movieId}/>
        </>
    );
};

export default DetailPage;