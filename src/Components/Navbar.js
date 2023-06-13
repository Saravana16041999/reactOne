import React from "react";
import { AiFillSetting, AiFillInfoCircle } from "react-icons/ai";
import { RiMessage2Fill } from "react-icons/ri";
import {
  MdDashboard,
  MdAttachment,
  MdDashboardCustomize,
  MdOutlineEvent,
} from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-dashboard">
      <div className="nav-content">
        <div>
          <MdDashboard className="icon-dash" />
          <Link to={"/Dashboard"}>Dashboard</Link>
        </div>
        <div>
          <MdAttachment className="icon-dash" />
          <Link to={"/Shortcut"}>Shortcuts</Link>
        </div>
        <div>
          <MdDashboardCustomize className="icon-dash" />
          <Link to={"/Overview"}>Overview</Link>
        </div>
        <div>
          <MdOutlineEvent className="icon-dash" />

          <Link to={"/event"}>Events</Link>
        </div>
        <div>
          <AiFillInfoCircle className="icon-dash" />

          <Link to={"/About"}>About</Link>
        </div>
        <div>
          <AiFillSetting className="icon-dash" />

          <Link to={"/Services"}>Services</Link>
        </div>
        <div>
          <RiMessage2Fill className="icon-dash" />
          <Link to={"/Contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
