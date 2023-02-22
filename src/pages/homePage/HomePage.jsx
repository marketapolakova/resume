import React from "react";
import ImageComponent from "../../components/imageComponent/ImageComponent";
import "./HomePage.css";
import Navbar from "../../components/navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <div className="homePage p-5">
        <div className="row m-5">
          <div className="col pt-5">
            <h1 className="heading slide-in-left ">Markéta</h1>
            <div className="px-5 mx-5">
              <h1 className="px-5 pb-3 heading slide-in-right ">Poláková</h1>
            </div>

            <p className="fs-6 lh pt-3 heading-line fade-in-delay">
              Vystudovala jsem cestovní ruch, ale v období pandemie jsem našla
              zálibu v IT odvětví. Z tohoto důvodu, jsem se rozhodla změnit
              zaměření a zahájit studium oboru softwarový vývoj na vysoké škole.
              Aktuálně pracuji ve společnosti Unicorn na pozici frontend
              developer.
            </p>
          </div>
          <div className="col d-flex flex-row-reverse fade-in">
            <ImageComponent className="p-2" />
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default HomePage;
