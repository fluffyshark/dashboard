import React from 'react'
import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"



function IncomeChart() {

    const data = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
            label: 'Instant Income',
            data: [750000, 900000, 1250000, 800000, 500000, 800000, 750000, 950000, 900000, 700000, 1200000, 1100000],
            backgroundColor: "#4873d3",
            borderColor: "#4873d3",
            pointBackgroundColor: "rgba(0, 0, 0, 0.0)",
            borderWidth: 2,
            tension: 0.4,
        },
        
        {
            label: 'Predict Income',
            data: [1050000, 900000, 750000, 800000, 1050000, 950000, 500000, 750000, 950000, 850000, 950000, 850000],
            backgroundColor: "#a8def4",
            borderColor: "#a8def4",
            pointBackgroundColor: "rgba(0, 0, 0, 0.0)",
            borderWidth: 2,
            tension: 0.4,
          },
          {
            // Third dataset just for manipulating the y-axis
            data: [0],
            pointBackgroundColor: "rgba(0, 0, 0, 0.0)",
          }
        ],
         
      }

      var options = {  
        elements:{
            point:{
                // Place in datasets to make it affects only one line
                borderWidth: 0,
                pointBorderWidth: 0,
                radius: 10,
            }
        },
        
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
         
          legend: {
            position: 'none',
          },
        
         
        },
        
        scales: {
            
          
        
            x: {
               
              ticks: {
                display: true,
                font: {size: 10},
                color: "grey",
                
                
              },
        
              // to remove the x-axis grid
              grid: {
                drawBorder: true,
                borderColor: "blue",
                display: true, 
                color:"transparent",
                
               
              },
            },
            // to remove the y-axis labels
            y: {
                
              ticks: {
                display: true,
                beginAtZero: true,
                min: 0,
                max: 1500000,
                stepSize: 500000,
                color: "grey",
                font: {size: 11},
                callback: function(value, index, values) {
                    if (index === "") {return "Target"} 
                    else {return tickNames[index]} 
                    
                  }
             
              },
              // to remove the y-axis grid
              beginAtZero: true,
              grid: {
                drawBorder: false,
                display: true,
              },
              
            },
          },
        
        
    };

      const tickNames = ["0", "500 K", "1 M", "1,5 M"]
      const style = {width:"410px"}


  return (
    <div className='incomeChart'>
        <div className="incomeChart_top">
        <p className='incomeChart_top_title'>Income</p>
        
        </div>
        <div className="incomeChart_center">
            <div className='incomeChart_chartStyle'>
                <Line data={data} options={options} style={style}/>
            </div>
        </div>
        <div className="incomeChart_bottom">
            <div className="incomeChart_bottom_legend_container">
                <div className="incomeChart_bottom_legend">
                    <div id="legend_instant_income"></div>
                    <p>Instant Income</p>
                </div>
                <div className="incomeChart_bottom_legend">
                    <div id="legend_predict_borrow"></div>
                    <p>Predict Income</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default IncomeChart