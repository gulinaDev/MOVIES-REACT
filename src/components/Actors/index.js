import React, {useEffect, useState} from 'react';
import axios from "axios";
import {APIKEY} from "../../ApiKey";
import Slider from "react-slick";
import Profile from "../../img/profile.png"
import {Link} from "react-router-dom";


const Actors = ({movieId}) => {
    const [actors, setActors] = useState([])

    const getCredits = async (id, apikey) => {
        const res = await axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apikey}&language=en-US`)
        const {data} = res
        setActors(data.cast)
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3
    };


    useEffect(() => {
        getCredits(movieId, APIKEY)
    }, [])


    return (
        <div id="actors">
            <div className="container">
                <Slider {...settings}>
                    {
                        actors.map(el => (
                            <Link key={el.id} to={`/actors/detail-page/${el.id}`}>
                                <div className="actors-card font-serif">
                                    {
                                        el.profile_path ? <img width={160}
                                                               src={`https://www.themoviedb.org/t/p/w375_and_h375_face/${el.profile_path}`}
                                                               alt=""/>
                                            :
                                            <img width={140} src={Profile} alt=""/>
                                    }
                                    <h4 className="">{el.name}</h4>
                                </div>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Actors;
