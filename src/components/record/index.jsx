import React, { useState } from "react";
import data from "../view/data.json";
import { useNavigate } from "react-router-dom";

function Record() {
    let navigate = useNavigate();
    let today = new Date();
    var myDate = today.toISOString().substr(0,10);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        data.push(inputs);
        navigate("/success");
    }

    return (
        <div className="mainPage">
            <div className="content">
                <h2>रिकॉर्ड सरसों डेटा</h2>
                <br/>
                <h4 style={{background: 'pink', padding: '1px 6px'}} onClick={()=>navigate('/dashboard')}>BACK</h4>
                <br/>
                <form onSubmit={handleSubmit}>
                    <input type="date" name="date" required className="recordInput" placeholder="Select date" defaultValue={myDate} onChange={handleChange} value={inputs.date}/>
                    <input type="text" name="name" required className="recordInput" placeholder="किसान का नाम" onChange={handleChange} value={inputs.name}/>
                    <input type="number" step={0.01} name="turns" required className="recordInput" placeholder="घुमावों की संख्या" onChange={handleChange} value={inputs.turns}/>
                    <input type="number" step={0.01} name="moisture" required className="recordInput" placeholder="बीज की नमी" onChange={handleChange} value={inputs.moisture}/>
                    <input type="number" step={0.01} name="oil_temp" required className="recordInput" placeholder="तेल का तापमान" onChange={handleChange} value={inputs.oil_temp}/>
                    <input type="number" step={0.01} name="seed_weight" required className="recordInput" placeholder="बीज का वजन" onChange={handleChange} value={inputs.seed_weight}/>
                    <input type="number" step={0.01} name="oil_weight" required className="recordInput" placeholder="तेल का वजन" onChange={handleChange} value={inputs.oil_weight}/>
                    <input type="number" step={0.01} name="cake_weight" required className="recordInput" placeholder="केक का वजन" onChange={handleChange} value={inputs.cake_weight}/>
                    <input type="submit" className="dark button" />
                </form>
            </div>
        </div>
    )
}

export default Record;