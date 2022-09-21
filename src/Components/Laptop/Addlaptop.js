import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addlaptop() {
  const navigate = useNavigate();
  const [laptopDetails, setLaptopDetails] = useState({
    LaptopName: "",
    LaptopRAM: "",
    LaptopHD: "",
    LaptopProcessor: "",
    LaptopGraphicsCard: "",
    LaptopImage: "",
  });

  const {
    LaptopName,
    LaptopRAM,
    LaptopHD,
    LaptopProcessor,
    LaptopGraphicsCard,
    LaptopImage,
  } = laptopDetails;

  const onInputChange =  (e) => {
    setLaptopDetails({ ...laptopDetails, [e.target.name]: e.target.value });
  };

  return (
    <>
      <center>
        <h1 className="m-5" style={{ color: "red", fontSize: "80px" }}>
          Add Laptop Specifications
        </h1>
      </center>
      <div className="container my-4">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="LaptopName"
            value={LaptopName}
            placeholder="dell g-3"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <label htmlFor="floatingInput">Laptop Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingPassword"
            name="LaptopRAM"
            value={LaptopRAM}
            placeholder="16"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <label htmlFor="floatingPassword">Laptop RAM</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="LaptopHD"
            value={LaptopHD}
            placeholder="full"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <label htmlFor="floatingInput">Laptop HD Quality</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            name="LaptopProcessor"
            value={LaptopProcessor}
            placeholder="5"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <label htmlFor="floatingInput">Laptop Processor Gen</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="LaptopGraphicsCard"
            value={LaptopGraphicsCard}
            placeholder="nvidia"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <label htmlFor="floatingInput">Laptop Graphic Card</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="LaptopImage"
            value={LaptopImage}
            placeholder="https://i5.walmartimages.com/asr/2cd78337-859c-496f-ac5e-da9e9c82c367_1.377888a36a784b1535f4c01d93cfd5a4.jpeg"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <label htmlFor="floatingInput">Laptop Image URL</label>
        </div>
        <center>
          <div
            className="btn btn-primary w-25 p-3"
            style={{ fontSize: "25px" }}
            onClick={async (e) => {
              await axios.post("http://localhost:3333/Laptop",laptopDetails);
              navigate("/");
            }}
          >
            Submit Specifications
          </div>
        </center>
      </div>
    </>
  );
}

export default Addlaptop;
