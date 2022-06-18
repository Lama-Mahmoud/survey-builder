import './Login.css';
import profile from'./profile.png';

const Login = () => {
    return ( 
        <div className="login" align="center">
            <img src={profile}></img>
            <div >
                <input type="text" className="input" id="email" placeholder="Email..."/>
                <input type="password" className="input" id="password" placeholder="Password..."/>
                <button className="Button" id="login">Log in</button>
            </div>
        </div>
     );
}
 
export default Login;