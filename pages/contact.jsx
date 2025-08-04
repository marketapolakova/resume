import React from "react";
import Navbar from "../components/navbar/Navbar";

import {
  BsTelephoneFill,
  BsLinkedin,
  BsGithub,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import NavbarMobile from "../components/navbar/NavbarMobile";
import { useRouter } from "next/router";
import styles from "../styles/pages/HomePage.module.css";

const ContactPage = () => {
  const { locale } = useRouter();
  const en = locale === "en";
  return (
    <div>
      <NavbarMobile en={en && true} link="/contact" />
      <div className={`${styles.homePage} p-5`}>
        <div className="row m-5">
          <header>
            <h1 className="pt-1 mt-4 slide-in-right">
              {en ? "Contact" : "Kontakt"}{" "}
            </h1>
          </header>

          <div className="heading-line pb-4"></div>
          <main className="fade-in-delay">
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
          </main>
        </div>
        <Navbar link="/contact" en={en && true} bgCol={"#fff"} />
      </div>
    </div>
  );
};

export default ContactPage;
