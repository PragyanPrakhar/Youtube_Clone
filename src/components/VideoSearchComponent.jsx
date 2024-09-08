// import { Link } from "react-router-dom";

// const VideoSearchComponent = ({ info }) => {
//     return (
//         <>
//             {info?.snippet} && (
//             <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
//                 <Link to={"/watch/?v=" + info?.id?.videoId}>
//                     <img
//                         src={info?.thumbnails?.default?.url}
//                         alt="Thumbnanil"
//                         className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
//                     />
//                 </Link>
//                 <div className="mt-6 mb-2">
//                     <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
//                         {info?.snippet?.channelTitle}
//                     </span>
//                     {/*  <h2 className="text-xl font-semibold tracking-wide">
//                         Nam maximus purus
//                     </h2> */}
//                 </div>
//                 <p className="dark:text-gray-800">{info?.title}</p>
//             </div>
//             )
//         </>
//     );
// };

// export default VideoSearchComponent;

// import { Link } from "react-router-dom";

// const VideoSearchComponent = ({ info }) => {
//     const snippet = info?.snippet; // Extract snippet from info

//     if (!snippet) return null; // Handle case when snippet is undefined

//     return (
//         <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
//             <Link to={"/watch/?v=" + info?.id?.videoId}>
//                 <img
//                     src={snippet?.thumbnails?.default?.url}
//                     alt="Thumbnail"
//                     className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
//                 />
//             </Link>
//             <div className="mt-6 mb-2">
//                 <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
//                     {snippet?.channelTitle}
//                 </span>
//                 {/*  <h2 className="text-xl font-semibold tracking-wide">
//                     {snippet?.title}  // Uncomment and use if needed
//                 </h2> */}
//             </div>
//             <p className="dark:text-gray-800">{snippet?.title}</p>
//         </div>
//     );
// };

// export default VideoSearchComponent;


import { Link } from "react-router-dom";

const VideoSearchComponent = ({ info }) => {
  return (
    <>
      {info?.snippet && (
        <div className="w-[250px] h-[300px] p-4 rounded-lg shadow-lg dark:bg-gray-800 dark:text-white">
          <Link to={"/watch/?v=" + info?.id?.videoId}>
            <img
              src={info?.snippet?.thumbnails?.medium?.url}
              alt="Thumbnail"
              className="object-cover w-full h-[150px] rounded-lg"
            />
          </Link>
          <div className="mt-4 mb-2">
            <span className="block text-xs font-semibold uppercase text-purple-500">
              {info?.snippet?.channelTitle}
            </span>
          </div>
          <p className="dark:text-gray-200 text-sm">{info?.snippet?.title}</p>
        </div>
      )}
    </>
  );
};

export default VideoSearchComponent;
