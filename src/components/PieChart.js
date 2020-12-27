import React, { useContext } from "react";
import { ResponsivePie } from "@nivo/pie";
import { observer } from "mobx-react";

import { StoreContext } from "../App";

const PieChart = observer(() => {
  const store = useContext(StoreContext);
  const data = [
    {
      id: "Starting counter",
      label: `Starting`,
      value: store.startLetterCount(),
      color: "hsl(37.3,97.5%,52.7%)",
    },
    {
      id: "Ending counter",
      label: `Ending`,
      value: store.endLetterCount(),
      color: "hsl(92, 70%, 50%)",
    },
    {
      id: "Times counter",
      label: `Times`,
      value: store.timesIncludedCount(),
      color: "hsl(221,50.6%,15.9%)",
    },
    {
      id: "Repeating counter",
      label: "repeating",
      value: store.repeatedLetterCount(),
      color: "hsl(37, 70%, 50%)",
    },
  ];
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: "nivo" }}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextColor="#333333"
      radialLabelsLinkColor={{ from: "color" }}
      sliceLabelsSkipAngle={10}
      sliceLabelsTextColor="#333333"
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "Starting counter",
          },
          id: "dots",
        },
        {
          match: {
            id: "Ending counter",
          },
          id: "lines",
        },
        {
          match: {
            id: "Times counter",
          },
          id: "dots",
        },
        {
          match: {
            id: "Repeating counter",
          },
          id: "lines",
        },
      ]}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 80,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
    />
  );
});

export default PieChart;
