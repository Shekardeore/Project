import React from "react";

import img_50 from "./images/img_50.jpg";

const About = () => {
  return (
    <>
      <div className="Container"
      style={{
        backgroundImage: `url(${img_50})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "700px",
      }}>
        <div className="container-fluid">
          <p><b>This is about page<br/>
          This will give all info about the Muncipal office department.</b></p>

        </div>
        
      </div>
    </>

  );
};

export default About;

{
  /*Problems like leakage, no water or supply at low pressure,
                    contaminated water, request for tanker,wastage, inflated
                    bills etc can be addressed through the system.In urban areas
                    toll-free number 18003456783 to inform about any issue
related to drinking water.*/
}
