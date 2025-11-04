//import React, { useState, useEffect } from "react";
import React, { useState } from "react";
//import React from "react";
import {
  BarChart,
  //BarRectangle,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./AverageMoveTime.css"; // Import CSS file
import Dropdown from "../dropdown-menu-graph-type/DropdownMenu";
import dimColor from "../bar-coloring-functions/dimColor";
import brightColor from "../bar-coloring-functions/brightColor";

import dataOptions from "./AverageMoveTimeData.json";

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, columnHeaders, mean, sd }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div class="tool-tip">
        {columnHeaders.map((key) => (
          <div key={key}>
            <p>
              <strong>{key}:</strong> {data[key]}
            </p>
            {key === "Average Time" && (
              <>
                <p>
                  <strong>SDs above/below the mean: </strong>
                  {((data[key] - mean) / sd).toFixed(3)}
                </p>
                <p>---------------------------------</p>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

// Custom Legend Component
const CustomLegend = ({ mean }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", marginRight: 20 }}
    >
      <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
        <div
          style={{
            marginLeft: 10,
            width: 12,
            height: 12,
            backgroundColor: "rgba(76, 175, 80, .4)",
            marginRight: 5,
          }}
        ></div>
        <span>
          <strong>Within 1 SD of Mean</strong>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
        <div
          style={{
            marginLeft: 10,
            width: 12,
            height: 12,
            backgroundColor: "rgba(255, 165, 0, .4)",
            marginRight: 5,
          }}
        ></div>
        <span>
          <strong>Between 1 and 2 SDs of Mean</strong>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
        <div
          style={{
            marginLeft: 10,
            width: 12,
            height: 12,
            backgroundColor: "rgba(229, 56, 53, .4)",
            marginRight: 5,
          }}
        ></div>
        <span>
          <strong>More than 2 SDs of Mean</strong>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            marginLeft: 10,
            width: 12,
            height: 2,
            borderTop: "3px solid gray",
            marginRight: 5,
          }}
        ></div>
        <span>
          <strong>{`Mean (${Number(mean).toFixed(3)})`}</strong>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginRight: 10 }}>
        <div
          style={{
            marginLeft: 15,
            width: 13,
            height: 0,
            borderTop: "3px dashed black", // Dashed border on top
            marginRight: 5,
          }}
        ></div>
        <span>
          <strong>Mean +/- 2 SDs</strong>
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginLeft: 5 }}>
        <span>
          <strong>SD (1.923)</strong>
        </span>
      </div>
    </div>
  );
};

