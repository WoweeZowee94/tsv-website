import React from "react";
import qiuche from '../../images/miniquiche.jpg'
import '../../App.css'


const BrunchMenu = () => {
  return (
    <div>
      <h2 style={{ textDecoration: "underline" }}>
        Brunch Menu - $25.00/ Per Person:
      </h2>
      <h3> Mini Muffins and Pastries </h3>
      <h3> Freshly Brewed Coffee and Tea</h3>
      <div>
        <div className="RowFlex">
        <div className="OptionsContainer">
        <div style={{ textDecoration: "underline" }}>
          Please select one of the following
        </div>
        <ul className="OptionsList">
          <div>French Toast</div>
          <div>Belgium Waffles</div>
          <div>Breakfast Potatoes</div>
          </ul>
        </div>
        <div className="OptionsContainer">
        <div style={{ textDecoration: "underline" }}>
          Please select one of the following
        </div>
        <ul className="OptionsList">
          <div>Mixed Greens</div>
          <div>Seasonal Fruit Salad</div>
          <div>Spinach Strawberry Salad</div>
          </ul>
        </div>
        </div>
      </div>
      <div className="QuicheTeaContiner">
        <div className="QuicheImgContainer">
        <div className="QuicheFrittataContainer">
          <h3>Quiche or Frittata:</h3>
          <div style={{ textDecoration: "underline" }}>
            Please select two of the following
          </div>
          <ul className="QuicheList">
            <li> Bacon Cheese Lorraine </li>
            <li> Peppers, Onions and Ham</li>
            <li> Spinach and Swiss </li>
            <li> Vegetarian </li>
          </ul>
        </div>
        <img src={`${require("../../images/miniquiche.jpg")}`} width="325" height="325"></img>
        </div>
        <div className="TeaContainer">
          <h3>Petite Tea Sandwiches:</h3>
          <div style={{ textDecoration: "underline" }}>
            Please select two from the following
          </div>
          <ul className="TeaList">
            <li> Waldorf Chicken Salad with Spring Mix and Tomato </li>
            <li> Honey Turkey with sharp cheddar and apple</li>
            <li> Roasted Vegetable with Havarti</li>
            <li> Roast Beef with Aloutte</li>
          </ul>
        </div>
      </div>
      <h3 style={{ textDecoration: "underline" }}>
        Optional Brunch Enhancements:
      </h3>
      <div className="BrunchAddOns">

            <div className="AddOnContainer">
                <div className="AddOnHeading">
                <span> Pasta Primavera </span>
                <span> $3.00/Per Person</span>
                </div>
                <div className="AddOnDesc">
                Penne with Fresh Grilled Vegetables tossed in a Herb Oil
                </div>
            </div>
            <div className="AddOnContainer">
                <div className="AddOnHeading">
                <span> Chicken Piccata </span>
                <span> $5.50/Per Person</span>
                </div>
                <div className="AddOnDesc">
                Lightly breaded Fried Chicken Breast with White Wine, <br/> Lemon, Capers,
            Tomatoes, & Artichoke Hearts.
                </div>
            </div>
            <div className="AddOnContainer">
                <div className="AddOnHeading">
                <span> Apricot Chicken </span>
                <span> $5.50/Per Person</span>
                </div>
                <div className="AddOnDesc">
                Boneless Chicken Breast topped with a house made Apricot Glaze.
                </div>
            </div>
            <div className="AddOnContainer">
                <div className="AddOnHeading">
                <span> Crab Cakes </span>
                <span> $6.50/Per Person</span>
                </div>
                <div className="AddOnDesc">
                Chefs homemade Crab Cakes topped with a spicy Remoulade.
                </div>
            </div>
            <div className="AddOnContainer">
                <div className="AddOnHeading">
                <span> Stuffed Sole</span>
                <span> $5.50/Per Person</span>
                </div>
                <div className="AddOnDesc">
                Crab Meat stuffed filet of Sole topped with a delicious Lemon Butter
                </div>
            </div>
      </div>
    </div>
  );
};

export default BrunchMenu;
