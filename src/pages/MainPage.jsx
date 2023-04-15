import React from "react";
import WeekSlide from "../components/WeekSlide";
import Drops from "../components/Drops";

export default function MainPage() {
  const devices = [
    {
      label: "M1 - Slave 1",
      id: "1",
    },
    {
      label: "M1 - Slave 2",
      id: "2",
    },
  ];

  const favourites = [
    {
      label: "Tomato",
      id: "1",
    },
    {
      label: "Potato",
      id: "2",
    },
    {
      label: "Cucumber",
      id: "3",
    },
  ];

  return (
    <div style={{ padding: "3vw" }}>
      <Drops options={devices} value="2" />
      <Drops options={favourites} value="3" />
      <WeekSlide />
    </div>
  );
}
