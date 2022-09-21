import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Editlaptop() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
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

  const onInputChange = (e) => {
    setLaptopDetails({ ...laptopDetails, [e.target.name]: e.target.value });
  };
  const loadLaptopDetails = async () => {
    const result = await axios.get(`http://localhost:3333/Laptop/${id}`);
    setLaptopDetails(result.data);
  };

  useEffect(() => {
    loadLaptopDetails();
  }, []);

  return (
    <>
      <center>
        <h1 className="m-5" style={{ color: "red", fontSize: "80px" }}>
          Update Laptop Specifications
        </h1>
      </center>
      <div className="conatiner my-4">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="LaptopName"
            value={LaptopName}
            placeholder="name@example.com"
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
            placeholder="Password"
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
            placeholder="name@example.com"
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
            id="floatingPassword"
            name="LaptopProcessor"
            value={LaptopProcessor}
            placeholder="Password"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <label htmlFor="floatingPassword">Laptop Processor Gen</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            name="LaptopGraphicsCard"
            value={LaptopGraphicsCard}
            placeholder="name@example.com"
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
            id="floatingPassword"
            name="LaptopImage"
            value={LaptopImage}
            placeholder="Password"
            onChange={(e) => {
              onInputChange(e);
            }}
          />
          <label htmlFor="floatingPassword">Laptop Image URL</label>
        </div>
        <center>
          <div
            className="btn btn-primary p-3 w-25"
            style={{ fontSize: "25px" }}
            onClick={async (e) => {
              e.preventDefault();
              await axios.put(
                `http://localhost:3333/Laptop/${id}`,
                laptopDetails
              );
              navigate("/");
            }}
          >
            Update Laptop Specifications
          </div>
        </center>
      </div>
    </>
  );
}

export default Editlaptop;
