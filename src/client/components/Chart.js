import moment from "moment";
import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const getPageViews = (events) => {
  if (!events) return;
  const pageViewsObj = {};
  events.forEach((event) => {
    if (event.event_type === "page_view") {
      const time = moment(event.timestamp).format("HH:MM");
      pageViewsObj[time] ? (pageViewsObj[time] += 1) : (pageViewsObj[time] = 1);
    }
  });

  let result = [];
  for (let key in pageViewsObj) {
    result.push({ time: key, views: pageViewsObj[key] });
  }

  return result.sort((a, b) => (a.time > b.time ? 1 : -1));
};

const Chart = ({ events }) => {
  // TODO memoize
  const pageViews = getPageViews(events);

  return (
    <LineChart width={600} height={300} data={pageViews}>
      <Line type="monotone" dataKey="views" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="time" />
      <YAxis />
    </LineChart>
  );
};

export default Chart;
