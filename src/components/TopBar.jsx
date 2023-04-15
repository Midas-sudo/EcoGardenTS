import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  const { pathname } = useLocation();
  console.log(pathname.split("/")[1]);
  return (
    <>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <h1 style={{ color: "#444444", padding: "0px" }}>{pathname.split("/")[1] == "" ? "Home" : `${pathname.toLocaleUpperCase}`}</h1>
        <h6 style={{ color: "var(--colors-brand)" }}>by EcoGarden</h6>
      </div>
    </>
  );
}
