import React from "react";

import "./WidgetSm.css";
import { newMembers } from "../../datas";

//mui icons imports
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <div className="widget-sm">
      <span className="widget-sm__title">New Joined Members</span>
      <ul className="widget-sm__list">
        {newMembers.map((member) => (
          <li className="widget-sm__list-item" key={member.id}>
            <img
              src={member.img}
              alt="user picture"
              className="widget-sm__img"
            />
            <div className="widget-sm__user">
              <span className="widget-sm__user-name">{member.userName}</span>
              <span className="widget-sm__user-title">{member.job}</span>
            </div>
            <button className="widget-sm__button">
              <VisibilityIcon className="widget-sm__icon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
