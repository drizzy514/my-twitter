import './App.scss';
import { Switch, Route } from "react-router-dom";





/*  pages */
import Home from "./pages/Home/Home";
import Profile from './pages/Profile/Profile';
import Login from"./pages/Login/Login"
import Signup from"./pages/Signup/Signup"
import Public from './routes/Public';
import Private from './routes/Private';
import Sidebar from './components/Sidebar/Sidebar';
/* pages */

function App() {
  return (
        <div className="app">
        
          <Sidebar />
          <Switch>
         
            <Public path="/" component={Home} exact/>
            <Public path="/login" component={Login}/>
            <Public path="/signup" component={Signup}/>
            <Private path="/profile" component={Profile}/>
        </Switch>
        </div>
  );
}

export default App;
