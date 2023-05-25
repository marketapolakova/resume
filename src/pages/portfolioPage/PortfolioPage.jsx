import React, { useState } from "react";
import DesignImageComponent from "../../components/imageComponent/DesignImageComponent";

import PortfolioImageComponent from "../../components/imageComponent/PortfolioImageComponent";
import Navbar from "../../components/navbar/Navbar";

const PortfolioPage = () => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState({
    src: "",
    alt: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      {show && (
        <DesignImageComponent
          src={img.src}
          alt={img.alt}
          show={handleShow}
          handleClose={handleClose}
        />
      )}

      <div className="mx-5 my-5">
        <h1>Portfolio</h1>
        <div className="heading-line pb-4"></div>
        <div className="row">
          <div className="col ">
            <h4>Programování</h4>
            <a
              href="https://marketapolakova.github.io/rock-paper-scissors-game/design/"
              rel="noreferrer"
              target="_blank"
            >
              <PortfolioImageComponent
                src="/images/rock-scissors-paper.png"
                alt="rock-scissors-paper game"
              />
            </a>
            <a
              href="https://marketapolakova.github.io/drink-water/"
              rel="noreferrer"
              target="_blank"
            >
              <PortfolioImageComponent
                src="images/drink_water.png"
                alt="water dring app"
              />
            </a>
          </div>
          <div className="col ">
            <h4>Wordpress</h4>
            <a
              href="https://marketapolakova.github.io/wordpress/"
              rel="noreferrer"
              target="_blank"
            >
              <PortfolioImageComponent
                src="images/coffe_without_c.png"
                alt="coffee"
              />
            </a>
            <a
              href="https://marketapolakova.github.io/wordpress/travel/"
              rel="noreferrer"
              target="_blank"
            >
              <PortfolioImageComponent
                src="/images/travel_agency.png"
                alt="travel"
              />
            </a>
          </div>
          <div className="col s-col-12">
            <h4>Návrhy</h4>
            <div className="row">
              <div
                className="col s-col-12"
                onClick={() => {
                  handleShow();
                  setImg({
                    src: "/images/0067- Hotel Booking.png",
                    alt: "Hotel Booking",
                  });
                }}
              >
                {" "}
                <PortfolioImageComponent
                  src="/images/0067- Hotel Booking.png"
                  alt="Hotel Booking"
                />
              </div>
              <div
                className="col s-col-12"
                onClick={() => {
                  handleShow();
                  setImg({
                    src: "/images/0051- Press Page.png",
                    alt: "Press Page",
                  });
                }}
              >
                {" "}
                <PortfolioImageComponent
                  src="/images/0051- Press Page.png"
                  alt="Press Page"
                />
              </div>
            </div>
            <div className="row">
              <div
                className="col col-12"
                onClick={() => {
                  handleShow();
                  setImg({
                    src: "/images/0039- Testimonials.png",
                    alt: "Testimonials",
                  });
                }}
              >
                {" "}
                <PortfolioImageComponent
                  src="/images/0039- Testimonials.png"
                  alt="Testimonials"
                />
              </div>
              <div
                className="col s-col-12"
                onClick={() => {
                  handleShow();
                  setImg({
                    src: "/images/0043- Food:Drink Menu.png",
                    alt: "Menu",
                  });
                }}
              >
                {" "}
                <PortfolioImageComponent
                  src="/images/0043- Food:Drink Menu.png"
                  alt="Menu"
                />
              </div>
              <div
                className="col s-col-12"
                onClick={() => {
                  handleShow();
                  setImg({
                    src: "/images/0028- Contact Us.png",
                    alt: "Contact Us",
                  });
                }}
              >
                <PortfolioImageComponent
                  src="/images/0028- Contact Us.png"
                  alt="Contact Us"
                />
              </div>
            </div>

            <div className="row">
              <div
                className="col s-col-12"
                onClick={() => {
                  handleShow();
                  setImg({
                    src: "/images/0014- Countdown Timer.png",
                    alt: "Countdown Timer",
                  });
                }}
              >
                {" "}
                <PortfolioImageComponent
                  src="/images/0014- Countdown Timer.png"
                  alt="Countdown Timer"
                />
              </div>
              <div
                className="col s-col-12"
                onClick={() => {
                  handleShow();
                  setImg({
                    src: "/images/0002-card checkout.png",
                    alt: "checkout card",
                  });
                }}
              >
                {" "}
                <PortfolioImageComponent
                  src="/images/0002-card checkout.png"
                  alt="checkout card"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <Navbar bgCol={"#e5e2db"} />
    </div>
  );
};

export default PortfolioPage;
