import React from "react";
import suc from "./suc.gif";
import { useNavigate } from "react-router-dom";

function Success() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <img src={suc} />
                <h2>Success!</h2>
                <br/>
                <button className="dark button" onClick={()=>navigate('/record')}>
                    Record Data
                </button>
                <br/>
                <button className="button" onClick={()=>navigate('/view')}>
                    View Data
                </button>
            </div>
        </div>
    )
}

export default Success;