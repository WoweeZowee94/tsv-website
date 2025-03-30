import EmailForm from "../homepage/EmailForm";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BsHouseDoorFill } from "react-icons/bs";
import InfoSection from "../InfoSection";

const Events = () => {
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
        </div>
        <InfoSection
          title="Events"
          body="Check out all we have to offer for your special day."
          btnTitle="Events Menu"
          btnColor="#01bf71"
          btnUrl="../images/2025Banquet.pdf"
          imgHeight="300px"
          imgWidth="100%"
          img="../images/EventsMenu.png"
        />
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
                <div>520 Griffin Road</div>
                <div>South Windsor, CT</div>
                <div>06074</div>
              </div>
              <div>
                <AiFillPhone className="InfoIcon" />{" "}
                <a href="tel:8606445077">860-644-5077</a>
              </div>
              <div>
                <AiTwotoneMail className="InfoIcon" />{" "}
                <a href="mailto:contactthreeseasons@gmail.com"> Email</a>
              </div>
              <div>
                <BsHouseDoorFill className="InfoIcon" />{" "}
                <a href="https://www.google.com/maps/dir/''/520+Griffin+Rd,+South+Windsor,+CT+06074/@41.8658951,-72.5560972,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x89e6f84dcef9d871:0x88514d5d19c480e5!2m2!1d-72.5539032!2d41.8658951">
                  {" "}
                  Directions{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-filler" />
      </div>
    </div>
  );
};

export default Events;
