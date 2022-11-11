import { useState } from "react";
import React from "react";
import BrunchMenu from "./BrunchMenu";

const TabView = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
    console.log(index);
  };
  return (
    <div className="TabContainer">
      <div className="BlockTabs">
        <div
          className={toggle === 1 ? "tabs active-tab" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Events Overview
        </div>
        <div
          className={toggle === 2 ? "tabs active-tab" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Brunch Menu
        </div>
        <div
          className={toggle === 3 ? "tabs active-tab" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tab 3
        </div>
      </div>
      <div className="ContentTabs">
        <div
          className={
            toggle === 1 ? "content active-content EventsInfoBody" : "content"
          }
        >
          <h1> Events @ Three Seasons </h1>
          <p>
            Three Seasons Café has a full bar and grill room overlooking our
            scenic golf course. <br />
            Our private dining room on the main level is a perfect location for
            parties up to 50 people. <br />
            Our lower level banquet facility can accommodate up to 175 guests
            and is equipped with its own <br />
            full-service bar as well as private bathrooms. Outside areas can be
            used for events as well. <br /> <br />
            In addition to golf outings, we specialize in all events including
            birthday parties, <br />
            retirement parties, holiday parties, reunions, bridal showers,
            bereavements & sports <br />
            awards banquets. We will gladly do our best to assist any special
            needs you may have. <br /> <br />
            All of the food at Three Seasons Café is freshly ordered and
            prepared by our own Chefs. <br />
            We offer a wide variety of menus and are flexible with dietary
            needs. <br /> <br />
            Our staff is dedicated to making sure your event is as pleasant as
            possible. <br />
            Thank you for taking the time to consider Three Seasons Café for
            your special occasion. <br />
            Please do not hesitate to contact us directly with any questions you
            may have.
          </p>
        </div>
        <div
          className={
            toggle === 2 ? "content active-content EventsBrunchInfo" : "content"
          }
        >
          <BrunchMenu />
        </div>
        <div className={toggle === 3 ? "content active-content" : "content"}>
          <h1>Content 3</h1>
          <p>
            {" "}
            Ipsum labore qui tempor irure reprehenderit commodo pariatur veniam.
            Occaecat adipisicing qui aliquip adipisicing esse excepteur fugiat
            fugiat id. Deserunt sunt tempor qui cupidatat amet officia officia
            cillum tempor. Qui laborum eu mollit duis aliquip Lorem laborum
            excepteur qui laborum. Mollit enim in duis nulla reprehenderit
            dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabView;
