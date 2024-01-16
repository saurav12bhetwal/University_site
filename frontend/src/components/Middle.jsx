import React from "react";
import img1 from "../Image/1.jpg";
import img2 from "../Image/2.jpg";
import img3 from "../Image/3.jpg";
import RightDetail from "./RightDetail";
const Middle = () => {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide w-75 "
        style={{ float: "left", display: "inline-block",marginRight:"10px" }}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={img1} className="d-block w-100 carouselSet" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={img2} className="d-block w-100 carouselSet" alt="..." />
          </div>
          <div className="carousel-item"data-bs-interval="2000">
            <img src={img3} className="d-block w-100 carouselSet" alt="..." />
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div >
        <RightDetail></RightDetail>
        <RightDetail></RightDetail>
        <RightDetail></RightDetail>
      </div>
    </div>
  );
};

export default Middle;
