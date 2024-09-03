const VideoCard = ({ info }) => {
    // console.log("SNIPPET"+info.snippet.description);
    if (!info) {
        return null; // or you could return a loading indicator
    }
    console.log(info);

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    // console.log("channelTitle"+channelTitle);
    // console.log("title"+title);
    return (
        <div className="p-2 m-2 w-72 shadow-lg">
            <img className="rounded-lg" src={thumbnails.high.url} alt={title} />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
};


//Higher Order Function
export const AdVideoCard=({info})=>{
    return (
        <div className="p-1 m-1 border border-red-900">
            <VideoCard info={info}/>
        </div>  
    );
}

export default VideoCard;
