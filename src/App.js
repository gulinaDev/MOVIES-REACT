import './App.scss';
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import {Routes, Route} from "react-router-dom";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import DetailPage from "./components/page/DetailPage";
import ActorDetail from "./components/Actors/ActorDetail";
import {useState} from "react";
import SearchResult from "./SearchResult";


function App() {
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem("mode")) || false)
    return (

        <div style={{
            background: mode ? "black" : "",
            color: mode ? "white" : ""
        }} className="App">
            <Header setMode={setMode} mode={mode}/>
            <Routes>
                <Route path={"/top-rated"} element={<TopRated/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/recipes"} element={<Recipes/>}/>
                <Route path={"/movies/detail-page/:movieId"} element={<DetailPage/>}/>
                <Route path={"/actors/detail-page/:actorId"} element={<ActorDetail/>}/>
                <Route path={"/movies/search-result/:movieName"} element={<SearchResult/>}/>
            </Routes>
        </div>
    );
}

export default App;
