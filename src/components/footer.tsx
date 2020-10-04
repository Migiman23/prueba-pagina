import React, { useState } from "react";
import { Input, ImageGroup, Image } from "semantic-ui-react";
import {
  Card,
  Button,
  Carousel,
  Navbar,
  Container,
  NavbarBrand,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faSkype,
  faPinterestSquare,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";

import logo1 from "../static/imgs/logo 1.jpg";
import logo2 from "../static/imgs/logo 2.jpg";
import logo3 from "../static/imgs/logo 3.jpg";
import logo4 from "../static/imgs/logo 4.jpg";

export interface IGifts extends StateProps, DispatchProps {}

const Gifts: React.FunctionComponent<IGifts> = (props) => {
  return (
    <div>
      <div className="content colorfoo">
        <h4 className="left ml-5">BRANDS</h4>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-3">
            <Image src={logo1} className="ml-5" />
          </div>
          <div className="col-lg-3">
            <Image src={logo2} className="ml-5" />
          </div>
          <div className="col-lg-3">
            <Image src={logo3} className="ml-5" />
          </div>
          <div className="col-lg-3">
            <Image src={logo4} />
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <div className="row text-white">
            <div className="col-xl-1 col-lg-1"> </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12 left">
              <br />
              <h1>
                {" "}
                <FontAwesomeIcon icon={faShopify} size="lg" />
                &nbsp; &nbsp; Company
              </h1>
              <p>
                Great Range Of Laptops For You Everyday Essential
                w/intel@Coretm. Same Day Shipment. Cash On Delivery. EMI Options
                India´s No.1 Most Trusted Technology Brand in 2015
              </p>
              <hr color="#FFFFFF" />
              <div className="row">
                <div className="col-lg-1">
                  <p>
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      size="sm"
                      className="mb-4"
                    />
                  </p>
                </div>
                <div className="col-lg-10">
                  <p> 321. Ramis Gandour Colony. District 9 Florida</p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-1">
                  <p>
                    <FontAwesomeIcon icon={faPhone} size="sm" rotation={90} />
                  </p>
                </div>
                <div className="col-lg-10">
                  <p>090-0965-2987</p>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-lg-1">
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} size="sm" />
                  </p>
                </div>
                <div className="col-lg-10">
                  <p>contact@company.com</p>
                </div>
              </div>
              <br /> <br /> <br />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 left">
              <br />
              <h4>COLLECTIONS</h4>
              <br />
              <div className="mb-2">
                <a href="#">Summer 2017</a>
              </div>
              <div className="mb-2">
                <a href="#" className="a">
                  Women´s Dress
                </a>
              </div>
              <div className="mb-2">
                <a href="#">Women´s Jackets</a>
              </div>
              <div className="mb-2">
                <a href="#">Men´s Sweats Shirts</a>
              </div>
              <div className="mb-2">
                <a href="#">Men´s Dress</a>
              </div>
              <div className="mb-2">
                <a href="#">Accessories</a>
              </div>
              <div>
                <a href="#">Travel Bags</a>
              </div>
              <br /> <br /> <br />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 left">
              <br />
              <h4>CUSTOMERCE CARE</h4> <br />
              <div className="mb-2">
                <a href="#">Order Tracking</a>
              </div>
              <div className="mb-2">
                <a href="#">The Privacy Policy</a>
              </div>
              <div className="mb-2">
                <a href="#">Paymenys & Returns</a>
              </div>
              <div className="mb-2">
                <a href="#">Products Care</a>
              </div>
              <div className="mb-2">
                <a href="#">FAQ´s</a>
              </div>
              <div className="mb-2">
                <a href="#">Shipping Information</a>
              </div>
              <div>
                <a href="#">Accounts Seting</a>
              </div>
              <br /> <br /> <br />
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 left">
              <br />
              <h4>SUBSCRIBE FOR MORE UPDATES</h4>
              <p>
                Sing up for Newsletter to Get all the information on Events
                Offers Sales and More.
              </p>
              <Input
                fluid
                action={{ icon: "paper plane" }}
                placeholder="Email address"
                size="mini"
              />
              <br />
              <h6>We never share your mail at anywhere</h6>
              <br />
              <br />
              <FontAwesomeIcon icon={faTwitter} size="lg" /> &nbsp; &nbsp;
              &nbsp; &nbsp;
              <FontAwesomeIcon icon={faLinkedin} size="lg" /> &nbsp; &nbsp;
              &nbsp; &nbsp;
              <FontAwesomeIcon icon={faFacebook} size="lg" /> &nbsp; &nbsp;
              &nbsp; &nbsp;
              <FontAwesomeIcon icon={faSkype} size="lg" /> &nbsp; &nbsp; &nbsp;
              &nbsp;
              <FontAwesomeIcon icon={faPinterestSquare} size="lg" />
              <br /> <br /> <br />
            </div>
            <div className="col-xl-1 col-lg-1"> </div>
          </div>
        </Container>
      </Navbar>

      <div className="black">
        <div className="row text-white left">
          <div className="col-lg-1"></div>
          <div className="col-lg-11">
            <br />
            <h5> Copyright © 2018. Company All Rights Reserved </h5>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default Gifts;
