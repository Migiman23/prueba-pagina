import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

export interface INavigateBar extends StateProps, DispatchProps {}

const NavigateBar: React.FunctionComponent<INavigateBar> = (props) => {
  return (
    <Navbar bg="light" variant="light" className="fondoblanco ">
      <Nav className="mr-auto ml-5 font-face">
      <Nav.Link href="#Shop">Home</Nav.Link>
        <Nav.Link href="#Shop">Shop</Nav.Link>
        <Nav.Link href="#New-Arrivals">New Arrivals</Nav.Link>
        <Nav.Link href="#Products">Products</Nav.Link>
        <Nav.Link href="#Brand">Brand</Nav.Link>
        <Nav.Link href="#Blog">Blog</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
      </Nav>
      <Nav className="mr-auto">
        <FontAwesomeIcon icon={faShoppingBag} size="3x" className="ml-5" />
        &nbsp; &nbsp;
        <p>
          Cart items (3) <br />
          Total: $345
        </p>
        <NavDropdown title="" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default NavigateBar;
