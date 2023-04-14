import { supabaseClient } from "../utils/supabaseClient";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function ProfileFinish() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabaseClient.from("User Base").select();
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
    fetchData();
  }, []);

  return <div>ProfileFinish</div>;
}
