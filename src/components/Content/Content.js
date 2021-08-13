import "./Content.scss";



/* icons */
import starsIcon from "../../icons/sparkling_24px.png"
import userIcon from "../../icons/add_male_user_50px.png";
import galleryIcon from "../../icons/gallery_16px.png";
import gifIcon from "../../icons/gif_16px.png";
import statisticIon from "../../icons/combo_chart_16px.png";
import smileIcon from "../../icons/in_love_16px.png";

import { NavLink } from "react-router-dom";


function Content (){
    return (
        <>
            <section className="content" >
                <div className="content__header">
                    <h1 className="content__title"> Home</h1>
                    <div className="sidebar__profile">
                       
                        <NavLink className="sidebar__item-link" to="/profile"> {localStorage.getItem("token")} </NavLink>                           
                        </div>
                    <div className="content__star-icon">
                        <img src={starsIcon} alt="star-icon" />

                    </div>
                </div>
                <div className="content__intro">
                    <img src={userIcon}/>
                        <div className="content__desc">
                            <p className="content__text">What's happening?</p>
                            <img src={galleryIcon} />
                            <img src={gifIcon} />
                            <img src={statisticIon} />
                            <img src={smileIcon} />
                        </div>
                        <button type="button" className="content__btn">Tweet</button>
                </div>

                    <div className="content__body">
                        
                    </div>

            </section>
        </>

    )
}
export default Content