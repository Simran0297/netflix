const VideoTitle = ({title,overview})=>{

    return(
        <div className="w-screen aspect-video pt-[25%] px-36 absolute bg-gradient-to-r from-black ">

            <h1 className="text-6xl font-bold text-white">{title}</h1>
            <p className="py-6 text-lg font-semibold w-1/2 text-white">{overview}</p>
            <div className="flex ">
                <button className="text-xl mx-2 bg-white p-4 px-12 font-bold text-black hover:bg-opacity-90">Play</button>
                <button className="text-xl mx-2 bg-slate-700 bg-opacity-50 p-4 px-12 font-bold text-white">More info</button>
            </div>
        </div>
    )
}

export default VideoTitle;