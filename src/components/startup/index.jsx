import React from "react";
import './style.css';
import logo from "../../logo.png";
import { useNavigate } from "react-router-dom";

function Startup() {
    let navigate = useNavigate();
    return (
        <div className="main">
            <div className="content">
                <img src={logo} alt="Bhuamrit logo" className="logo"/>
                <br/><br/>
                <button className="dark button" onClick={()=>navigate("/login")}>लॉग इन</button>
                <br/>
                <button className="button" onClick={()=>navigate("/register")}>पंजीकरण</button>
            </div>
        </div>
    )
}

export default Startup;