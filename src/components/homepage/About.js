import Banner from "./Banner";
import ImageSlider from "./ImageSlider";
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
      </div>
      <OurTeam />
    </div>
  );
};

export default About;
