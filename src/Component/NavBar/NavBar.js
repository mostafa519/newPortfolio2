// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import "./NavBar.css";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
//   import {  signOut } from 'firebase/auth'
// import { auth } from '../../InstanceAxios/FireBase/firebase'
// function OffcanvasExample() {
//     const navigate = useNavigate();
 
// const handleLogout = () => {               
//     signOut(auth).then(() => { 
//         navigate("/login");
//         console.log("Signed out successfully")
//     }).catch((error) => { 
//     console.log(error);
//     });
// }
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <>
//       {['xl'].map((expand) => (
//         <Navbar key={expand} expand={expand} className="pb-3" 
//               style={{ position: "fixed", top: 0, zIndex: 9 }}
//      >
//           <Container fluid className='NavEditting mb-5 bg-dark LinkColors'> 
//             <Navbar.Brand as={Link} onClick={handleShow} >
//             Mustafa Ali
//           </Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}><span>Menu</span></Navbar.Toggle> 
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
               
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   PortFolio
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body style={{ backgroundColor:"black"}}>
//                 <Nav className="justify-content-center flex-grow-1 pe-3" 
//                    style={{ maxHeight: "100px" }}
//                    navbarScroll>
//                 <Nav.Link>
//                 <Link className='LinkColors' to={"/"}>Home</Link>
//               </Nav.Link>
//               <Nav.Link>
//                 <Link className='LinkColors' to={"/skills"}>Skills</Link>
//               </Nav.Link>
//               <NavDropdown style={{color:"red"}} title="Projects">
//                 <NavDropdown.Item>
//                   <Link to={"/articles"}>Articls</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item>
//                   <Link to={"/movies"}>Movies</Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item>
//                   <Link to={"/product"}>Products</Link>
//                 </NavDropdown.Item>

//                 <NavDropdown.Divider />
//               </NavDropdown>
//               <Nav.Link>
//                 <Link className='LinkColors' to={"/favorite"}>Favorites</Link>
//               </Nav.Link>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                   <NavDropdown as={Button} title="Projects" id="navbarScrollingDropdown">
//                 <NavDropdown.Item>
//                 <Button variant="outline-success" onClick={handleLogout}>LogOut</Button>
//                 </NavDropdown.Item>
                
 
//               </NavDropdown>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//        <Offcanvas
//         show={show}
//         onHide={handleClose}
//         backdrop="static"
//         scroll={true}
//       >
//         <Offcanvas.Header
//           style={{ backgroundColor: "green", color: "peachpuff " }}
//           closeButton
//         >
//           <Offcanvas.Title>Mustafa Ali Rashwan</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body> 
//            <div 
//           style={{
//             width: '100%', 
            
//             }}> 

//             <img
//               style={{
//                 borderRadius: "50px",
//                 width: "100px",
//                 height: "100px", 
//                 margin:"10px",marginLeft:"30%",
//               }}
//               src="https://scontent.fcai21-3.fna.fbcdn.net/v/t39.30808-6/343225470_1202607090444872_6635587796798906215_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEGnee1iONlGQrUQmkm-UcOHPd07uuhxpcc93Tu66HGlzRD2SmC0-qybf-ih7xAb-FX98bJQ1vE-EixiFrYxt0Q&_nc_ohc=BWn7JWKjliAAX8rEZCE&_nc_ht=scontent.fcai21-3.fna&oh=00_AfCzbPQqRDkzjwM6zFYZOLkFo2MkdJvwiZCMlmpBLygY1w&oe=649499DC"
//               alt="Me Image" 
//             /> 
//             <h3>Front-End Developer </h3>
   
//             </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }

// export default OffcanvasExample; 
import Container from 'react-bootstrap/Container'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary " style={{position:"fixed",top:"0",zIndex:"8",width:"100%" }}>
      <Container fluid>
        <Navbar.Brand href="/">Projects</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" ><span>Menu</span></Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link to={"/"} as={Link}>Home</Nav.Link>
            
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item to={"/articles"} as={Link}>Articls</NavDropdown.Item>
              <NavDropdown.Item to={"/movies"}as={Link}>Movies
              </NavDropdown.Item>
              <NavDropdown.Item to={"/product"}as={Link}>Products
              </NavDropdown.Item>
              <NavDropdown.Item  to={"/Product2"}as={Link}>another Product
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='https://shop-do5k-git-main-mostafa519.vercel.app/'>Clothes Shop
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link to={"/favorite"} as={Link}>Favorites</Nav.Link>
            <Nav.Link to={"/contact"} as={Link}>Contact</Nav.Link>

          </Nav>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;