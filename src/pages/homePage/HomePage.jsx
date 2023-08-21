import React from "react";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";
import NavbarMobile from "../../components/navbar/NavbarMobile";

const HomePage = ({ en }) => {
  return (
    <div>
      <NavbarMobile en={en && true} link={en ? "/" : ""} />
      <div className="homePage p-5">
        <div className="row m-5">
          <div className="col pt-5">
            <div className="d-none d-sm-block">
              <h1 className="heading slide-in-left ">Markéta</h1>
              <div className="px-5 mx-5">
                <h1 className="px-5 pb-3 heading slide-in-right ">Poláková</h1>
              </div>
            </div>
            <div className="d-sm-none">
              <h1>Markéta Poláková</h1>
            </div>
            {en ? (
              <p className=" pt-3 heading-line fade-in-delay">
                I graduated in tourism, but during the pandemic, I found an
                interest in the IT sector. For this reason, I decided to change
                my focus and start studying software development at a
                university. Currently, I work at Unicorn company as a frontend
                developer.
              </p>
            ) : (
              <p className=" pt-3 heading-line fade-in-delay">
                Vystudovala jsem cestovní ruch, ale v období pandemie jsem našla
                zálibu v IT odvětví. Z tohoto důvodu, jsem se rozhodla změnit
                zaměření a zahájit studium oboru softwarový vývoj na vysoké
                škole. Aktuálně pracuji ve společnosti Unicorn na pozici
                frontend developer.
              </p>
            )}
          </div>
          <div className="col d-flex flex-row-reverse fade-in">
            <ImageComponent className="p-2" />
          </div>
        </div>
        <Navbar link={en ? "/" : ""} en={en && true} bgCol={"#fff"} />
      </div>
    </div>
  );
};

export default HomePage;
