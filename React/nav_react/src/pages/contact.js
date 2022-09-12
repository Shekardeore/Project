import React from "react";
import { Card } from "react-bootstrap";

import img2 from "./images/phonecall.jpg";
import img3 from "./images/Location.jpg";
import img4 from "./images/email.jpg";
import background from "./images/img.jpg";
import img_50 from "./images/img_50.jpg";

function Contact() {
  return (
    <>
      <div
        className="container-fluid "
        style={{
          backgroundImage: `url(${img_50})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "700px",
        }}
      
      >
        <div className="  text-center p-5 ">
          <h2 className="text-black font-weight-bold">Contact Us</h2>
          <p>
            This page will provide contact details
          </p>
        </div>
       
          <div className="col-2 mt-2">
            <Card>
              <Card.Img
                className="mb-1"
                style={{ height: "200px" }}
                variant="top"
                src={img4}
              />
              <Card.Body>
                <Card.Title className="text-center font-weight-bold">
                  Email
                </Card.Title>
                <Card.Text>sp6698@gmail.com</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
    </>
  );
}

export default Contact;
