import { supabaseClient } from "../utils/supabaseClient";
import { Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import Logo from "../assets/imgs/Logo.png";

function Login() {
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
        <div>Loading...</div>
      ) : !logged ? (
        <Navigate to="/" />
      ) : (
        <div style={{ padding: "12px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* borderRadius: "22vh", border: "3px solid darkgreen", marginBottom: "5vh" */}
          <img src={Logo} alt="Logo" style={{ height: "28vh"  }} />
          <div style={{ width: "100%" }}>
            <Auth
              supabaseClient={supabaseClient}
              redirectTo="http://localhost:3000/finish_up/"
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: "#63a731",
                      brandAccent: "darkgreen",
                      dividerBackground: "darkgreen",
                    },
                    fonts: {
                      bodyFontFamily: "'DM Sans', sans-serif",
                      buttonFontFamily: "'DM Sans', sans-serif",
                      inputFontFamily: "'DM Sans', sans-serif",
                      labelFontFamily: "'DM Sans', sans-serif",
                    },
                  },
                },
              }}
              providers={["google"]}
              theme="minimaldark"
            />
          </div>
        </div>
      )}
    </>
  );
}
export default Login;
