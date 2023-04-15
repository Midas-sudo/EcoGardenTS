import { Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function TopBar() {
  const { pathname } = useLocation();
  console.log(pathname.split("/")[1]);
  return (
    <>
      <h1 style={{ color: "#444444", padding: "0px" }}>{pathname.split("/")[1] == "" ? "Home" : `${pathname.toLocaleUpperCase}`}</h1>

      {/* <Col xs={3}>
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        </button>
      </Col> */}
    </>
  );
}
