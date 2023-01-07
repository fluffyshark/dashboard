import React, { useState } from 'react'
import dropDownArrow from "./images/dropdownArrowIcon.png"
import filter from "./images/icon_filter.png"
import profile_user from "../../components/navbar/images/profile_user.png" 

function HomeBottomView() {

  const [clientList, setClientList] = useState([
    {name: "Robinson Materials, Inc", progress: "Approval", type: "SBA 7a", amount: "$ 1,350,000", contact: "Sofi Kent", created: "09-06-2022", lastModified: "09-06-2022", img:{profile_user}},
    {name: "Gilbert Reeves", progress: "Underwriting", type: "SBA 7a", amount: "$ 2,150,000", contact: "Kevin Houston", created: "10-11-2022", lastModified: "10-11-2022", img:{profile_user}},
    {name: "Frank McGee", progress: "Application", type: "SBA 504", amount: "$ 550,000", contact: "Jerry Zimmerman", created: "12-12-2022", lastModified: "12-12-2022", img:{profile_user}},
    {name: "Danny Cook", progress: "Underwriting", type: "SBA 7a", amount: "$ 1,880,000", contact: "David Sharp", created: "04-02-2022", lastModified: "04-02-2022", img:{profile_user}},
    {name: "Great Systems, Inc", progress: "Approval", type: "SBA 504", amount: "$ 2,120,000", contact: "Adam Arcland", created: "06-01-2022", lastModified: "06-10-2022", img:{profile_user}},
    {name: "Sun Chemicals, Inc", progress: "Application", type: "SBA 504", amount: "$ 1,150,000", contact: "Emma Anderson", created: "08-02-2022", lastModified: "08-08-2022", img:{profile_user}},
  ]) 


  const [currentWidth, setCurrentWidth] = useState(parseInt(window.screen.width))

  const handleResize = () => {setCurrentWidth(window.innerWidth)}

  window.addEventListener('resize', handleResize)



  return (
    <div className="homeBottomView">

        <div className="home_bottom_top">
          
          <div className="home_bottom_top_left">
            <p>Active Deals</p>
            <div id="home_bottom_dropdown">
              <p>All types</p>
              <img src={dropDownArrow} alt="" />
            </div>
          </div>
          
          <div className="home_bottom_top_right">
          <div id="home_bottom_filter">
              <img src={filter} alt="" />
              <p>Filter</p>
            </div>
          </div>
        </div>

        <div className="home_bottom_bottom">
          <div className="home_bottom_client_constainer">
            <div className="home_bottom_client_top">
              <div className="client_category_name client_section" ><p className='client_categories'>NAME</p></div>
              <div className="client_category_progress client_section"><p className='client_categories'>PROGRESS</p></div>
              {currentWidth > 450 &&<div className="client_category_type client_section"><p className='client_categories'>TYPE</p></div>}
              {currentWidth > 520 &&<div className="client_category_amount client_section"><p className='client_categories'>AMOUNT</p></div>}
              {currentWidth > 700 &&<div className="client_category_contact client_section"><p className='client_categories'>CONTACT</p></div>}
              {currentWidth > 900 &&<div className="client_category_created client_section"><p className='client_categories '>CREATED</p></div>}
              {currentWidth > 900 && <div className="client_category_last_modified client_section"><p className='client_categories'>LAST MODIFIED</p></div>}
            </div>
          
          <div className="home_bottom_client_wrapper">
          {clientList.map((client, i) => {
                return (
                  <div key={i} className="home_bottom_client_bottom">
                  <div className="client_category_name client_section" ><p className='client_categories client_category_name '>{client.name}</p></div>
                  <div className="client_category_progress client_section">
                    <div className="client_category_progress">
                      {client.progress === "Approval" && <div id="client_progress_box1"><p className='client_categories'>{client.progress}</p></div>} 
                      {client.progress === "Underwriting" && <div id="client_progress_box2"><p className='client_categories'>{client.progress}</p></div>}
                      {client.progress === "Application" && <div id="client_progress_box3"><p className='client_categories'>{client.progress}</p></div>}
                    </div>
                  </div>
                  {currentWidth > 450 && <div className="client_category_type client_section"><p className='client_categories '>{client.type}</p></div>}
                  {currentWidth > 520 && <div className="client_category_amount client_section"><p className='client_categories '>{client.amount}</p></div>}
                  {currentWidth > 700 &&<div className="client_category_contact client_section"><img className='client_profile_pic' src={profile_user} alt="" /><p className='client_categories client_contact'>{client.contact}</p></div>}
                  {currentWidth > 900 &&<div className="client_category_created client_section"><p className='client_categories '>{client.created}</p></div>}
                  {currentWidth > 900 && <div className="client_category_last_modified client_section"><p className='client_categories '>{client.lastModified}</p></div>}
                  </div>
                )
              })}
          </div>    
              
              
          </div>
        </div>
    </div>
  )
}

export default HomeBottomView