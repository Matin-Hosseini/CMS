import React from "react";

import "./WidgetLg.css";

import { transactions } from "../../datas";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widget-lg__button " + type}>{type}</button>;
  };

  return (
    <div className="widget-lg">
      <h3 className="widget-lg__title">Latest Transactions</h3>
      <table className="widget-lg__table">
        <tr className="widget-lg__tr">
          <th className="widget-lg__th">Customer</th>
          <th className="widget-lg__th">Date</th>
          <th className="widget-lg__th">Amount</th>
          <th className="widget-lg__th">Status</th>
        </tr>

        {transactions.map((transaction) => (
          <tr className="widget-lg__tr" key={transaction.id}>
            <td className="widget-lg__user">
              <img src={transaction.img} alt="" className="widget-lg__img" />
              <span className="widget-lg__name">{transaction.customer}</span>
            </td>
            <td className="widget-lg__date">{transaction.date}</td>
            <td className="widget-lg__amount">${transaction.amount}</td>
            <td className="widget-lg__status">
              <Button type={transaction.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
