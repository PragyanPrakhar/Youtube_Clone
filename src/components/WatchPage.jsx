// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { closeMenu } from "../utils/appSlice";
// import { useSearchParams } from "react-router-dom";
// import CommentsContainer from "./CommentsContainer";
// import LiveChat from "./LiveChat";

// const WatchPage = () => {
//     const [searchParams] = useSearchParams();
//     // console.log("Getting the vIDEO iD  " + searchParams.get("v"));
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(closeMenu());
//     }, []);
//     return (
//         <div className="flex flex-col w-full">
//             <div className="px-5 flex w-full">
//                 <div>
//                     <iframe
//                         width="900"
//                         height="550"
//                         src={
//                             "https://www.youtube.com/embed/" +
//                             searchParams.get("v")
//                         }
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         allowFullScreen
//                     ></iframe>
//                 </div>
//                 <div className="w-full h-[480px]">
//                     <LiveChat/>
//                 </div>
//             </div>
//             <CommentsContainer />
//         </div>
//     );
// };

// export default WatchPage;
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useEffect } from "react";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);
    
    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex w-full flex-1">
                <div className="w-3/4 p-2">
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
                <div className="w-1/4 p-4">
                    <LiveChat />
                </div>
            </div>
            <div className="p-2 flex-1 overflow-y-auto">
                <CommentsContainer />
            </div>
        </div>
    );
};

export default WatchPage;
