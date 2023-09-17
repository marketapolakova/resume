import React, { useState } from "react";
import DesignImageComponent from "../../components/imageComponent/DesignImageComponent";

import PortfolioImageComponent from "../../components/imageComponent/PortfolioImageComponent";
import Navbar from "../../components/navbar/Navbar";
import NavbarMobile from "../../components/navbar/NavbarMobile";

const PortfolioPage = ({ en }) => {
  const [show, setShow] = useState(false);
  const [img, setImg] = useState({
    src: "",
    alt: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let delayw = 2;
  let delaye = 2;
  let delayc = 2;
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
      <NavbarMobile en={en && true} link="/portfolio" />
      <div className="mx-5 my-5 pb-3">
        <h1 className="slide-in-right">Portfolio</h1>
        <div className="heading-line pb-4"></div>
        <div className="row">
          <div className="col ">
            <h4>{en ? "Programming" : "Programování"}</h4>
            <hr />
            <a
              href="https://marketapolakova.github.io/rock-paper-scissors-game/design/"
              rel="noreferrer"
              target="_blank"
            >
              <PortfolioImageComponent
                delay={delayw++}
                btnName={en ? "Rock scissors paper game" : "Kámen nůžky papír"}
                en={en && en}
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
                delay={delayw++}
                btnName={
                  en ? "Water drinking messure app" : "Sledování pitného režimu"
                }
                en={en && en}
                src="/images/drink-water.png"
                alt="water dring app"
              />
            </a>
          </div>
          <div className="col ">
            {/* <h4>Wordpress</h4>
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
            </a> */}
            <h4>UX - {en ? "Case studies" : "Případové studie"}</h4>
            <hr />
            <div style={{ width: "70%" }}>
              <a
                href={`${
                  en ? "/case-study/virtual-app/en" : "/case-study/virtual-app"
                }`}
              >
                <PortfolioImageComponent
                  delay={delaye++}
                  btnName={
                    en
                      ? "Virtual tour app for art gallery"
                      : "Virtální prohlídka pro uměleckou galerii"
                  }
                  en={en && en}
                  src="/images/virtual-tour/main-pic.png"
                  alt="virtual app"
                />
              </a>
            </div>
            <a
              href={`${
                en
                  ? "/case-study/dance-classes/en"
                  : "/case-study/dance-classes"
              }`}
            >
              <PortfolioImageComponent
                delay={delaye++}
                btnName={en ? "Dance classes app" : "Taneční lekce"}
                en={en && en}
                src="/images/dance-classes/main-pic.png"
                alt="dance classes app"
              />
            </a>
            <a
              href={`${
                en
                  ? "/case-study/save-and-budget/en"
                  : "/case-study/save-and-budget"
              }`}
            >
              <PortfolioImageComponent
                delay={delaye++}
                btnName={
                  en ? "Save and budget app" : "Aplikace pro šetření a rozpočet"
                }
                en={en && en}
                src="/images/save-and-budget/main-pic.png"
                alt="save and budget app"
              />
            </a>
          </div>
          <div className="col s-col-12">
            {/* <h4>Návrhy</h4> */}
            <h4>UI</h4>
            <hr />
            <div className="row">
              <div
                className="col s-col-12"
                onClick={() => {
                  handleShow();
                  setImg({
                    src: "/images/cv-tom.png",
                    alt: "Tomáš Štorc website resume",
                  });
                }}
              >
                {" "}
                <PortfolioImageComponent
                  delay={delayc}
                  en={en && en}
                  src="/images/cv-tom-crop.png"
                  alt="Tomáš Štorc website resume"
                />
              </div>
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
                  delay={delayc}
                  en={en && en}
                  src="/images/0067- Hotel Booking.png"
                  alt="Hotel Booking"
                />
              </div>
            </div>
            <div className="row">
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
                  delay={delayc++}
                  en={en && en}
                  src="/images/0051- Press Page.png"
                  alt="Press Page"
                />
              </div>

              <div
                className="col s-col-12"
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
                  delay={delayc++}
                  en={en && en}
                  src="/images/0039- Testimonials.png"
                  alt="Testimonials"
                />
              </div>
            </div>
            <div className="row">
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
                  delay={delayc}
                  en={en && en}
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
                  delay={delayc++}
                  en={en && en}
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
                  delay={delayc++}
                  en={en && en}
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
                  delay={delayc++}
                  en={en && en}
                  src="/images/0002-card checkout.png"
                  alt="checkout card"
                />
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <Navbar link="/portfolio" en={en && true} bgCol={"#e5e2db"} />
    </div>
  );
};

export default PortfolioPage;
