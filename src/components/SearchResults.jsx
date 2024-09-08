import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import VideoSearchComponent from "./VideoSearchComponent";

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [results, setResults] = useState([]);

    const query = searchParams.get("search");
    useEffect(() => {
        getSearchResults();
    }, [query]);

    const getSearchResults = async () => {
        try {
            const data = await fetch(
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${GOOGLE_API_KEY}`
            );
            const json = await data.json();
            setResults(json?.items);
            console.log("api data", json);
            console.log("result array", results);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {results.map((item) => (
                <VideoSearchComponent key={item?.id.videoId} info={item} />
            ))}
        </div>
    );
};

export default SearchResults;
