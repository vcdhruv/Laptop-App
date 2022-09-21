import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function About() {
  const [laptopDetails, setLaptopDetails] = useState([]);

  useEffect(() => {
    loadLaptopDetails();
  }, []);

  const loadLaptopDetails = async () => {
    const result = await axios.get("http://localhost:3333/Laptop");
    setLaptopDetails(result.data);
  };
  return (
    <div>
      <div className="container">
        <div className="row">
            {laptopDetails.map((details, index, i) => (
              <div className="col-3">
              <div
                className="card my-3 mx-3"
                // style={{ width: "22rem" }}
                key={index}
              >
                <div>
                  <img
                    src={details.LaptopImage}
                    className="card-img-top"
                    alt={details.LaptopName}
                  />
                  <div className="card-body">
                    <center>
                      <h1 className="card-title">{details.LaptopName}</h1>
                    </center>
                    <p className="card-text">
                      {details.LaptopName} having {details.LaptopRAM}gb RAM with{" "}
                      {details.LaptopHD}HD of {details.LaptopProcessor}{" "}
                      generation
                    </p>
                    <center>
                      <Link to="/" className="btn btn-primary">
                        Go Back to Home
                      </Link>
                    </center>
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default About;
