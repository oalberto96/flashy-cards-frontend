import React, { useState } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer
} from "recharts";
import History from "../History";

const Score = props => {
  const [value, setValue] = useState(null);
  const data = props.score.map((score, index) => ({
    x: score.date.format("MM/DD/YYYY"),
    Mistakes: score.mistakes
  }));

  return (
    <div className="container featureMargin">
      <h1>Score</h1>
      <div className="row">
        <div className="col-12 col-md-3">
          <History score={props.score}></History>
        </div>

        <div className="col-12 col-md-9" style={{ height: "400px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="x" />
              <YAxis dataKey="Mistakes" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Mistakes" stroke="red" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Score;
