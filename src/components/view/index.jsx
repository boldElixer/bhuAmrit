import React from "react";
import data from "./data.json";
import "./style.css";
import { useNavigate } from "react-router-dom";

function View() {
    let navigate = useNavigate();
    return (
        <div className="mainPage">
            <div className="content">
                <h2>Recent mustard data entries</h2>
                <br/>
                <h4 style={{background: 'pink', padding: '1px 6px'}} onClick={()=>navigate('/dashboard')}>BACK</h4>
                <br/>
                <div style={{overflow: 'scroll', maxHeight: '80vh', width: '90%'}}>
                    <table>
                        <tr>
                            <th>Date</th>
                            <th>Name</th>
                            <th>Wt. of oil(kg)</th>
                            <th>Wt. of seed(kg)</th>
                        </tr>
                        {data.map(item=>{
                            return (
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.name}</td>
                                    <td>{item.oil_weight}</td>
                                    <td>{item.mustard_seed_weight}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default View;