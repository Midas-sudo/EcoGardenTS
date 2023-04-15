import { supabaseClient } from "../utils/supabaseClient";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";

import Logo from "../assets/imgs/Logo.png";
import { async } from "q";

export default function Finish() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [devices, setDevices] = useState("");

  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  const [uuid, setUuid] = useState("");

  const [transition, setTransition] = useState(false);

  const inputChangeHandler = (setFunction, event) => {
    setFunction(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    updateProfile();
    console.log(name, location, devices);
    setTransition(true);
    setTimeout(() => {
      window.location = "http://localhost:3000/";
    }, 1500);
  };

  async function updateProfile() {
    const { data, error } = await supabaseClient.from("User Base").update({ name: name, location: location, nb_devices: devices, complete: true }).match({ user_id: uuid });
    if (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const result = await supabaseClient.auth.getSession();
      if (result.data.session !== null) {
        setLogged(true);
        setUuid(result.data.session.user.id);
        setLoading(false);
      }
      console.log(result);
    }
    fetchData();
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : logged ? (
    <>
      {transition && (
        <div style={{ position: "absolute", height: "100vh", width: "100vw", backgroundColor: "#33333396" }}>
          <div
            style={{
              textAlign: "center",
              borderRadius: "var(--radii-borderRadiusButton)",
              position: "absolute",
              width: "80vw",
              height: "auto",
              backgroundColor: "#C9E1B8",
              border: " solid 1px var(--colors-brandAccent)",
              left: "10vw",
              padding: "3vw",
              top: "40vh",
            }}
          >
            <h2 style={{ color: "#444444" }}>Updating Profile</h2>
            <label htmlFor="name" className="label" style={{ color: "white" }}>
              Please hold...
            </label>
          </div>
        </div>
      )}
      <div style={{ padding: "12px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* borderRadius: "22vh", border: "3px solid darkgreen", marginBottom: "5vh" */}
        <img src={Logo} alt="Logo" style={{ height: "28vh" }} />
        <div style={{ width: "100%" }}>
          <div className="divider"></div>
          <form onSubmit={onSubmitHandler}>
            <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <div>
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input id="name" name="name" type="text" className="input-field" placeholder="Your Name" onChange={(e) => inputChangeHandler(setName, e)} />
                </div>
                <div>
                  <label htmlFor="name" className="label">
                    Location
                  </label>
                  <input id="name" name="name" type="text" className="input-field" placeholder="Nearest City" onChange={(e) => inputChangeHandler(setLocation, e)} />
                </div>
                <div>
                  <label htmlFor="nb_devices" className="label">
                    Number of Devices
                  </label>
                  <input id="nb_devices" name="nb_devices" type="number" className="input-field" placeholder="Number of Devices to Setup" onChange={(e) => inputChangeHandler(setDevices, e)} />
                </div>
              </div>
              <button className="button color-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
}
