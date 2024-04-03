import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <h2>नमस्ते admin!</h2>
                <h2 style={{textAlign: 'center'}}>भूअमृत कृषक उत्पादक संगठन में आपका स्वागत है।</h2>
                <br/><br/>
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

export default Dashboard;