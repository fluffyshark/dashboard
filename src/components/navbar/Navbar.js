import React from 'react'
import "./styles/navbar.css"
import logotype from "./images/logotype.png"
import icon_mail from "./images/icon_mail.png"
import icon_bell from "./images/icon_bell.png"
import profile_user from "./images/profile_user.png"

function Navbar() {
  return (
    <div className="navbar">
        <div className="navbar_left">
            <img className="navbar_left_logotype" src={logotype} alt="" />
        </div>
        <div className="navbar_center">
            <p id="navbar_home">Home</p>
            <p id="navbar_checklist">Checklist</p>
            <p id="navbar_send_checklist">Send Checklist</p>
            <p id="navbar_sitedrop">Sitedrop</p>
            <p id="navbar_activity_log">Activity Log</p>
        </div>
        <div className="navbar_right">
            <div id="navbar_mail"><img src={icon_mail} alt="" /></div>
            <div id="navbar_bell"><img src={icon_bell} alt="" /></div>
            <div id="navbar_profile"><img src={profile_user} alt="" /><p>Robin Yjord</p></div>
        </div>
    </div>
  )
}

export default Navbar