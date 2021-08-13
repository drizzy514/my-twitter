import { Link } from "react-router-dom";
import Auth from "../../components/Auth/Auth";
import Content from "../../components/Content/Content";


import Tweets from "../../components/Tweets/Tweets";
import "./Home.scss";

const Home = () => {
    
    return (
        <>
        <Tweets last={true}/>
      
        <Content />
        <Auth/>
        <form className="search-form">
            <input type="text" className="search-input" placeholder="search..." />
            <button type="button" className="search-btn">Search</button>
        </form>
        
        </>
    )
}
export default Home