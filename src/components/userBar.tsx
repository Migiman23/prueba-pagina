import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar, Nav } from "react-bootstrap";
import { faTruckMoving, faUser } from "@fortawesome/free-solid-svg-icons";

export interface IUserBar extends StateProps, DispatchProps {}

const UserBar: React.FunctionComponent<IUserBar> = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Nav className="mr-auto text-white ml-5">
        <FontAwesomeIcon icon={faTruckMoving} size="lg" inverse /> &nbsp;
        FreeShipping on Order Above $199
      </Nav>

      <Nav className="mr-right mr-5">
      <Nav.Link href="#">
      <FontAwesomeIcon icon={faUser} size="lg" /> &nbsp;
        My account
      </Nav.Link>
      <Nav.Link eventKey={2} href="#">
      Login / Register
      </Nav.Link>
    </Nav>
    </Navbar>
  );
};

{/* <div className="row">
<div className="col-lg-4">
</div>
</div> */}
const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default UserBar;
