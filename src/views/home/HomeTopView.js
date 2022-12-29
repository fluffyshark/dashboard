import React from 'react'
import icon_arrowup from "./images/icon_arrowup.png"
import icon_arrowdown from "./images/icon_arrowdown.png"
import AverageIncomeChart from './charts/averageIncomeChart/AverageIncomeChart'
import AnnualDealsChart from './charts/annualDealsChart/AnnualDealsChart'

function HomeTopView() {
  return (
    <div className='homeTopView'>

        <div className="home_top_arrow_stat">
            <div className="home_top_arrow_stat_top home_toptop_standard"><p className='home_top_arrow_stat_title'>BORROWED</p></div>
            <div className="home_top_arrow_stat_bottom home_topbottom_standard"><p className='home_top_arrow_stat_amount'>$25,300,000</p><img src={icon_arrowup} alt="" /></div>
        </div>
            
        <div id="home_top_annual_profit" className="home_top_arrow_stat">
            <div className="home_top_arrow_stat_top home_toptop_standard"><p className='home_top_arrow_stat_title'>ANNUAL PROFIT</p></div>
            <div className="home_top_arrow_stat_bottom home_topbottom_standard"><p className='home_top_arrow_stat_amount'>$4,350,000</p><img src={icon_arrowdown} alt="" /></div>
        </div>
            
        <div id="home_top_lead_conversion" className="home_top_lead_conversion">
            <div className="home_top_lead_conversion_stat_top home_toptop_standard"><p className='home_top_arrow_stat_title'>LEAD CONVERSION</p></div>
            <div className="home_top_lead_conversion_stat_bottom home_topbottom_standard"><p className='home_top_arrow_stat_amount'>45.13%</p><img src={icon_arrowup} alt="" /></div>
        </div>
            
        <div id="home_top_average_income" className="home_top_graph_stat">
            <div className="home_top_graph_stat_part">
                <div className="home_top_graph_stat_top home_toptop_standard"><p className='home_top_arrow_stat_title'>AVERAGE INCOME</p></div>
                <div className="home_top_graph_stat_bottom home_topbottom_standard"><p className='home_top_arrow_stat_amount'>$1,350,000</p></div>
            </div>
            <div className="home_top_graph_graph_part">
                <AverageIncomeChart />
                <p>+18%</p>
            </div>
        </div>

        <div className="home_top_annual_deals">
            <div className="home_top_annual_deals_stat_part">
                <div className="home_top_annual_deals_stat_top home_toptop_standard"><p className='home_top_arrow_stat_title'>AVERAGE DEALS</p></div>
                <div className="home_top_annual_deals_stat_bottom home_topbottom_standard"><p className='home_top_arrow_stat_amount'>10,351</p></div>
            </div>
            <div className="home_top_annual_deals_graph_part">
                <AnnualDealsChart />
                <p>-12%</p>
            </div>
        </div>

    </div>
  )
}

export default HomeTopView