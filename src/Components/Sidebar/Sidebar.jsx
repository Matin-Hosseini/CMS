import React from "react";

import "./Sidebar.css";

//mui icons
import LineStyleRoundedIcon from "@mui/icons-material/LineStyleRounded";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h3 className="sidebar-menu__title">Dashboard</h3>
        <ul className="sidebar-menu__list">
          <li>
            <Link to="/" className="sidebar-menu__item active">
              <LineStyleRoundedIcon className="sidebar-menu__icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="sidebar-menu__item">
              <StackedLineChartIcon className="sidebar-menu__icon" />
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link to={"/sales"} className="sidebar-menu__item">
              <TrendingUpIcon className="sidebar-menu__icon" />
              <span>Sales</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-menu">
        <h3 className="sidebar-menu__title">Quick Menu</h3>
        <ul className="sidebar-menu__list">
          <li>
            <Link to="/users" className="sidebar-menu__item">
              <PermIdentityIcon className="sidebar-menu__icon" />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link to="/new-user" className="sidebar-menu__item">
              <PermIdentityIcon className="sidebar-menu__icon" />
              <span>New User</span>
            </Link>
          </li>
          <li>
            <Link to="/products" className="sidebar-menu__item">
              <StorefrontIcon className="sidebar-menu__icon" />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link to="/sales" className="sidebar-menu__item">
              <AttachMoneyIcon className="sidebar-menu__icon" />
              <span>Sales</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="sidebar-menu__item">
              <BarChartIcon className="sidebar-menu__icon" />
              <span>Transaction</span>
            </Link>
          </li>
          <li>
            <Link to="/users" className="sidebar-menu__item">
              <MailOutlineIcon className="sidebar-menu__icon" />
              <span>Reports</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-menu">
        <h3 className="sidebar-menu__title">Notifications</h3>
        <ul className="sidebar-menu__list">
          <li>
            <Link to="/mail" className="sidebar-menu__item">
              <MailOutlineIcon className="sidebar-menu__icon" />
              <span>Mail</span>
            </Link>
          </li>
          <li>
            <Link to="/feedback" className="sidebar-menu__item">
              <DynamicFeedIcon className="sidebar-menu__icon" />
              <span>Feedback</span>
            </Link>
          </li>
          <li>
            <Link to={"/messages"} className="sidebar-menu__item">
              <ChatBubbleOutlineIcon className="sidebar-menu__icon" />
              <span>Messeges</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-menu">
        <h3 className="sidebar-menu__title">Staff</h3>
        <ul className="sidebar-menu__list">
          <li>
            <Link to="/users" className="sidebar-menu__item">
              <MailOutlineIcon className="sidebar-menu__icon" />
              <span>Manage</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
