import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

export interface INavigateBar
  extends StateProps,
    DispatchProps {}

const NavigateBar: React.FunctionComponent<INavigateBar> = (props) => {
  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Shop</Nav.Link>
      <Nav.Link href="#features">New Arrivals</Nav.Link>
      <Nav.Link href="#pricing">Products</Nav.Link>
      <Nav.Link href="#pricing">Brand</Nav.Link>
      <Nav.Link href="#pricing">Blog</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
  </Navbar>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default NavigateBar;
