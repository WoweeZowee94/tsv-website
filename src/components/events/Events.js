import React from "react";
import Pdf from '../../images/EventsPDF.pdf'

const Events = () => {
  return (
    <div className="EventsContainer">
       <div
          className="EventsInfoBody"
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
        <button> <a href={Pdf}> Events Menu </a></button>
    </div>
  );
};

export default Events;
