import { Col } from "react-bootstrap";
import NavBarButton from "./NavBarButtons";

export default function NavBar() {
  return (
    <>
      <Col>
        <NavBarButton name="Plants" type={0}/>
      </Col>
      <Col>
      <NavBarButton name="Home" type={1}/>
      </Col>
      <Col>
      <NavBarButton name="profile" type={2}/>
      </Col>
    </>
  );
}
