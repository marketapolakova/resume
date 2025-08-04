import React from "react";
import styles from "../../styles/pages/HomePage.module.css";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import Navbar from "../../components/navbar/Navbar";
import Image from "next/image";

const HomePage = ({ en }) => {
  return (
    <>
      <NavbarMobile en={en} link={en ? "/en" : "/"} />

      {/* hlavní obsah */}
      <main className={`${styles.homePage} p-5`}>
        <div className="row m-5">
          <div className="col pt-5">
            <div className="d-none d-sm-block">
              <h1 className="heading slide-in-left">Markéta</h1>
              <h1 className="pt-1 mt-4 ms-5 heading slide-in-right">
                Štorc Poláková
              </h1>
            </div>
            <div className="d-sm-none">
              <h1>Markéta Štorc Poláková</h1>
            </div>

            <p className="pt-3 heading-line fade-in-delay">
              {en
                ? `I graduated in tourism, but during the pandemic, I found an
                  interest in the IT sector. For this reason, I decided to change
                  my focus and start studying software development at a
                  university. Currently, I work at Unicorn company as a frontend
                  developer.`
                : `Vystudovala jsem cestovní ruch, ale v období pandemie jsem našla
                  zálibu v IT odvětví. Z tohoto důvodu, jsem se rozhodla změnit
                  zaměření a zahájit studium oboru softwarový vývoj na vysoké
                  škole. Aktuálně pracuji ve společnosti Unicorn na pozici
                  frontend developer.`}
            </p>
          </div>

          <section className="col d-flex flex-row-reverse fade-in">
            <Image
              className="imageSquare rounded"
              src="/images/profilePic2.jpg"
              width={400}
              height={400}
              alt="Portrait of Markéta Štorc Poláková"
            />
          </section>
        </div>
      </main>

      <Navbar link={en ? "/" : ""} en={en && true} bgCol={"#fff"} />
    </>
  );
};

export default HomePage;
