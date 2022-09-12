import React from "react";
import Imageslider from "./Imageslider";
import se from "./se.js";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    se();
  }, []);

  return (
    <div>
      {/* <h1>Welcome to *****E-Desk*****</h1> */}

      <div>
        <Imageslider />
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default Home;
