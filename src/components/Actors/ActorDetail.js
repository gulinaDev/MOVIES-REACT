import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import {APIKEY} from "../../ApiKey";
import ActorMovies from "./ActorMovies";
import {LanguageContext} from "../../context";


const ActorDetail = () => {
    const [actor, setActor] = useState({})
    const [viewMore, setViewMore] = useState(350)
    const {language} = useContext(LanguageContext)
    const {actorId} = useParams()

    const getDetailActor = async (id, key) => {
        const response = await axios(`https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=${language}`)
        setActor(response.data)
    }

    const printText = (text) => {
        if (viewMore === 300) {
            setViewMore(text.length)
        } else {
            setViewMore(300)
        }

    }


    useEffect(() => {
        getDetailActor(actorId, APIKEY)
    }, [language])


    return (
        <div id="actor">
            <div className="container">
                <div className="actor-detail font-serif">
                    <img src={`https://www.themoviedb.org/t/p/w375_and_h375_face/${actor.profile_path}`} alt=""/>
                    <div className="actor-detail__titles py-10">
                        <h1 className="font-bold text-2xl">{actor.name}</h1>
                        <h3 className="py-4 font-bold text-gray-700">{actor.birthday}</h3>
                        <h4 className="text-gray-600 font-bold my-2">Биография:</h4>
                        <p>{actor.biography && actor.biography.slice(0, viewMore)}</p>
                        {
                            actor.biography && actor.biography.length > 300 && <span onClick={() => printText(actor.biography)} className="view-more font-bold text-gray-700 my-2">{viewMore === 300 ? "view more" : "close"}</span>

                        }
                    </div>
                </div>
                <ActorMovies actorId={actorId}/>
            </div>
        </div>
    );
};

export default ActorDetail;
