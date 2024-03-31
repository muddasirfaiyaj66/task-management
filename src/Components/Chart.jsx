import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Teacher',
    User: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: 'Engineer',
    User: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: 'Doctor',
    User: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: 'Student',
    User: 1480,
    pv: 1200,
    amt: 1228,
  }
];

class Chart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" aspect={3}>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="User" barSize={20} fill="#00AAFF" />
          <Line type="monotone" dataKey="User" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}

export default Chart;