import React from "react";
import { useNavigate } from "react-router-dom";

function Record() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <h2>Record mustard data</h2>
                <br/>
                <h4 style={{background: 'pink', padding: '1px 6px'}} onClick={()=>navigate('/dashboard')}>BACK</h4>
                <br/>
                <form>
                    <input type="date" name="date" required className="input" placeholder="Select date"/>
                    <input type="text" name="name" required className="input" placeholder="Enter farmer name"/>
                    <input type="number" step={0.01} name="oil_weight" required className="input" placeholder="Enter oil weight"/>
                    <input type="number" step={0.01} name="seed_weight" required className="input" placeholder="Enter seed weight"/>
                    <input type="submit" className="dark button" onClick={()=>navigate("/success")} />
                </form>
            </div>
        </div>
    )
}

export default Record;