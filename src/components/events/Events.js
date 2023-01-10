import { useState, useEffect } from "react";
import Pdf from "../../images/EventsPDF.pdf";
import { MdKeyboardArrowRight } from "react-icons/md";
import EmailForm from "../homepage/EmailForm";

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
          <p style={{ maxWidth: "550px", minWidth: "550px" }}>
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
          height={isMobile ? "450px" : "650px"}
          width={isMobile ? "450px" : "650px"}
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
        <h1 style={{ textAlign: "center", paddingTop: "50px" }}> Contact Us</h1>
        <div className="contactFormContainer">
          <EmailForm />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.235723989974!2d-72.55583890730996!3d41.86627457205285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6f84dbc93ec7b%3A0x36a8ff0f08db9d1c!2s516%20Griffin%20Rd%2C%20South%20Windsor%2C%20CT%2006074!5e0!3m2!1sen!2sus!4v1672710392867!5m2!1sen!2sus"
            width="450"
            height="400"
            style={{ border: 0, borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Events;
