import React from "react";
import WeekSlide from "../components/WeekSlide";
import Drops from "../components/Drops";

import { useEffect, useState } from "react";
import { supabaseClient } from "../utils/supabaseClient";

import PlantSettings from "../components/PlantSettings";
import ValuesZone from "../components/ValuesZone";
import { async } from "q";

export default function MainPage() {
  const [devices, setDevices] = useState([]);
  // const [favourites, setFavourites] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingDevices, setLoadingDevices] = useState(true);
  // const [loadingFavourites, setLoadingFavourites] = useState(true);
  const [values, setValues] = useState(null);
  const [selectedPlant, setSelectedPlant] = useState(1);

  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  async function fetchDevices() {
    if (user != null) {
      console.log(user.devices);
      while (1) {
        user.devices.map(async (device) => {
          const { data, error } = await supabaseClient.from("Devices").select("*").eq("device_uuid", device);
          if (error) {
            console.log(error);
          } else {
            setDevices((devices) => [...devices, data[0]]);
            console.log(data);
            // let temp = { temperature: data[0].temp_reads[0], humidity: data[0].hum_reads[0] };
            // setValues(temp);
          }
        });
        console.log(devices);
        setLoadingDevices(false);
        await sleep(5000);
        setLoadingDevices(true);
        setDevices([]);
      }
    }
  }
  // async function fetchFavourites() {
  //   if (user != null) {
  //     user.favourites.map(async (favourite) => {
  //       const { data, error } = await supabaseClient.from("Plant Profiles").select().eq("id", favourite);
  //       if (error) {
  //         console.log(error);
  //       } else {
  //         setFavourites((favourites) => [...favourites, data[0]]);
  //       }
  //     });
  //     setLoadingFavourites(false);
  //   }
  // }

  useEffect(() => {
    fetchDevices();
  }, [user]);

  useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabaseClient.from("User Base").select();
      if (error) {
        console.log(error);
      } else {
        setUser(data[0]);
        console.log(data, typeof data[0], typeof user);
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  // const devices = [
  //   {
  //     label: "M1 - Slave 1",
  //     id: "1",
  //   },
  //   {
  //     label: "M1 - Slave 2",
  //     id: "2",
  //   },
  // ];

  const favourites = [
    {
      label: "Tomatos",
      id: "0",
      humidity: {
        left: 12,
        min: 50,
        max: 70,
      },
      temperature: {
        left: 18,
        min: 22,
        max: 26,
      },
    },
    {
      label: "Lettuce",
      id: "1",
      humidity: {
        left: 12,
        min: 50,
        max: 70,
      },
      temperature: {
        left: 7,
        min: 13,
        max: 18,
      },
    },
  ];

  return loading || loadingDevices ? (
    <div>Loading...</div>
  ) : (
    <div style={{ padding: "3vw" }}>
      <Drops options={devices} value={14} text="Devices" />
      <Drops options={favourites} value={selectedPlant} text="Favourites" />
      <WeekSlide />
      <PlantSettings />
      <div className="divider"></div>
      <ValuesZone device={devices[0]} sel={selectedPlant} fav={favourites} />
    </div>
  );
}
