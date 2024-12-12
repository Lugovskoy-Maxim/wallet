"use client";
import React, { Component } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from "recharts";

interface DataType {
  name: string;
  value: number;
  color?: string;
}

interface IProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  fill?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  percent?: number;
  value?: number;
  data: Array<DataType>
}


type State = {
  activeIndex: number;
};

class ExamplePieChart extends Component<IProps, State> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onPieEnter = (_: any, index: number) => {
    this.setState({ activeIndex: index });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderActiveShape = (props: any) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
      percent,
      value,
    } = props;

    return (
      <g>
        <text
          x={cx}
          y={cy}
          dy={0}
          textAnchor="middle"
          fill="#333"
          style={{ fontSize: "10px" }}
        >
          {`${value}₽ (${((percent? percent : 0) * 100).toFixed(2)}%)`}
        </text>
        <text
          x={cx}
          y={cy}
          dy={20}
          textAnchor="middle"
          fill="#999"
          style={{ fontSize: "10px" }}
        >
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius || 0 + 6}
          outerRadius={outerRadius || 0 + 10}
          fill={fill}
        />
      </g>
    );
  };

  render() {
    const data = this.props.data;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={this.renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          >
            {" "}
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}

export default ExamplePieChart;
