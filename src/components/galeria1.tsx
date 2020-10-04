import React from "react";
import { Card, Button } from "react-bootstrap";
import img2 from "../static/imgs/2.jpg";
import img3 from "../static/imgs/3.jpg";
import img4 from "../static/imgs/4.jpg";
import img5 from "../static/imgs/5.jpg";
import img6 from "../static/imgs/6.jpg";

export interface ISearchBar extends StateProps, DispatchProps {}

const Gallery1: React.FunctionComponent<ISearchBar> = (props) => {
  return (
    <div>
      <div className="row d-flex align-items-stretch">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4 ">
          <Card className="bg-dark text-white">
            <Card.Img src={img2} className="imgXs" alt="Card image" />
            <Card.ImgOverlay>
              <br />
              <br />
              <br />
                <div>
                  <h3>Fast Same day Delivery</h3>
                  <h1>BIRTHDAY FLOWERS</h1>
                  <h2>Gerbera</h2>
              </div>
                  <Button variant="secondary">SHOP NOW</Button>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
          <Card className="bg-dark text-white">
            <Card.Img src={img3} className="imgXs" alt="Card image" />
            <Card.ImgOverlay>
              <br />
              <div>
                <h3>V7 Digital Photo Printing</h3>
                <h1>PROTECTIVE PREVENTATIVE MAINTENANCE</h1>
                <h4>On Order Over $99</h4>
                <Button variant="secondary">SHOP NOW</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4 mb-4">
          <Card className="bg-dark text-white">
            <Card.Img src={img4} className="imgXs" alt="Card image" />
            <Card.ImgOverlay>
              <br />
              <br />
              <div className="container-responsive">
                <h2>Rose</h2>
                <h1>FLOWER BOUQUET</h1>
                <h3>50% OFF</h3>
                <Button variant="secondary">SHOP NOW</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4">
          <Card className="bg-dark text-white">
            <Card.Img src={img5} alt="Card image" />
            <Card.ImgOverlay>
              <br />
              <br />
              <br />
              <div className="right">
                <h2>SPLASH OF SUMMER</h2>
                <h2>25% OFF</h2>
                <Button variant="secondary">SHOP NOW</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 mb-4">
          <Card className="bg-dark text-white">
            <Card.Img src={img6} alt="Card image" />
            <Card.ImgOverlay>
              <br />
              <br />
              <br />
              <br />
              <div className="center">
                <h1>FRESH FLOWER</h1>
                <h1>35% OFF</h1>
                <Button variant="secondary">SHOP NOW</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default Gallery1;
