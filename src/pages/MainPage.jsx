import React from "react";
import WeekSlide from "../components/WeekSlide";
import Drops from "../components/Drops";

import { useEffect, useState } from "react";
import { supabaseClient } from "../utils/supabaseClient";

import PlantSettings from "../components/PlantSettings";
import ValuesZone from "../components/ValuesZone";

export default function MainPage() {
  const [devices, setDevices] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingDevices, setLoadingDevices] = useState(true);
  const [loadingFavourites, setLoadingFavourites] = useState(true);

  async function fetchDevices() {
    if (user != null) {
      console.log(user.devices);
      user.devices.map(async (device) => {
        const { data, error } = await supabaseClient.from("Devices").select("*").eq("device_uuid", device);
        if (error) {
          console.log(error);
        } else {
          setDevices((devices) => [...devices, data[0]]);
          console.log(data);
        }
      });
      console.log(devices);
      setLoadingDevices(false);
    }
  }
  async function fetchFavourites() {
    if (user != null) {
      user.favourites.map(async (favourite) => {
        const { data, error } = await supabaseClient.from("Plant Profiles").select().eq("id", favourite);
        if (error) {
          console.log(error);
        } else {
          setFavourites((favourites) => [...favourites, data[0]]);
        }
      });
      setLoadingFavourites(false);
    }
  }

  useEffect(() => {
    fetchDevices();
    fetchFavourites();
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

  // const favourites = [
  //   {
  //     label: "Tomato",
  //     id: "1",
  //   },
  //   {
  //     label: "Potato",
  //     id: "2",
  //   },
  //   {
  //     label: "Cucumber",
  //     id: "3",
  //   },
  // ];

  return loading || loadingDevices || loadingFavourites ? (
    <div>Loading...</div>
  ) : (
    <div style={{ padding: "3vw" }}>
      <Drops options={devices} value={1} text="Devices" />
      <Drops options={favourites} value="3" text="Favourites" />
      <WeekSlide />
      <PlantSettings />
      <div className="divider"></div>
      <ValuesZone />
    </div>
  );
}
