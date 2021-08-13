import "./Profile.scss"


import { useParams } from "react-router";



import logoutIcon from "../../icons/logout_rounded_left_50px.png"
import Tweets from "../../components/Tweets/Tweets";
import profileImg from "../../icons/step-illustration_2.png";
import calendarIccon from "../../icons/calendar_24px.png"; 
import { Link, useHistory } from "react-router-dom";

function Profile (){
    const histroy = useHistory();
    function logOut (){

        localStorage.clear();
        histroy.push('/')
    }
    const username = useParams();
    const profileName = window.localStorage.getItem("token");
    const profileUserName = window.localStorage.getItem("userinput")
    // const clearLocalStorage = window.localStorage.clear("token", "userinput")

    return <>
 
        <div className="profile-page">
            <div className="profile-page__header">
                <div>
                    <img src={profileImg} alt="profile-img"  />
                    </div>
                <div className="edit-profile">
                    <button type="button" className="edit-btn">Edit profile</button>
                 </div>
             </div>
                   
               
            
                <div className="profile-page__body">
                <p className="user-name">{profileName}</p>
                    <p className="username"> @{profileUserName}</p>
                    <p> <span><img src={calendarIccon} alt="calendar-icon"/></span> Joined  August 2021</p>
                    <p className="following-text"> <strong className="number-following">0</strong>  Following <span> <strong className="number-following">0</strong> Followers </span>  </p>
            
                </div>
                <div className="profile-page__footer">
             
                </div>
               

                <Link onClick={logOut} ><img src={logoutIcon} /></Link>
        </div>
     
        <Tweets  username={username}/>
    </>
}
export default Profile