import React from 'react';
import {Link} from "react-router-dom";

const MovieCard = ({el}) => {
    return (
        <div className="movies-card">
           <Link to={`/movies/detail-page/${el.id}`}>
               <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="" style={{
                   cursor:"pointer"
               }}/>
           </Link>
            <h4 className="py-5 font-serif text-black">{el.title}</h4>
        </div>
    );
};

export default MovieCard;