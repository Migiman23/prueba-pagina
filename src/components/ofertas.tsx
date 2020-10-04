import React, { useState } from "react";
import {
  Card,
  Button,
  Carousel,
  Navbar,
  Container,
  NavbarBrand,
} from "react-bootstrap";
import { Image } from 'semantic-ui-react';

import logo1 from "../static/imgs/Rectangle 1.png";
import logo2 from "../static/imgs/Rectangle 2.png";
import logo3 from "../static/imgs/Rectangle 3.png";

export interface IOfertas extends StateProps, DispatchProps {}

const Ofertas: React.FunctionComponent<IOfertas> = (props) => {
  return (
    <div>
        <h3>EXCLUSIVE OFFERS</h3>
        <br/>
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-2">
            <Image src={logo1}/>
            <p className="left"> 
                Be Happy Flower Bouquet
                <br/>
                $39
            </p>
          </div>
          <div className="col-lg-2">
            <Image src={logo2} />
            <p className="left"> 
                Delighfully Fresh Bouquet
                <br/>
                $42
            </p>
          </div>
          <div className="col-lg-2">
            <Image src={logo3}/>
            <p className="left"> 
                Rose and Lily Romance
                <br/>
                $37
            </p>
          </div>
          <div className="col-lg-2">
            <p className="left"> 
                Special Offer Limited Time Only
            </p>
                <br/>
                <Button variant="dark">SHOP NOW</Button>
          </div>
        </div>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default Ofertas;
