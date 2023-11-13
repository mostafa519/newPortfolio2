import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"; 
import Row from "react-bootstrap/Row";
import axiosForProduct from "../../InstanceAxios/Products/ProductAxios";
import "./product.css"
import FooterComponent from "../../Component/Footer/Footer";
export default function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosForProduct
      .get("/products", {})
      .then((res) => {
        setProducts(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
console.log(products);
  return (
    <>
       <Row xs={1} md={3} xl={5} className="g-4 m-5">
     {products.map((Product, index) => (
          <Col key={index}>
            <Card>
            <Card.Img className="ImagesEdit" src={Product.image} />
            
                  <FaHeart
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "80%",
                      color: "red",
                      zIndex: 10,
                    }}
                    size={25}
                  /> 

              <Card.Body>
              <Card.Title>{Product.title}</Card.Title>   
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                Total Price {Product.price} $
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <FooterComponent></FooterComponent>
    </>
  );
}
