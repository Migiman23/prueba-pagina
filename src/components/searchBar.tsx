import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

export interface ISearchBar
  extends StateProps,
    DispatchProps {}

const SearchBar: React.FunctionComponent<ISearchBar> = (props) => {
  return (
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home"><h1>Navbar</h1></Navbar.Brand>
    <Nav className="mr-auto">
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <NavDropdown title="All Categories" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Button><i className="fas fa-search"></i></Button>
    </Form>
    </Nav>
  </Navbar>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default SearchBar;
