
import { Link, Redirect } from "react-router-dom";

import "./Login.scss";


const Login = () => {
    
    
    return (

       
        <>
        <div className="section">
            <div className="container">
                <h1 className="section__title">Login in</h1>
                <form className="form"
               
                >
                    <input className="user-input" placeholder="name" 
                    onChange={
                        function  (e){
                            return window.localStorage.setItem("token", e.target.value)
                        }
                       
                    }
                    type="text"/>
                    <input className="password-input" placeholder="username"
                     onChange={
                        function  (e){
                            
                            return window.localStorage.setItem("userinput", e.target.value)
                        }
                       
                    }
                    type="text"/>
                    <Link  className="submit-btn"
                   
                    >Submit</Link>
                    




                </form>
                <p>
                    <Link to="/signup">Sign up</Link>
                </p>
            </div>

        </div>
        </>
    )
}
export default Login