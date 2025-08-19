import { useSelector } from "react-redux";
import VideBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () =>{

    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    const randomNumber = Math.floor(Math.random()*movies.length);
    const mainMovie = movies[randomNumber];
 
    const {original_title,overview,id} = mainMovie;
    return (
        <div>
          <VideoTitle title={original_title} overview={overview}/>
          <VideBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;