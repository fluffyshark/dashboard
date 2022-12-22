import React from 'react'
import "./styles/home.css"
// Components
import BalanceOverviewChart from './charts/balanceOverviewChart/BalanceOverviewChart'
import IncomeChart from './charts/incomeChart/IncomeChart'
import DealTypeChart from './charts/dealTypeChart/DealTypeChart'
import HomeTopView from './HomeTopView'
import HomeBottomView from './HomeBottomView'


function Home() {
  return (
    <div className='home'>
        <div className="home_top">
          <HomeTopView />
        </div>

        <div className="home_middle">
          <BalanceOverviewChart />
          <IncomeChart />
          <DealTypeChart />
        </div>

        <div className="home_bottom">
          <HomeBottomView />
        </div>
    </div>
  )
}

export default Home