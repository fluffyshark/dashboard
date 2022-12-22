import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import "./dealTypeChart.css"

function DealTypeChart() {


  
    const data = {
        labels: [],
        datasets: [{
          label: ["Deal Type"],
          data: [217, 58, 81],
          backgroundColor: [
            "#5967ff",
            "#5fd8e4",
            '#ebebeb'
          ],
          hoverOffset: 6,
          borderWidth: 4,
          borderRadius: 10,
       
        }],
        
      };

      var options = {        
        cutout: 65,
        maintainAspectRatio: false
    };


      const style = {width:"170px", height:"170px"}
    
    return (
        
        <div className='dealTypeChart'>
        <div className="dealTypeChart_top">
        <p className='dealTypeChart_top_title'>Deal Type</p>
        
        </div>
       
        <div className="dealTypeChart_middle">
                <div className="dealTypeChart_chartStyle">
                    <Doughnut data={data} style={{width:"170px",height:"170px"}} options={options} />
                    <div className="dealTypeChart_textContainer">
                        <p className='dealTypeChart_summary'>356</p>
                        <p className='dealTypeChart_smalltitle'>TOTAL</p>
                    </div>
                </div>
            </div>


        <div className="dealTypeChart_bottom">
            <div className="dealTypeChart_bottom_legend_container">
                <div className="dealTypeChart_bottom_legend">
                    <div id="legend_SBA504"></div>
                    <p>SBA 504</p>
                </div>
                <div className="dealTypeChart_bottom_legend">
                    <div id="legend_SBA7a"></div>
                    <p>SBA 7a</p>
                </div>
                <div className="dealTypeChart_bottom_legend">
                    <div id="legend_LOC"></div>
                    <p>LOC</p>
                </div>
            </div>
        </div>
        
    </div>


      )
    }

export default DealTypeChart;