import React, { useEffect, useState } from "react";

function PageNotFound() {
  const [ myStyle, setMyStyle ] = useState(
    { marginTop: "237px", fontSize: "150px", color:"red" }
  );
  const togglePage = () => {
    if (myStyle.color === "red") {
      setMyStyle({marginTop: "237px", fontSize: "150px", color:"black"})
    } else {
      setMyStyle({marginTop: "237px", fontSize: "150px", color:"red"})
    }
  }
  useEffect(()=>{
    setTimeout(() => {
      togglePage()
    }, 2000);
  })
  return (
    <div>
      <strong>
        <center
          style={myStyle}
        >
          PAGE NOT FOUND
        </center>
      </strong>
    </div>
  );
  }
export default PageNotFound;
