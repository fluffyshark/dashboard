import React, { useState } from 'react'
import logotype from "./images/logotype.png"
import icon_mail from "./images/icon_mail.png"
import icon_bell from "./images/icon_bell.png"
import profile_user from "./images/profile_user.png"
import icon_home from "./images/icon_home.png"
import icon_checklist from "./images/icon_checklist.png"
import icon_send_checklist from "./images/icon_send_checklist.png"
import icon_sitedrop from "./images/icon_sitedrop.png"
import icon_activity_log from "./images/icon_activity_log.png"

function Navbar() {

  const [currentWidth, setCurrentWidth] = useState(window.screen.width)
  const [profileName, setProfileName] = useState("Sebastian Robin Yjord")

  const handleResize = () => {
    // put your logic here
    setCurrentWidth(window.innerWidth)
  }

  console.log(currentWidth)
  
  window.addEventListener('resize', handleResize)




  const limited_profile_name = () => {

    let name = profileName
    
    let fullNameArray = name.split(" ");

    let letterCount = fullNameArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.length;
    }, 0);

    let maxLetters = () => {
      let size = 15
      if (currentWidth < 825) {size = 10}
      if (currentWidth < 749) {size = 0}

      return size
    }

    const nameCounts = fullNameArray.length

    for (let i = 0; i < nameCounts; i++) {
      if (letterCount > maxLetters()) {fullNameArray.pop()}

      letterCount = fullNameArray.reduce((accumulator, currentValue) => {return accumulator + currentValue.length;}, 0);

    }

    name = fullNameArray.join(" ");

    return name
  }


 

  


  const navbar_text_or_icons = () => {
    let tags = <></>

    if (currentWidth > 1180) {
      tags = (
        <div className="navbar_center">
            <p id="navbar_home">Home</p>
            <p id="navbar_checklist">Checklist</p>
            <p id="navbar_send_checklist">Send Checklist</p>
            <p id="navbar_sitedrop">Sitedrop</p>
            <p id="navbar_activity_log">Activity Log</p>
        </div>
      )
    } else {
      tags = (
        <div className="navbar_center">
            <img src={icon_home} alt="" />
            <img src={icon_checklist} alt="" />
            <img src={icon_send_checklist} alt="" />
            <img src={icon_sitedrop} alt="" />
            <img src={icon_activity_log} alt="" />
        </div>
      )
    }

    

    return tags
  }

  return (
    <div className="navbar">
        <div className="navbar_left">
            <img className="navbar_left_logotype" src={logotype} alt="" />
        </div>
        {navbar_text_or_icons()}
        <div className="navbar_right">
            <div id="navbar_mail"><img src={icon_mail} alt="" /></div>
            <div id="navbar_bell"><img src={icon_bell} alt="" /></div>
            <div id="navbar_profile"><img src={profile_user} alt="" /><p>{limited_profile_name()}</p></div>
        </div>
    </div>
  )
}

export default Navbar