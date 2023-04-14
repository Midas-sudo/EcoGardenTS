import { Col } from "react-bootstrap";

export default function TopBar() {
  return (
    <>
      <Col xs={9}>
        {/* App name */}
        <h1 style={{ color: "darkgreen" }}>Good Moorning, Gonçalo</h1>
      </Col>
      {/* Define size of col to profile pic width */}
      <Col xs={3}>
        {/* Profile picture as a button */}
        <button style={{ backgroundColor: "transparent", border: "none" }}>
          <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style={{ width: "50px", height: "50px", borderRadius: "50%" }} />
        </button>
      </Col>
    </>
  );
}
