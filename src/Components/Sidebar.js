import React, { useState } from "react";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import { NavLink } from "react-router-dom";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AssistantIcon from '@material-ui/icons/Assistant';
import ReactTooltip from "react-tooltip";

const iconStyle = (fontsize) => {
  return {
    fill: "transparent",
    stroke: "#1a1a2c",
    strokeWidth: 1,
    fontSize: fontsize,
  };
};

function Sidebar() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const toggleSidebar = () =>
    setSidebarActive((sidebarActive) => !sidebarActive);

  return (
    <div className={`sidebar ${sidebarActive ? "active" : ""}`}>
      <h1 className="sidebar__icon" onClick={toggleSidebar}><span className="span-text" style={{display: 'inline-block'}}>a</span>k</h1>
      <div className="sidebar__menu">
        <NavLink
          to="/"
          exact
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Home"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <HomeRoundedIcon
            className="sidebar__menuIcon"
            style={iconStyle(36)}
          />
        </NavLink>
        <NavLink
          to="/about"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="About"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <InfoIcon
            className="sidebar__menuIcon"
            style={iconStyle(34)}
          />
        </NavLink>
        <NavLink
          to="/skills"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Skills"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <AssistantIcon
            className="sidebar__menuIcon"
            style={iconStyle(34)}
          />
        </NavLink>
        <NavLink
          to="/service"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Services"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <RoomServiceIcon
            className="sidebar__menuIcon"
            style={iconStyle(32)}
          />
        </NavLink>
        <NavLink
          to="/projects"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Projects"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <WorkOutlineIcon
            className="sidebar__menuIcon"
            style={iconStyle(30)}
          />
        </NavLink>
        
        <NavLink
          to="/contact"
          className="sidebar__menuItem"
          activeClassName="active"
          data-tip="Contact"
          data-for="sidebarTooltip"
          onClick={toggleSidebar}
        >
          <PermContactCalendarIcon
            className="sidebar__menuIcon"
            style={iconStyle(32)}
          />
        </NavLink>
      </div>
      
       <ReactTooltip
        place="right"
        className="app__toolTip"
        id="sidebarTooltip"
        backgroundColor="#1a1a2cee"
        effect="solid"
      />
    </div>
  );
}
export default Sidebar;
