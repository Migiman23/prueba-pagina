import React, { useEffect, useState } from "react";
import { Card, Button, Carousel, CardDeck } from "react-bootstrap";
import img7 from "../static/imgs/7.jpg";
import img8 from "../static/imgs/8.jpg";
import img9 from "../static/imgs/9.jpg";
import img10 from "../static/imgs/10.jpg";
import img11 from "../static/imgs/11.jpg";
import img12 from "../static/imgs/12.jpg";

export interface IGifts extends StateProps, DispatchProps {}

const Gifts: React.FunctionComponent<IGifts> = (props) => {
  const [index, setIndex] = useState(0);
  const [lista, setLista] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    let lista2 = [];
    let listaEntity = [];
    lista2.push(img7);
    lista2.push(img8);
    lista2.push(img9);
    lista2.push(img10);

    console.log(lista2);

    let et = {
      id: null,
      imagen: null,
    };

    for (let i = 0; i < products.length; i++) {
      et.id = Number(products[i].id);
      et.imagen = lista2[i];
      listaEntity.push(et);
      et = {
        id: null,
        imagen: null,
      };
    }
    setLista(listaEntity);
  }, []);

  const products = [
    {
      id: 234,
      "name": "Same day Delivery",
      "price": 450,
      "specialPrice": 250     
  },
  {
      id: 237,
      "name": "Basket of Gladness",
      "price": 99,
      "specialPrice": 70    
  },
  {
      id: 236,
      "name": "Triple Pleasures",
      "price": 290,
      "specialPrice": 110   
  },
  {
      id: 235,
      "name": "Tulip Flower Bouquet",
      "price": 110,
      "specialPrice": 50     
  }
  ];

  return (
    <div className="container">
      <br />
      <h2>BEST SELLING FLOWERS & GIFTS</h2>
      <br />
      <div className="col-lg-4 center">
        {lista!= null && lista != undefined && lista.length > 0 ? (
        <Carousel indicators={false}>
          {products.map((entity) => {                  
            let lt = lista.find(obj => obj.id == entity.id);
            return (
              <Carousel.Item>
                <Card>
                  <Card.Img variant="top" src={lt.imagen} />
                  <Card.Body>
                    <div className="row">
                      <div className="col-lg-6 left">{entity.name}</div>
                      <div className="col-lg-6 right">${entity.specialPrice}</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 left opaco">Wedding Flower</div>
                      <div className="col-lg-6 right tachado">
                        ${entity.price}
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            );
          })}
        </Carousel>
        ): null}
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = {};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default Gifts;
