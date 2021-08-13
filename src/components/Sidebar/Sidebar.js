import "./Sidebar.scss"
import {  NavLink, Link } from "react-router-dom";
import twitterLogo from "../../icons/tw.png";




/*  icons */
    import homeIcon from "../../icons/home_24px.png";
    import exploreIcon  from "../../icons/hashtag_activity_feed_24px.png";
    import notificationIcon from "../../icons/notification_24px.png";
    import messageIcon from "../../icons/message_exchange_24px.png";
    import bookmarkIcon from "../../icons/bookmark_24px.png";
    import listIcon from "../../icons/playlist_24px.png";
  
    import moreIcon from "../../icons/view_more_24px.png";

/* icons */

const Sidebar = () =>{

    return (
        <>
              
            <header className="sidebar">
                <nav className="sidebar__nav">
                    <ul className="sidebar__nav-list">
                        <li className="sidebar__nav-item main-logo">
                            <NavLink  to="/"> <img src={twitterLogo}/> </NavLink>
                        </li>
                        <li className="sidebar__nav-item">
                            <img src={homeIcon} alt="home-icon" />
                            <NavLink to="/" className="sidebar__item-link active-home" > Home</NavLink>
                        </li> 
                        
                        <li className="sidebar__nav-item">
                        <img src={notificationIcon} alt="home-icon" />
                            <NavLink className="sidebar__item-link" to="/notification"> Notifications</NavLink>
                        </li>
                        <li className="sidebar__nav-item">
                        <img src={messageIcon} alt="home-icon" />
                            <NavLink className="sidebar__item-link" to="/message">  Messages</NavLink>
                        </li>
                        <li className="sidebar__nav-item">
                        <img src={listIcon} alt="home-icon" />
                            <NavLink className="sidebar__item-link" to="/lists"> Lists </NavLink>
                        </li>
                        <li className="sidebar__nav-item">
                        <img src={bookmarkIcon} alt="home-icon" />
                            <NavLink className="sidebar__item-link" to="/bookmark">  Bookmarks</NavLink>
                        </li>
                        <li className="sidebar__nav-item">
                        <img src={exploreIcon} alt="home-icon" />
                            <NavLink className="sidebar__item-link" to="/explore">Explore </NavLink>
                        </li>
                       
                        
                        <li className="sidebar__nav-item">
                        <img src={moreIcon} alt="home-icon" />
                        <NavLink className="sidebar__item-link" to="/more"> More </NavLink>                           
                        </li>
                       
                        
                    </ul>
                  
                    <button type="button" className="sidebar__btn">Tweet</button>
                  
                </nav>
            </header>
         
        </>
    )
}
export default Sidebar