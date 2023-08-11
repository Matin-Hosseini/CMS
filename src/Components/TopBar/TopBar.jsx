import React from "react";
import "./TopBar.css";

//mui icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

export default function TopBar() {
  return (
    <div className="top-bar">
      <h2 className="top-bar__logo">Admin Dashboard</h2>
      <div className="top-bar__icons">
        <div className="top-bar__icon-container">
          <NotificationsNoneOutlinedIcon />
          <span className="top-bar__icon-badge">2</span>
        </div>
        <div className="top-bar__icon-container">
          <PublicOutlinedIcon />
          <span className="top-bar__icon-badge">3</span>
        </div>
        <div className="top-bar__icon-container">
          <SettingsRoundedIcon />
        </div>

        <a href="#">
          <img
            src="assets/images/person.jpg"
            alt="avatar"
            className="top-bar__avatar"
          />
        </a>
      </div>
    </div>
  );
}
