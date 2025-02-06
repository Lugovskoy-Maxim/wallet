"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DataPoint {
  [key: string]: string | number | boolean;
}

interface AreaResponsiveContainerProps {
  data: DataPoint[]; 
  dataKeyName: string; 
  dataKeyAmount: string; 
  fill: string;
}

export default function ChartAreaResponsiveContainer({ data, dataKeyName, dataKeyAmount, fill}: AreaResponsiveContainerProps) {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKeyName} />
          <YAxis />
          <Tooltip />
          <Area type="bumpX" dataKey={dataKeyAmount} stroke={fill} fill={fill} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}