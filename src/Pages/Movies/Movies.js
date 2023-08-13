import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Movies.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import { Col, Row } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { axiosMovies } from "../../InstanceAxios/MovieAxios/MoviesAxios";
import { AddToFavorite } from "../../Store/Actions/AddOrRemoveFavorite";
import RemoveFromFavorite from "../../Store/Actions/RemoveFav";
import FooterComponent from "../../Component/Footer/Footer";

export default function Movies() {
  const [currentPage, setCurrentPage] = useState(8);

  const [movies, setMovies] = useState([]);

  const favorit = useSelector((state) => state.fav);
  const dispatch = useDispatch();
  useEffect(() => {
    axiosMovies
      .get("/movie/popular", {
        params: {
          headers: { "Content-Type": "application.json" },
          page: currentPage,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage != 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  }; 
  
  
  const handleSearch = (event) => {
    event.preventDefault();
    let task = document.getElementById("form1").value;
    const filtered = movies.filter(item =>
      item.title.toLowerCase().includes(task.toLowerCase()));
      if (task === '') {
        return setMovies(movies);
      }
  
      setMovies(filtered);
    
    // setsearchMovie(movies.filter((movie) => movie.title == task));
  };
  
  const isFav = (movie) => {
    return favorit.some((Movie) => Movie.id == movie.id);
  };

  const handleAddToFav = (movie) => {
    if (isFav(movie)) {
      dispatch(RemoveFromFavorite(movie.id));
    } else {
      dispatch(AddToFavorite(movie));
    }
  };
  return (
    <>
    <div   className="MoviesEdit">
      <Carousel variant="dark" style={{ color: "white" }}>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id} style={{ color: "white" }}>
            <img
              className="d-block "
              style={{ width: "100%" ,height:"100%"}}
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5 style={{ color: "white" }}>{movie.title}</h5>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div
        className="col-5 mt-5"
        style={{ marginLeft: "40%", width: "20%", marginTop: "20px" }}
      >
        {/* <div className="form-outline mt-5">
          <Form className="d-flex mt-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="mt-5"
              aria-label="Search"
              variant="outline-success"
              id="form1"
              style={{ border: "1px solid black" }}
            />
          </Form>
          <button
            onClick={handleSearch}
            className="btn "
            style={{ marginLeft: "25%", width: "50%", marginTop: "20px" }}
          >
            Search
          </button>
        </div> */}
      </div>
      <Row xs={1} md={3} xl={5} className="g-4 m-5">
        {movies.map((movie, index) => (
          <Col key={index} >
            <Card>
              <Card.Img className="ImageEditts"   src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
            
              <Link onClick={() => handleAddToFav(movie)}>
                {isFav(movie) ? (
                  <FaHeart
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "85%",
                      color: "red",
                      zIndex: 11,
                    }}
                    size={25}
                  />
                ) : (
                  <FaHeart
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "85%",
                      color: "white",
                      zIndex: 11,
                    }}
                    size={25}
                  />
                )}
              </Link>

              <Card.Body className="backgroudEditting">
                <Card.Title>{movie.title} </Card.Title>
                 {/* <Card.Text>{movie.overview}</Card.Text>  */}
              </Card.Body>
              
            </Card>
          </Col>
        ))}
      </Row>
 
      <Row  className="g-4 m-5 pb-5">
        <Col>
          <Button
          className="Colorsss"
            variant="secondary"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Previous Page
          </Button>
        </Col>
        <Col className="text-end">
          <Button variant="secondary" onClick={handleNextPage}
                    className="Colorsss"
                    >
            Next Page
          </Button>
        </Col>
      </Row>
     
    </div>
    <FooterComponent></FooterComponent>
    </>
  );
}
