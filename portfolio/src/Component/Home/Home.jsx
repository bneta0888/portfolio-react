import React from "react";
import Nav from "../Nav/Nav";
import "./home.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import baby from "../../Component/assets/bg.png";
import { TypeAnimation } from "react-type-animation";
import Foot from "../foot/Foot";
const Home = () => {
  return (
    <div>
      <Nav />

      <div className="container">
        <div className="left-box">
          <h1>Hi,</h1>

          <h1 style={{ marginTop: "20px" }}>
            I'm <span className="name">Binita Shrestha</span>
          </h1>

          <p style={{ marginTop: "20px", fontSize: "35px" }}>
            <TypeAnimation
              sequence={[
                "Front-End Developer",
                1000,
                "Digital Marketing",
                1000,
                "Content Creator",
                1000,
                " ",
                500,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </p>
          <div className="flex">
            <button>
              <a href="mailto:binitashrestha0888@gmail.com">Hire-Me</a>
              <i style={{ fontSize: "23px"}}class="bi bi-arrow-right"></i>
            </button>
          </div>
          <div className="icons">
            <a href="https://github.com/bneta0888">
              <i class="bi bi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/binita-shrestha-8283962a6/">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/Bneta2006/">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://www.instagram.com/binita_shrestha8?igsh=MTl4cmE3dnQ0Ymx0OA==">
              <i class="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <div className="middle-box">
          <img src={baby} alt="" />
        </div>

        <div className="right-box">
          {" "}
          <p>
            {" "}
            <span
              style={{ fontSize: "25px", fontWeight: "200" }}
              className="name"
            >
              Expert on
            </span>
          </p>
          <p style={{ marginTop: "20px" }}>
            Web-Technology & Front-End Development
          </p>
          <p
            style={{ marginTop: "20px", fontSize: "18px", fontWeight: "light" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et rerum ad
            cupiditate, nobis saepe veritatis sequi odio minus architecto
            corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Delectus vel perferendis voluptate veniam? Ratione fugiat
            perspiciatis earum temporibus culpa laudantium!
          </p>
          <a
            style={{ textDecoration: "none" }}
            href="https://drive.google.com/drive/folders/1P22nCxKGLkbjIrPPR3fSfITTpdMt537o"
          >
            <h5
              style={{
                listStyle: "none",
                color: "orangered",
                borderBottom: "1px solid orangered",
                marginTop: "45px",
                display: "inline-block",
                fontSize: "20px",
              }}
            >
              Download CV
            </h5>
          </a>
        </div>
      </div>
      <Foot/>
    </div>
  );
};

export default Home;
