import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
import EmailForm from "./EmailForm";
import OurTeam from "./OurTeam";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const menuNavigate = () => {
    navigate("/menu");
  };
  const eventNavigate = () => {
    navigate("/events");
  };
  return (
    <div className="AboutUsContainer">
      <div className="BannerContainer">
        <Banner />
      </div>
      <h1 className="AboutUsTagline">
        Made in South Windsor for South Windsor.
      </h1>
      <div className="AboutUsContentContainer">
        <div className="AboutUsBody">
          ──────── <br /> <br />
          Three Seasons Cafe, located on the scenic <br /> Topstone Golf Course
          in South Windsor CT <br /> has been delighting the people Northeastern{" "}
          <br /> Connecticut for over 20 years. <br /> <br />
          Whether you prefer our Grill Room, <br /> sporting scenic views and a
          rustic, <br /> gastropub setting, or our Banquet Halls <br /> that are
          equipped to host corporate events <br /> and intimate gatherings of
          all sizes- <br /> Our team would love to serve you. <br /> <br />
          Be sure to consider Topstone for your <br /> next date night, to-go
          dinner, family <br /> function, or corporate outing.
          <div className="AboutUsBtnContainer">
            <button className="AboutUsMenuBtn" onClick={menuNavigate}>
              Cafe Menu
            </button>
            <button className="AboutUsEventMenuBtn" onClick={eventNavigate}>
              Event Menu
            </button>
          </div>
        </div>
        <ImageSlider />
        <div class="custom-shape-divider-bottom-1672838994">
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
        <h1 style={{ textAlign: "center", marginTop: "50px" }}> Contact Us</h1>
        <div className="contactFormContainer">
          <EmailForm />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2971.235723989974!2d-72.55583890730996!3d41.86627457205285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6f84dbc93ec7b%3A0x36a8ff0f08db9d1c!2s516%20Griffin%20Rd%2C%20South%20Windsor%2C%20CT%2006074!5e0!3m2!1sen!2sus!4v1672710392867!5m2!1sen!2sus"
            width="400"
            height="350"
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

export default About;
