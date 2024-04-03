import React from "react";
import './style.css';
import { useNavigate } from "react-router-dom";
import googleIcon from './google.svg';

function Login() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <h2>भूअमृत एफपीओ में आपका स्वागत है!</h2>
                <br/><br/>
                <form>
                    <input type="text" name="email" required className="input" placeholder="अपना ईमेल दर्ज करें"/>
                    <input type="password" name="password" required className="input" placeholder="अपना पासवर्ड दर्ज करें"/>
                </form>
                <br/>
                <button className="dark button" onClick={()=>navigate("/dashboard")}>लॉग इन</button>
                <br/>
                <div style={{display: 'flex', alignItems: 'center', gap: '1vmax', justifyContent: 'center'}}>
                    <div style={{border: "1px solid #E8ECF4", width: "12vmax", height: 0}}></div>
                    <h5 style={{color:"#6A707C"}}>or Login with</h5>
                    <div style={{border: "1px solid #E8ECF4", width: "12vmax", height: 0}}></div>
                </div>
                <br/>
                <button className="google">
                    <img src={googleIcon} alt="google" />
                </button>
                <br/>
                <h5 style={{color:"#6A707C"}}>कोई खाता नहीं है? <span style={{color: '#35C2C1'}} onClick={()=>navigate('/register')}>अभी पंजीकरण करें</span></h5>
            </div>
        </div>
    )
}

export default Login;