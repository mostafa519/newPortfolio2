import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import changeArticles from "../../Store/Actions/ArticlesAction";
import { FaHeart } from "react-icons/fa";
import "./articles.css";  
import { Container } from "react-bootstrap";
import FooterComponent from "../../Component/Footer/Footer";

const Articles = () => {
  const loader = useSelector((state) => state.loader.loader);
  const articles = useSelector((state) => state.articles.articles); 
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(changeArticles());
  }, []); 
  return (
    <>    < div className="backgroudEditting">
      {" "}
      {loader && (
        <div className="d-flex justify-content-center spinnerEdit">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )} 
      <Row xs={1} md={3} className="g-4 m-5">
        {articles.map((article, index) => (
          <Col key={index}>
            <Card>
              <Card.Img className="ImageEdittts" src={article.urlToImage} />
            
                  <FaHeart
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "90%",
                      color: "red",
                      zIndex: 10,
                    }}
                    size={25}
                  /> 

              <Card.Body className="backgroudEditting">
                <Card.Title>{article.title}</Card.Title> 
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
              <Card.Footer className="backgroudEditting">
                <small className="text-muted">
                  Last updated {article.publishedAt}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
<FooterComponent></FooterComponent>
    </>

  );
};

export default Articles;
 