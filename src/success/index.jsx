import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Success() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <div class="wrapper">
                    <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
                </div>
                <h2>Success!</h2>
                <br/>
                <button className="dark button" onClick={()=>navigate('/record')}>
                    रिकॉर्ड डेटा
                </button>
                <br/>
                <button className="button" onClick={()=>navigate('/view')}>
                    डेटा देखें
                </button>
                <br/>
                <button className="dark button" onClick={()=>navigate('/insights')}>
                    डेटा विश्लेषण
                </button>
            </div>
        </div>
    )
}

export default Success;