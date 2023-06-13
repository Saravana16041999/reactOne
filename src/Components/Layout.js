import React from "react";
import { IoIosNotifications } from "react-icons/io";

const Layout = () => {
  return (
    <div className="top-nav">
      <h2>My App</h2>
      <div className="notification">
        <IoIosNotifications className="notification-icon" />
        <p>Test User</p>
      </div>
    </div>
  );
};

export default Layout;
