import React from "react";
import data from "./data.json";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Card from "./card";

function View() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <h2>हाल की सरसों डेटा प्रविष्टियाँ</h2>
                <br/>
                <h4 style={{background: 'pink', padding: '1px 6px'}} onClick={()=>navigate('/dashboard')}>BACK</h4>
                <br/>
                <div style={{overflow: 'scroll', maxHeight: '80vh', width: '100%'}}>
                    {data.map(item=>{
                        return (
                            <Card 
                                date={item.date}    
                                name={item.name}
                                turns={item.turns}
                                moisture={item.moisture}
                                oil_temp={item.oil_temp}
                                seed_weight={item.seed_weight}
                                oil_weight={item.oil_weight}
                                cake_weight={item.cake_weight}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default View;