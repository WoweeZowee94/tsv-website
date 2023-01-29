import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import EmailForm from "./EmailForm";
import OurTeam from "./OurTeam";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BsHouseDoorFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="AboutUsContainer">
      <div className="BannerContainer">
        <Banner />
      </div>
      <h1 className="AboutUsTagline">
        Made in South Windsor for South Windsor.
      </h1>
      <div className="AboutUsContentContainer">
        <div className="about-events-info">
          <div className="SectionContainer" style={{ borderRadius: "5px" }}>
            <img
              src={require("../../images/BeerPour.png")}
              height={"300px"}
              width={"100%"}
              className="InfoSectionImage"
              alt="alt"
            />
            <div className="SectionInfoContainer">
              <h1 className="SectionTitle"> Cafe </h1>
              <div>
                {" "}
                Our cafe has been serving up all your favorite burgers, craft
                beers, and pub bites since 1997. Check out our menu for all our
                offerings!{" "}
              </div>
            </div>
            <div className="InfoBtnSection">
              <div className="InfoBtnContainer SectionBtn">
                <a href={"/menu"} className="InfoBtnLink">
                  Cafe Menu
                </a>
              </div>
            </div>
          </div>
          <div className="SectionContainer" style={{ borderRadius: "5px" }}>
            <img
              src={require("../../images/Events2.png")}
              height={"300px"}
              width={"100%"}
              className="InfoSectionImage"
              alt="alt"
            />
            <div className="SectionInfoContainer">
              <h1 className="SectionTitle"> Events </h1>
              <div>
                Three Seasons Cafe has decades of experience running all kinds
                of events. Check out all we have to offer for your special day.
              </div>
            </div>
            <div className="InfoBtnSection">
              <div className="InfoBtnContainer SectionBtn">
                <a href={"/events"} className="InfoBtnLink">
                  Events Info
                </a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="custom-shape-divider-bottom-1672838994">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <OurTeam />
      <div className="contactContainer" id="contact-container">
        <h1
          style={{ textAlign: "center", marginTop: "50px" }}
          className="contact-tagline"
        >
          {" "}
          Contact Us
        </h1>
        <div className="contactFormContainer">
          <EmailForm />
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
        <div className="gap-filler" />
      </div>
    </div>
  );
};

export default About;
