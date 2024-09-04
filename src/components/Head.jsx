import { useDispatch, useSelector } from "react-redux";
import {
    GOOGLE_API_KEY,
    YOUTUBE_LOGO,
    YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState, useRef } from "react";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Head = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchCache = useSelector((store) => store.search);
    const suggestionsBoxRef = useRef(null);
    // useEffect(() => {
    //     fetchingResults();
    // }, []);
    // const fetchingResults = async () => {
    //     const reults = await fetch(
    //         "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=hello&key=" +
    //             GOOGLE_API_KEY
    //     );
    //     const finalRes = await reults.json();
    //     console.log("youtube videos results", finalRes);
    // };
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 200);
        return () => {
            clearTimeout(timer);
        };
    }, [searchQuery]);
    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        dispatch(
            cacheResult({
                [searchQuery]: json[1],
            })
        );
    };
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const handleBlur = (e) => {
        // Check if the blur event is related to a click inside the suggestions box
        if (!suggestionsBoxRef.current.contains(e.relatedTarget)) {
            setShowSuggestions(false);
        }
    };
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg relative">
            <div className="flex col-span-1">
                <img
                    onClick={toggleMenuHandler}
                    className="h-8 cursor-pointer"
                    alt="menu"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256"
                />
                <a href="/">
                    <img
                        className="h-8 mx-2"
                        alt="youtube-logo"
                        src={YOUTUBE_LOGO}
                    />
                </a>
            </div>
            <div className="col-span-10 px-10">
                <div>
                    <input
                        className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={handleBlur}
                    />
                    <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">
                        🔍
                    </button>
                </div>
                {showSuggestions && (
                    <div
                        ref={suggestionsBoxRef}
                        className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray-100 absolute"
                    >
                        <ul>
                            {suggestions.map((suggestion) => (
                                <Link
                                    to={"/watchpage/?search=" + searchQuery}
                                    key={suggestion}
                                    onClick={() => setShowSuggestions(false)}
                                >
                                    <li className="py-2 px-3 shadow-sm cursor-pointer hover:bg-gray-100">
                                        {suggestion}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="col-span-1">
                <img
                    className="h-8"
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="User Icon"
                />
            </div>
        </div>
    );
};

export default Head;
