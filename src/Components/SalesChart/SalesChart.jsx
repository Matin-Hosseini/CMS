import React, { useState } from "react";

import salesData from "../../salesData";

import { ResponsiveContainer, LineChart, Line, Tooltip, XAxis } from "recharts";

export default function SalesChart() {
  const [sales, setSales] = useState(salesData);
  return (
    <div>
      <ResponsiveContainer width="100%" aspect={4}>
        <LineChart data={sales}>
          <Line type="monotone" dataKey="sales" stroke="#426696" />
          <XAxis dataKey="month" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
