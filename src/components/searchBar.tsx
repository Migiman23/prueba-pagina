import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";
import { faSearch, faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { Label } from 'semantic-ui-react';
export interface ISearchBar extends StateProps, DispatchProps {}

const SearchBar: React.FunctionComponent<ISearchBar> = (props) => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home" className="ml-5">
        <h1>
          <FontAwesomeIcon icon={faShopify} size="lg" />&nbsp;
          Company
        </h1>
      </Navbar.Brand>
      <Nav className="mr-auto ml-5">
          <Form inline>
          <FormControl type="text" placeholder="Search fro entire store..." className="mr-sm-2 content-fluid" />
          <NavDropdown title="All Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
          </NavDropdown>
          <Button variant="dark"> 
          <FontAwesomeIcon icon={faSearch} size="lg"/>&nbsp;
          </Button>
          </Form>
      </Nav>

          <Nav className="mr-auto">
          <Form inline>
          <FontAwesomeIcon icon={faHeart} size="lg" className="ml-5"/>&nbsp;
          <NavDropdown title="WishList" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          </NavDropdown>
          <FontAwesomeIcon icon={faShoppingBag} size="2x" className="ml-5"/>&nbsp;
          <div col-lg-1> 
            <Label tag size="mini"> <b>0</b> </Label>
          </div>
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
