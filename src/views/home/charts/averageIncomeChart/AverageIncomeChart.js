import React, { useState } from 'react'
import { Line } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"	
import "./averageIncomeChart.css"


function AverageIncomeChart() {
  

    const [data, setData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
          {
            label: "First dataset",
            data: [0, 30, 8, 65, 85],
            tension: 0.4,
            borderColor: "#4873d3",
            borderWidth: 2,
            pointBackgroundColor: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)", "#4873d3", "rgba(255, 255, 255, 0)"],
            pointBorderColor: ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0)", "#4873d3", "rgba(255, 255, 255, 0)"],
            pointRadius: 3,

          },
        
        ]
      })

      const options = {
        
        scales: {
          x: {
            display: false,
            grid: {display: false, drawBorder: false},
            ticks: {display: false,},
           
          },
          y: {
            display: false,
            grid: {display: false, drawBorder: false},
            ticks: {display: false},
            
          },
        },
        responsive: true,
        plugins: {legend: {position: 'none',},}
      }
      

      const style = {width:"100%"}


  return (
    <div className='lineChart03'>
        <div className='lineChart03_chartStyle'>
          <Line data={data} style={style} options={options}/>
        </div>
    </div>
  )
}

export default AverageIncomeChart