import React from "react";

function Card({date, name, turns, moisture, oil_temp, seed_weight, oil_weight, cake_weight}) {
    return (
        <div className="card">
            <ul>
                <li><b>तारीख:</b> {date}</li>
                <li><b>घुमाव संख्या:</b> {turns}</li>
                <li><b>तेल का तापमान:</b> {oil_temp}&deg;C</li>
                <li><b>बीज का वजन:</b> {seed_weight}kg</li>
            </ul>
            <ul>
                <li><b>नाम:</b> {name}</li>
                <li><b>बीज की नमी:</b> {moisture}%</li>
                <li><b>तेल का वजन:</b> {oil_weight}kg</li>
                <li><b>केक का वजन:</b> {cake_weight}kg</li>
            </ul>
        </div>
    )
}

export default Card;