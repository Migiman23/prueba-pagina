import React from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";

export interface IUserBar
  extends StateProps,
    DispatchProps {}

const UserBar: React.FunctionComponent<IUserBar> = (props) => {
  return (
    <Navbar bg="dark" variant="dark" >
    <Navbar.Brand href="#home">
    <div className="display-4">
    <i className="fas fa-truck-moving"></i>
    </div>{' '}
      FreeShipping on Order Above $199
    </Navbar.Brand>
  </Navbar>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default UserBar;
