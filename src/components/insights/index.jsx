import React from "react";
import data from "../view/data.json";
import { Bar } from "react-chartjs-2";
import { Bar as BarJS } from 'chart.js/auto';
import { useNavigate } from "react-router-dom";

function Insights() {

    data.forEach(entry => {
        entry.month = entry.date.split('-')[1];
        console.log(entry.month);
    });

    const monthlyData = data.reduce((acc, entry) => {
        acc[entry.month] = [...(acc[entry.month] || []), entry];
        return acc;
    }, {});

    const avgValuesByMonth = {};
    for (const month in monthlyData) {
        avgValuesByMonth[month] = {
        oil_weight: monthlyData[month].reduce((sum, entry) => sum + entry.oil_weight, 0) / monthlyData[month].length,
        cake_weight: monthlyData[month].reduce((sum, entry) => sum + entry.cake_weight, 0) / monthlyData[month].length,
        seed_weight: monthlyData[month].reduce((sum, entry) => sum + entry.seed_weight, 0) / monthlyData[month].length,
        };
    }

    const chartData = {
        labels: Object.keys(avgValuesByMonth),
        datasets: [
          {
            label: 'Oil Weight',
            data: Object.values(avgValuesByMonth).map(values => values.oil_weight),
            borderColor: 'rgba(153, 102, 255, 1)',
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderWidth: 1,
          },
          {
            label: 'Cake Weight',
            data: Object.values(avgValuesByMonth).map(values => values.cake_weight),
            borderColor: 'rgba(255, 159, 64, 1)',
            backgroundColor: 'rgba(255, 159, 64, 0.2)',
            borderWidth: 1,
          },
          {
            label: 'Seed Weight',
            data: Object.values(avgValuesByMonth).map(values => values.seed_weight),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
          },
        ],
    };

    const options = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: 'Average Weight'
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }]
        },
    };

    const oilWeightByFarmer = data.reduce((acc, entry) => {
        acc[entry.name] = (acc[entry.name] || 0) + entry.oil_weight;
        return acc;
    }, {});

    const sortedFarmers = Object.keys(oilWeightByFarmer).sort((a, b) => oilWeightByFarmer[b] - oilWeightByFarmer[a]);

    const top5Farmers = sortedFarmers.slice(0, 5);

    const chartFData = {
        labels: top5Farmers,
        datasets: [
          {
            label: 'Oil Weight',
            data: top5Farmers.map(farmer => oilWeightByFarmer[farmer]),
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          },
        ],
      };
    
      const Foptions = {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: 'Average Weight'
            }
          }]
        },
      };
    
    let navigate = useNavigate();
    
    return (
        <div className="mainPage">
            <div className="content">
                <h2>डेटा विश्लेषण</h2>
                <br/>
                <h4 style={{background: 'pink', padding: '1px 6px'}} onClick={()=>navigate('/dashboard')}>BACK</h4>
                <br/>
                <div className="button" style={{backgroundColor: '#AEFF00', border: 'none'}}>अनुकूल घुमाव संख्या: <b>8</b></div>
                <br/>
                <div className="button" style={{backgroundColor: '#AEFF00', border: 'none'}}>अनुकूल बीज की नमी: <b>10%</b></div>
                <br/>
                <div className="button" style={{backgroundColor: '#AEFF00', border: 'none'}}>अनुकूल मशीन तापमान: <b>40&deg;C</b></div>
                <br/>
                <h4>मौसमी प्रभाव</h4>
                <Bar data={chartData} options={options} />
                <br/>
                <h4>शीर्ष किसान</h4>
                <Bar data={chartFData} options={Foptions} />
            </div>
        </div>
    )
}

export default Insights;