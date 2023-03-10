import React from 'react'
// Components
import BalanceOverviewChart from './charts/balanceOverviewChart/BalanceOverviewChart'
import IncomeChart from './charts/incomeChart/IncomeChart'
import DealTypeChart from './charts/dealTypeChart/DealTypeChart'
import HomeTopView from './HomeTopView'
import HomeBottomView from './HomeBottomView'


function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <div className="home_top">
          <HomeTopView />
        </div>

        <div className="home_middle">
          <div className="home_middle_container">
            <BalanceOverviewChart />
            <IncomeChart />
            <DealTypeChart />
          </div>
        </div>

        <div className="home_bottom">
          <HomeBottomView />
        </div>
      </div>
        
    </div>
  )
}

export default Home