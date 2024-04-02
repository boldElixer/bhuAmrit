import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <h2>Hello admin!</h2>
                <h2 style={{textAlign: 'center'}}>Welcome to Bhu Amrit Farmer Producer Organization.</h2>
                <br/><br/>
                <button className="dark button" onClick={()=>navigate('/record')}>
                    Record Data
                </button>
                <br/>
                <button className="button" onClick={()=>navigate('/view')}>
                    View Data
                </button>
                <br/>
                <button className="dark button" onClick={()=>navigate('/insights')}>
                    View Insights
                </button>
            </div>
        </div>
    )
}

export default Dashboard;