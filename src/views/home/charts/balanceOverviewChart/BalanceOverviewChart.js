import React from 'react'
import "./balanceOverviewChart.css"
import { Bar } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"



function BalanceOverviewChart() {

    const data = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [{
            label: 'Income',
            data: [25, 90, 68, 59, 60, 80, 50, 65, 95, 65, 85, 48],
            backgroundColor: "#4873d3",
            borderColor: "#ffffff",
            borderWidth: 0,
            barThickness: 8,
            borderRadius: 15,
        },
        {
            label: 'Borrow',
            data: [50, 90, 100, 59, 80, 100, 65, 85, 95, 85, 100, 48],
            backgroundColor: "#a8def4",
            borderColor: "#ffffff",
            borderWidth: 0,
            barThickness: 8,
            borderRadius: 15,
          }
        ],
         
      }

      var options = {  
        //  Control bar thickness and space between bars 
        
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {position: 'none',},
        },
        
        scales: {
            x: {
                stacked: true, 
                ticks: {
                display: true,
                font: {size: 10},
                color: "grey",
              },
        
              // to remove the x-axis grid
              grid: {
                drawBorder: false,
                display: false, 
                
              },
            },
            // to remove the y-axis labels
            y: {
      
              ticks: {
                display: true,
                beginAtZero: true,
                min: 0,
                max: 100,
                stepSize: 25,
                color: "grey",
                font: {size: 11},
                callback: function(value, index, values) {
                    if (index === "") {return "Target"} 
                    else {return tickNames[index]} 
                    
                  }
             
              },
              // to remove the y-axis grid
              grid: {
                drawBorder: false,
                display: true,
                
              },
            },
          },
        
        
    };

      const tickNames = ["0", "10", "50", "80", "100"]
      const style = {width:"410px"}


  return (
    <div className='barChart03'>
        <div className="barChart3_top">
        <p className='barChart3_top_title'>Balance Overview</p>
        
        </div>
        <div className="barChart3_center">
            <div className='barChart03_chartStyle'>
                <Bar data={data} options={options} style={style}/>
            </div>
        </div>
        <div className="barChart3_bottom">
            <div className="barChart3_bottom_legend_container">
                <div className="barChart3_bottom_legend">
                    <div id="legend_income"></div>
                    <p>Income</p>
                </div>
                <div className="barChart3_bottom_legend">
                    <div id="legend_borrow"></div>
                    <p>Borrow</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default BalanceOverviewChart