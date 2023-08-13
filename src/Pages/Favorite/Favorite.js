 
import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom"; 
import { Col, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa"; 
import RemoveFromFavorite from "../../Store/Actions/RemoveFav";
import FooterComponent from "../../Component/Footer/Footer";

function Favorites() {
  const favorite = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  console.log(favorite);
  const handleRemoveFromFavorites = (movieId) => {
    dispatch(RemoveFromFavorite(movieId));
  };


  return (
    <>
     <Row xs={1} md={3} className="g-4 m-5">
        {favorite.map((movie) => (
          <Col key={movie.id}>
            <Card>
              <Card.Img
                className="ImageEditts"
                src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              />
             <Link onClick={() => handleRemoveFromFavorites(movie.id)}>
              <FaHeart
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "90%",
                  color: "red",
                }}
                size={25}
              />
            </Link>

              <Card.Body>
                <Card.Title>{movie.title} </Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
     <FooterComponent></FooterComponent>
    </>
  );
}

export default Favorites;
