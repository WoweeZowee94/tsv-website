const CafeMenu = () => {
  return (
    <div className="CafeMenuContainer">
        <div className="CafeMenuPDFMessage"> If you'd like to view a PDF of our menu click here. </div>
      <div className="CafeMenuMenu">
        <h2 className="CafeMenuGroupHeading">Soups & Salads</h2>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Clam Chowder </span>
                <span className="CafeMenuItemPrice"> $6.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Classic New England chowder.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Classic Chili </span>
                <span className="CafeMenuItemPrice"> $6.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Our signature house-made chili.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Mediterranean Salad </span>
                <span className="CafeMenuItemPrice"> $8.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Black olives, feta, watermelon, cucumbers, and red onion over
                mixed greens and tossed with a balsamic glaze.
                <ul>
                  <li> Add Chicken $4</li>
                  <li> Add Ahi Tuna $6</li>
                  <li> Add Grilled Salmon or Lobster $8</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  {" "}
                  Garden or Caesar Salad{" "}
                </span>
                <span className="CafeMenuItemPrice"> $7.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Side Garden or Caesar Salad $4
                <ul>
                  <li> Add Chicken $4</li>
                  <li> Add Ahi Tuna $6</li>
                  <li> Add Grilled Salmon or Lobster $8</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  {" "}
                  Strawberry Feta Salad{" "}
                </span>
                <span className="CafeMenuItemPrice"> $13.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Strawberries, avocado, feta cheese, roasted almond, cucumbers,
                and onions over mixed greens served with grilled chicken.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Ahi Tuna Asian Salad </span>
                <span className="CafeMenuItemPrice"> $13.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Ahi tuna or Grilled chicken, mixed greens, mandarin oranges,
                grape tomatoes, cucumbers, carrots, scallions, and asian noodles
                served with a side of cucumber wasabi dressing.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Cobb Salad </span>
                <span className="CafeMenuItemPrice"> $14.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Chopped romaine, chicken, avocado, hardboiled egg, bacon, red
                onion, cherry tomato, and bleu cheese crumbles.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Baskets To Share </h2>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Classic French Fries </span>
                <span className="CafeMenuItemPrice"> $4.50 </span>
              </h3>
              <div className="CafeMenuItemDesc"> Served with a side of ketchup. </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Seasoned Fries </span>
                <span className="CafeMenuItemPrice"> $5.50 </span>
              </h3>
              <div className="CafeMenuItemDesc"> Served with a side of chipotle ranch. </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Jalapeno Poppers </span>
                <span className="CafeMenuItemPrice"> $8.95</span>
              </h3>
              <div className="CafeMenuItemDesc"> Served with a side of ranch. </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Mozzarella Sticks </span>
                <span className="CafeMenuItemPrice"> $8.95 </span>
              </h3>
              <div className="CafeMenuItemDesc"> Served with a side of mariana sauce.</div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Appetizers </h2>
        <div className="CafeMenuGroup">
        <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Potato Skins </span>
                <span className="CafeMenuItemPrice"> $9.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                    Stuffed with homemade beer cheese, topped with bason, shredded cheddar, chives and sour cream.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Tater Tot Barrels </span>
                <span className="CafeMenuItemPrice"> $9.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                    Five jumbo tater tots stuffed with bacon and chive, drizzled in ranch. 
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Warm Bavarian Pretzels </span>
                <span className="CafeMenuItemPrice"> $9.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                    Hearty serving of five pretzel sticks served with a homemade beer cheese sauce and honey mustard.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Buff-Chick Eggrolls </span>
                <span className="CafeMenuItemPrice"> $10.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                    Fresh shredded chicken breast with buffalo sauce and bleu cheese in six crispy golden eggrolls.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Chicken/Veggie Quesadilla </span>
                <span className="CafeMenuItemPrice"> $10.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                    Chicken, diced tomatoes, diced scallions, and cheddar jack cheese. <br />
                    *Veggie - add onions, mushrooms, and peppers

              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Chips & Dip </span>
                <span className="CafeMenuItemPrice"> $7.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                    A basket of kettle chips, served with Chef's homemade caramelized onion and bacon dip.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Boneless Wings </span>
                <span className="CafeMenuItemPrice"> $11.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                    Freshly battered chicken tenderloins fried to perfection and tossed in the sauce of your choice. 
                    Served with a side of bleu cheese.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Jumbo Chicken Wings </span>
                <span className="CafeMenuItemPrice"> (8)$12.95 / (16)$19.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                    Buffalo / Honey Hot / Garlic Parmesan / Smokey BBQ / Sesame Teriyaki <br/>
                    Served with celery, carrots, and bleu cheese. 
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Burgers & Dogs </h2>
        <h3> *Served with Fries, Chips, Cole Slaw, or Chickpea Salad. Add Onion Rings or Sweet Potato Fries for $1.00 </h3>
        <div className="CafeMenuItemGroup"></div>
        <h2 className="CafeMenuGroupHeading"> Sandwiches & Wraps </h2>
        <div className="CafeMenuItemGroup"></div>
        <h2 className="CafeMenuGroupHeading"> Fresh Catch Entrees </h2>
        <div className="CafeMenuItemGroup"></div>
        <h2 className="CafeMenuGroupHeading"> Desserts </h2>
      </div>
    </div>
  );
};

export default CafeMenu;
