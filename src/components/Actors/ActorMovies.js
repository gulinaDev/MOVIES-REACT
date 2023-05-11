import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import Slider from "react-slick";
import {Link} from "react-router-dom";

const ActorMovies = ({actorId}) => {
    const [movies, setMovies] = useState([])
    const getActorMovies = async (id, key) => {
        const response = await axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=en-US`)
        setMovies(response.data.cast)
    }

    useEffect(() => {
        getActorMovies(actorId,APIKEY)
    }, [])

    console.log(movies)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3
    };



    return (
        <Slider {...settings}>
            {
                movies.filter(el => el.poster_path).map(el =>(

                    <div key={el.id} className="d-flex py-14">
                        <Link to={`/movies/detail-page/${el.id}`}><img width={200} src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/></Link>
                        <h1  className="font-bold">{el.title}</h1>
                    </div>
                ))
            }
        </Slider>
    );
};

export default ActorMovies;