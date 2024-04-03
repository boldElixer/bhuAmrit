import React from "react";
import { useNavigate } from "react-router-dom";
import googleIcon from '../login/google.svg';

function Register() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <h2>नमस्ते! आरंभ करने के लिए पंजीकरण करें</h2>
                <br/><br/>
                <form>
                    <input type="text" name="name" required className="input" placeholder="अपना नाम दर्ज करें"/>
                    <input type="text" name="email" required className="input" placeholder="अपना ईमेल दर्ज करें"/>
                    <input type="password" name="password" required className="input" placeholder="अपना पासवर्ड दर्ज करें"/>
                </form>
                <br/>
                <button className="dark button" onClick={()=>navigate("/")}>Register</button>
                <br/>
                <div style={{display: 'flex', alignItems: 'center', gap: '1vmax', justifyContent: 'center'}}>
                    <div style={{border: "1px solid #E8ECF4", width: "12vmax", height: 0}}></div>
                    <h5 style={{color:"#6A707C"}}>or Register with</h5>
                    <div style={{border: "1px solid #E8ECF4", width: "12vmax", height: 0}}></div>
                </div>
                <br/>
                <button className="google">
                    <img src={googleIcon} alt="google" />
                </button>
                <br/>
                <h5 style={{color:"#6A707C"}}>Already have an account? <span style={{color: '#35C2C1'}} onClick={()=>navigate('/login')}>Login now</span></h5>
            </div>
        </div>
    )
}

export default Register;