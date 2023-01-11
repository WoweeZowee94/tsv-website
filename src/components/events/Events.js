import { useState, useEffect } from "react";
import Pdf from "../../images/EventsPDF.pdf";
import { MdKeyboardArrowRight } from "react-icons/md";
import EmailForm from "../homepage/EmailForm";
import { AiFillPhone, AiOutlinePhone, AiTwotoneMail } from "react-icons/ai";
import { BsFillHouseDoorFill, BsHouseDoorFill } from "react-icons/bs";
import { light } from "@mui/material/styles/createPalette";

const Events = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  });
  return (
    <div className="EventsMasterContainer" style={{ position: "relative" }}>
      <div className="EventsContainer">
        <div className="EventsBodyContainer">
          <h1> Hosting Your Event At Three Seaons </h1>
          <p style={{ maxWidth: "550px" }}>
            Three Seasons Café has a full bar and grill room overlooking our
            scenic golf course. Our private dining room on the main level is a
            perfect location for parties up to 50 people, and our lower level
            banquet facility can accommodate up to 175 guests
          </p>
          <i>
            In addition to golf outings, we specialize in all events including:
          </i>
          <ul>
            <li>Wedding Receptions</li>
            <li>Retirement Parties</li>
            <li>Holiday Parties</li>
            <li>Reunions</li>
            <li>Bridal Showers</li>
            <li>Bereavments</li>
            <li>Sports Banquets</li>
          </ul>
          <div
            style={{
              maxWidth: "550px",
              marginBottom: "25px",
            }}
          >
            Thank you for taking the time to consider Three Seasons Café for
            your special occasion. Please do not hesitate to contact us directly
            with any questions you may have.
          </div>
          <div className="LinkContainer">
            <a href={Pdf} className="EventsLink">
              Events Menu <MdKeyboardArrowRight className="LinkArrow" />{" "}
            </a>
          </div>
        </div>
        <img
          src={require("../../images/eventsImage.png")}
          alt="banquet"
          className="EventsImage"
          style={{
            borderRadius: "10px",
            display:
              window.innerWidth < 1200 && window.innerWidth > 900
                ? "none"
                : "display",
          }}
        ></img>
      </div>
      <div class="custom-shape-divider-bottom-1673187484">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div
        className="contactContainer"
        id="contact-container"
        style={{
          maxWidth: "1500px",
          marginLeft: "auto",
          marginRight: "auto",
          transform: "translateY(-24px)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            paddingTop: "50px",
            fontFamily: "Poppins",
          }}
        >
          {" "}
          Contact Us
        </h1>
        <div className="contactFormContainer">
          <EmailForm />
          <div>
            <div className="OurInfoContainer">
              <div className="AddressInfoContainer">
                <div style={{ fontWeight: "bold" }}>Three Seasons Cafe</div>
                <div>517 Griffin Road</div>
                <div>South Windsor, CT</div>
                <div>06066</div>
              </div>
              <div>
                <AiFillPhone className="InfoIcon" /> (860) 644-5077{" "}
              </div>
              <div>
                <AiTwotoneMail className="InfoIcon" />{" "}
                <a href="mailto:contactthreeseasons@gmail.com">
                  {" "}
                  contactthreeseasons@gmail
                </a>
              </div>
              <div>
                <BsHouseDoorFill className="InfoIcon" />{" "}
                <a href="https://www.google.com/maps/dir/''/517+Griffin+Rd,+South+Windsor,+CT+06074/@41.8650555,-72.5558443,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89e6f84dcef9d871:0xd4c052610c5ecb44!2m2!1d-72.5536556!2d41.8650555">
                  {" "}
                  Directions{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
