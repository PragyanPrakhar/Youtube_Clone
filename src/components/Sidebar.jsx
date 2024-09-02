import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen=useSelector((state)=>state.app.isMenuOpen);

    //Early Return
    if(!isMenuOpen){
        return null;
    }
    return (
        <div className="p-5 shadow-lg w-48">
            <ul>
                <Link to="/">Home</Link>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Lives</li>
            </ul>

            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Movies</li>
                <li>TV Shows</li>
            </ul>

            <h1 className="font-bold pt-5">Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Movies</li>
                <li>TV Shows</li>
            </ul>
        </div>
    );
};

export default Sidebar;
