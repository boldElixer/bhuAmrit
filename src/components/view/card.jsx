import React from "react";

function Card({date, name, turns, moisture, oil_temp, seed_weight, oil_weight, cake_weight}) {
    return (
        <div className="card">
            <ul>
                <li><b>Date:</b> {date}</li>
                <li><b>Outlet gap:</b> {turns}</li>
                <li><b>Oil Temp:</b> {oil_temp}&deg;C</li>
                <li><b>Seed weight:</b> {seed_weight}kg</li>
            </ul>
            <ul>
                <li><b>Name:</b> {name}</li>
                <li><b>Seed moisture:</b> {moisture}%</li>
                <li><b>Oil weight:</b> {oil_weight}kg</li>
                <li><b>Cake weight:</b> {cake_weight}kg</li>
            </ul>
        </div>
    )
}

export default Card;