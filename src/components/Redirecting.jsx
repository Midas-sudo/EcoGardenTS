import { supabaseClient } from "../utils/supabaseClient";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function Redirecting() {
  const [loading, setLoading] = useState(true);
  const [complete_profile, setProfile] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabaseClient.from("User Base").select();
      if (error) {
        console.log(error);
      } else {
        console.log(data);
        setProfile(data[0].complete);
        //setLoading(false);
        console.log(complete_profile);
      }
      
    }
    fetchData();
  }, []);

  return (
    loading ? <div style={{height:"100vh", width:"100vw", backgroundColor:"darkgreen"}}>Loading...</div> 
            : complete_profile ? <Navigate to="/" />
                               : <Navigate to="/finish_profile" />
    );
}