const AverageMoveTime = () => {
  const keys = Object.keys(dataOptions).filter(
    (key) => !key.toLowerCase().includes("global") // skip summary stats
  );
  const [selectedKey, setSelectedKey] = useState(keys[0]); // First valid key
  const my_data = dataOptions[selectedKey]; // Select data based on dropdown
  const [activeIndex, setActiveIndex] = useState(null);

  //sort data:
  my_data.sort((a, b) => {
    return a["Average Time"] - b["Average Time"]; // Sort by value in ascending order
  });

  const mean = dataOptions["Global Average"];
  const sd = dataOptions["Global Standard Deviation"] / 2;

  const values = my_data.map((item) => item["Average Time"]);
  const dataMin = Math.min(...values);
  const dataMax = Math.max(...values);

  const customTicks = [
    mean - 3 * sd,
    mean - 2 * sd, //: {"2 SDs above the mean"},
    mean - sd,
    mean,
    mean + sd,
    mean + 2 * sd,
    mean + 3 * sd,
  ]; // Define which Y-axis ticks you want

  const allItems = Object.values(my_data).flat();
  const columnHeaders = Object.keys(allItems[0]);
  const first_header = columnHeaders[0];

  const dropdown_width = 200;

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
        Average Move Time
      </h1>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            margin={{ top: 40, right: 80, left: 15, bottom: 15 }} // 👈 Add top space
            data={my_data}
            onMouseMove={(state) => {
              if (state?.activeTooltipIndex !== undefined) {
                setActiveIndex(state.activeTooltipIndex);
              } else {
                setActiveIndex(null);
              }
            }}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <PointerEvent fill="green"></PointerEvent>
            <CartesianGrid strokeDasharray="3 3" />
            <onHover>color = red;</onHover>
            <XAxis
              dataKey={first_header} // This is where the inputs will change to use peoples names
              // angle={-30} //angles the names if they are too long
              interval={0} // makes sure that none of the labels are skipped
              height={40} // increases height to avoid clipping
              textAnchor="end" // aligns the text to the end so it doesn't overlap
              className="Bar-Rect"
              label={{
                value: `${first_header}`,
                position: "right",
                // offset: 20,
                style: {
                  textAnchor: "start",
                  fontSize: 16,
                  fontWeight: "bold",
                  fill: "#333",
                },
              }}
            />
            <YAxis
              label={{
                value: "Time (min)",
                position: "top",
                offset: 20,
                style: {
                  textAnchor: "start",
                  fontSize: 16,
                  fontWeight: "bold",
                  fill: "#333",
                },
              }}
              dataKey="Average Time"
              className="custom-tick"
              domain={[dataMin - sd, dataMax + sd]}
              ticks={customTicks} // Use the custom ticks array
              tickFormatter={(value) => {
                value = Number(value);
                if (isNaN(value)) return value; // fallback if value is not a number
                // Only add words to some specific ticks
                // TODO: Change words describing mean to be on the other side of the graph
                if (value === mean + 2 * sd) {
                  return `${value.toFixed(3)}\n(Mean + 2 SDs)`;
                } else if (value === mean) {
                  return `${value.toFixed(3)}\nMean`;
                } else if (value === mean - 2 * sd) {
                  return `${value.toFixed(3)}\n(Mean - 2 SDs)`;
                }
                return value.toFixed(3);
              }}
            />
            <Tooltip
              content={
                <CustomTooltip
                  // TODO, add click function to keep info up
                  columnHeaders={columnHeaders}
                  mean={mean}
                  sd={sd}
                />
              }
            />
            <Legend
              content={<CustomLegend mean={mean} />}
              verticalAlign="bottom"
              align="right"
            />
            <ReferenceLine y={0} stroke="#000" />
            <Bar
              className="Bar-Rect"
              dataKey="Average Time"
              shape={(props) => {
                const { x, y, width, height, index, value } = props;
                const fill =
                  index === activeIndex
                    ? brightColor(value, mean, sd)
                    : dimColor(value, mean, sd); // dim the color when not hovering
                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    fill={fill}
                    //onClick={() => onClick(index)}
                    style={{
                      transition: "fill .5s ease", // ✨ smooth fill color transition
                    }}
                  />
                );
              }}
            />
            {/*TODO, figure out what foreignObject does*/}
            <foreignObject
              x="50%"
              y="0"
              width={dropdown_width}
              height="40"
              transform={`translate(${-dropdown_width / 2}, 0)`}
              //transform="translate(-100, 0)"
            >
              <div>
                {<Dropdown onSelect={setSelectedKey} /*drop down menu*/ />}
                <pre>{JSON.stringify(dataOptions[selectedKey], null, 2)}</pre>
                {/* <Dropdown
                  options={keys}
                  selected={selectedKey}
                  onSelect={setSelectedKey}
                /> */}
              </div>
            </foreignObject>
            <ReferenceLine
              className="Mean Line"
              y={mean}
              stroke="gray"
              strokeWidth={4}
              strokeDasharray="0"
            />
            <ReferenceLine
              className="2 SDs above Mean Line"
              y={mean + 2 * sd}
              stroke="black"
              strokeWidth={2}
              strokeDasharray="15 3"
            />
            <ReferenceLine
              className="2 SDs below Mean Line"
              y={mean - 2 * sd}
              stroke="black"
              strokeWidth={2}
              strokeDasharray="15 3"
            />
          </BarChart>
        </ResponsiveContainer>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default AverageMoveTime;
