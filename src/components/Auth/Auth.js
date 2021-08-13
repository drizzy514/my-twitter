import { Link } from "react-router-dom";
import "./Auth.scss";

function Auth (){
    
    return (
        <>
            <div className="auth-container">
                <Link className="auth-link" to="/login">Login in</Link>
                <Link className="auth-link" to="/signup">Sign up</Link>
            </div>
              
           
        </>
    )
}
export default Auth