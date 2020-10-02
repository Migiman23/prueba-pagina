import React, { useState } from "react";
import {
  Card,
  Button,
  Carousel
} from "react-bootstrap";
import img2 from "../imgs/2.jpg";
import img3 from "../imgs/3.jpg";
import img4 from "../imgs/4.jpg";
import img5 from "../imgs/5.jpg";
import img6 from "../imgs/6.jpg";



export interface IGifts extends StateProps, DispatchProps {}

const Gifts: React.FunctionComponent<IGifts> = (props) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  return (
      <div>
          <br/>
          <h2>BEST SELLING FLOWERS & GIFTS</h2>
    <Carousel activeIndex={index} onSelect={handleSelect} className="imagen">
      <Carousel.Item>
      <Card className="bg-dark text-white">
        <Card.Img src={img2} className="imgXs" alt="Card image" />
          <Card.ImgOverlay>
                <br/><br/><br/>
            <div className="center">
                <h3>Fast Same day Delivery</h3>
                <h1>BIRTHDAY FLOWERS</h1>
                <h2>Gerbera</h2>
                <Button variant="secondary">SHOP NOW</Button>
                </div>
          </Card.ImgOverlay>
        </Card>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="bg-dark text-white">
          <Card.Img src={img3} className="imgXs" alt="Card image" />
          <Card.ImgOverlay>
          <br/>
            <div>
                <h3>V7 Digital Photo Printing</h3>
                <h1>PROTECTIVE PREVENTATIVE MAINTENANCE</h1>
                <h4>On Order Over $99</h4>
                <Button variant="secondary">SHOP NOW</Button>
                </div>
          </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
      <Carousel.Item>
      <Card className="bg-dark text-white">
          <Card.Img src={img4} className="imgXs" alt="Card image" />
          <Card.ImgOverlay>
          <br/><br/>
            <div>
                <h2>Rose</h2>
                <h1>FLOWER BOUQUET</h1>
                <h3>50% OFF</h3>
                <Button variant="secondary">SHOP NOW</Button>
                </div>
          </Card.ImgOverlay>
        </Card>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default Gifts;
