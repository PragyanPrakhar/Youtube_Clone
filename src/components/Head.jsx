import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResult } from "../utils/searchSlice";
const Head = () => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // console.log("Search Query " + searchQuery);
    const searchCache = useSelector((store) => store.search);
    useEffect(() => {
        // console.log("API CALL IS MADE");
        //Want to make the api all on every key stroke but if the difference beteweern two key stroke is less than 200 ms then skip the api call.

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
        console.log("API CALL -> " + searchQuery);
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);
        dispatch(cacheResult({
            [searchQuery]: json[1],
        }));
    };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-lg relative">
            <div className="flex col-span-1">
                <img
                    onClick={() => toggleMenuHandler()}
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
                        onBlur={() => setShowSuggestions(false)}
                    />
                    <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">
                        🔍
                    </button>
                </div>
                {showSuggestions && (
                    <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray-100 absolute">
                        <ul>
                            {suggestions.map((suggestion) => (
                                <li
                                    key={suggestion}
                                    className="py-2 px-3 shadow-sm cursor-pointer  hover:bg-gray-100"
                                >
                                    {suggestion}
                                </li>
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
