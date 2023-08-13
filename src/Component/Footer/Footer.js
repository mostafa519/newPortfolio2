import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaDownload,
  FaPhoneAlt,
  FaHouseUser,
} from "react-icons/fa";
import "./Footer.css";
export default function FooterComponent() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted FootEditting mt-5">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with Me to show my Skills ?</span>
        </div>

        <div>
          <a
            href="https://www.facebook.com/profile.php?id=100007115927987"
            target="_blank"
            className="me-4 text-reset"
          >
            <FaFacebook style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://github.com/mostafa519"
            target="_blank"
            className="me-4 text-reset"
          >
            <FaGithub style={{ fontSize: "30px" }} />
          </a>
          <a
            href="mailto:engmostafa51999@gmail.com"
            className="me-4 text-reset"
          >
            <FaGoogle style={{ fontSize: "30px" }} />
          </a>
          <a
            href="https://www.linkedin.com/in/eng-mostafa-4a228519b/"
            target="_blank"
            className="me-4 text-reset"
          >
            <FaLinkedin style={{ fontSize: "30px" }} />
          </a>
          <a
            className="me-4 text-reset"
            target="_blank"
            onClick={() => {
              window.print();
            }}
          >
            <FaDownload style={{ fontSize: "30px" }} />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Front-End Developer
              </h6>
              <p>
                Seeking a position that allows me to apply my strong analytical
                and problem-solving skills, along with my passion for continuous
                learning, to make a positive impact and contribute to the
                overall goals of the organization.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Skills</h6>
              <p>
                <a href="#!" className="text-reset">
                  React.Js
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Node.js
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  HTML5
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  CSS3
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  BootStrap
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  OOP
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Skills</h6>
              <p>
                <a href="#!" className="text-reset">
                  Angular
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Flutter
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Communcation Skills
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Teamwork
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  GET & Github
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  React Native
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHouseUser className="me-2" />
                Sohag, Tema, El Tahreer
              </p>
              <p>
                <FaGoogle className="me-3" />
                engmostafa51999@gmail.com
              </p>
              <p>
                <FaPhoneAlt className="me-3" /> + 011 5807 9051
              </p>
              <p>
                <FaPhoneAlt className="me-3" /> + 011 1161 3204
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="#!">
          Mustafa Ali Rashwan 
        </a>
      </div>
    </MDBFooter>
  );
}
