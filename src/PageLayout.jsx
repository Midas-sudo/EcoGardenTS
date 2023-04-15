import "./index.css";
import React, { useState, useEffect } from "react";
import { Button, Container, Row, Stack } from "react-bootstrap";
import { Outlet, Navigate } from "react-router-dom";

import TopBar from "./components/TopBar";
import NavBar from "./components/NavBar";

import { supabaseClient } from "./utils/supabaseClient";

export default function PageLayout() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
   async function fetchData() {
     const result = await supabaseClient.auth.getSession();
     if (result.data.session !== null) setLogged(true);
     console.log(result);
     setLoading(false);
   }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <div style={{ flexGrow: "1", backgroundColor: "#212529" }}>
            <div>Loading</div>
          </div>
        </div>
      ) : !logged ? (
        <Navigate to="/login" />
      ) : (
        <Container fluid style={{ minHeight: "100vh" }}>
          <Row style={{ alignItems: "center",     padding: "1.5vh 3vw 0vh", height: "10vh"}}>
            <TopBar />
          </Row>
          <Row style={{ height: "80vh" }}>
            <Outlet />
            {/* <Button onClick={() => supabaseClient.auth.signOut()}>Logout</Button> */}
          </Row>
          <Row style={{ alignItems: "center", height: "10vh",  padding: "8px", boxShadow:"rgb(31 31 31 / 70%) 0 40px 150px 0" }}>
            <NavBar />
          </Row>
        </Container>


      )}
    </>
  );
}
