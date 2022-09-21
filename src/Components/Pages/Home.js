import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

function Home() {
  const [laptopDetails, setLaptopDetails] = useState([]);

  useEffect(() => {
    loadLaptopDetails();
  }, []);

  const loadLaptopDetails = async () => {
    const result = await axios.get("http://localhost:3333/Laptop/");
    setLaptopDetails(result.data);
  };

  const deleteLaptopDetails = async (id) => {
    await axios.delete(`http://localhost:3333/Laptop/${id}`);
    loadLaptopDetails();
  }

  return (
    <div>
      <table className="table my-5">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">LaptopName</th>
            <th scope="col">LaptopRAM</th>
            <th scope="col">LaptopHD</th>
            <th scope="col">LaptopProcessor</th>
            <th scope="col">LaptopGraphicsCard</th>
            <th scope="col" className="px-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {laptopDetails.map((details, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <th>{details.LaptopName}</th>
              <td>{details.LaptopRAM}</td>
              <td>{details.LaptopHD}</td>
              <td>{details.LaptopProcessor}</td>
              <td>{details.LaptopGraphicsCard}</td>
              <td>
                <Link to={`/Laptop/Editlaptop/${details.id}`}>
                  <i
                    className="fa-sharp fa-solid fa-pencil mx-3"
                    style={{ color: "red" }}
                  ></i>
                </Link>
                <Link>
                  <i
                    className="fa-regular fa-solid fa-user-minus"
                    onClick={()=>{deleteLaptopDetails(details.id)}}
                  ></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
