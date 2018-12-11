import React from "react";
import { Link } from "react-router-dom";

const manage1 = {
  height: "100vh"
};

const manage2 = {
  color: "#fe4365",
  paddingTop: "50px"
};

const backToHome = {
  color: "grey"
};

const ManageTVShows = () => {
  return (
    <div style={manage1}>
      <h1 style={manage2}>Coming soon...</h1>
      <br />
      <Link to="/" exact="true" style={backToHome}>
        {" "}
        Go back to the Home page{" "}
      </Link>
    </div>
  );
};

export default ManageTVShows;
