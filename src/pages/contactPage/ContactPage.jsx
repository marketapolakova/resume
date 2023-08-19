import React from "react";
import Navbar from "../../components/navbar/Navbar";

import {
  BsTelephoneFill,
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const ContactPage = ({ en }) => {
  return (
    <div>
      <div className="homePage p-5">
        <div className="row m-5">
          <div className="col pt-5 slide-in-right ">
            <h1>{en ? "Contact" : "Kontakt"} </h1>
          </div>
          <div className="heading-line pb-4"></div>
          <div className="fade-in-delay">
            <p className="fs-6 lh pt-3 ">
              <BsTelephoneFill />{" "}
              <a href="tel:+420722308762"> +420 722 308 762</a>
            </p>
            <p className="fs-6 lh pt-3 ">
              <BsFillEnvelopeFill />{" "}
              <a href="mailto:polakovamarketa@email.cz">
                polakovamarketa@email.cz
              </a>
            </p>
            <p className="fs-6 lh pt-3 ">
              <BsLinkedin /> <a href="http://">LinkedIn</a>
            </p>{" "}
            <p className="fs-6 lh pt-3 ">
              <BsGithub /> <a href="http://">GitHub</a>
            </p>
          </div>
        </div>
        <Navbar link="/contact" en={en && true} bgCol={"#fff"} />
      </div>
    </div>
  );
};

export default ContactPage;
