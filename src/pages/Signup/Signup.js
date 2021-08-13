
import { Link } from "react-router-dom";
import "./Signup.scss";

const Signup = () => {
    return (
        <>
                <div className="section">
            <div className="container">
                <h1 className="section__title">Sign up</h1>
                <form className="form">
                    <input className="user-input" placeholder="username" type="text"/>
                    <input className="password-input" placeholder="password" type="password"/>
                    <button className="submit-btn">Submit</button>
                </form>
                <p>
                    <Link to="/login">Login</Link>
                </p>
            </div>

        </div>
        </>
    )
}
export default Signup