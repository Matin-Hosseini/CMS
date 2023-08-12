import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";

//mui icons
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features() {
  return (
    <div className="features">
      <div className="feature">
        <h3 className="feature__title">Revanue</h3>
        <div className="feature__content">
          <span className="feature__price">$2,145</span>
          <div className="feature__status">
            <span className="feature__percentage">-11.2</span>
            <ArrowDownwardIcon className="feature__icon negative"/>
          </div>
        </div>
        <span className="feature__link">Compare to last month</span>
      </div>
      <div className="feature">
        <h3 className="feature__title">Sales</h3>
        <div className="feature__content">
          <span className="feature__price">$2,145</span>
          <div className="feature__status">
            <span className="feature__percentage">-11.2</span>
            <ArrowDownwardIcon className="feature__icon negative"/>
          </div>
        </div>
        <span className="feature__link">Compare to last month</span>
      </div>
      <div className="feature">
        <h3 className="feature__title">Revanue</h3>
        <div className="feature__content">
          <span className="feature__price">$2,145</span>
          <div className="feature__status">
            <span className="feature__percentage">-11.2</span>
            <ArrowUpwardIcon className="feature__icon"/>
          </div>
        </div>
        <span className="feature__link">Compare to last month</span>
      </div>
    </div>
  );
}
