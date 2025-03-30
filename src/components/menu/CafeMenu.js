import ScrollToTop from "../../utils/ScrollToTop";

const CafeMenu = () => {
  ScrollToTop();
  return (
    <div className="CafeMenuContainer">
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
                <span className="CafeMenuItemPrice"> $7.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Our signature house-made chili served with tortilla chips.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">Garden Salad</span>
                <span className="CafeMenuItemPrice"> $8.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Mixed greens topped with cucumbers, grape tomatoes, green
                peppers and carrots.
                <ul>
                  <li> Side Salad $5</li>
                  <li> Add Chicken $6</li>
                  <li> Add Ahi Tuna $7</li>
                  <li> Add Grilled Shrimp $6</li>
                  <li> Add Fresh Tuna $5</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">Classic Caesar Salad</span>
                <span className="CafeMenuItemPrice"> $8.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Crisp romaine lettuce, fresh parmesan cheese, garlic croutons
                and classic Caesar dressing.
                <ul>
                  <li> Side Salad $5</li>
                  <li> Add Chicken $6</li>
                  <li> Add Ahi Tuna $7</li>
                  <li> Add Grilled Shrimp $6</li>
                  <li> Add Fresh Tuna $5</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Ahi Tuna Asian Salad </span>
                <span className="CafeMenuItemPrice"> $15.99 </span>
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
                <span className="CafeMenuItemName">
                  {" "}
                  Southwestern Chicken Salad{" "}
                </span>
                <span className="CafeMenuItemPrice"> $15.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Romaine topped with carrots, cucumbers, avocado, and black beans
                served with seasoned chicken breast, tortilla strips and chipotle ranch.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Cobb Salad </span>
                <span className="CafeMenuItemPrice"> $15.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Chopped romaine, chicken, avocado, hardboiled egg, bacon, red
                onion, cherry tomato, and bleu cheese crumbles.
                <ul>
                  <li>Add Grilled Shrimp $3</li>
                </ul>
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
                <span className="CafeMenuItemPrice"> $5.50 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Served with a side of ketchup.{" "}
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Seasoned Fries </span>
                <span className="CafeMenuItemPrice"> $6.50 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Served with a side of chipotle ranch.{" "}
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Onion Rings </span>
                <span className="CafeMenuItemPrice"> $6.50</span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Served with a side of ranch or bbq sauce.{" "}
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Jalapeno Poppers </span>
                <span className="CafeMenuItemPrice"> $8.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Served with a side of ranch.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Appetizers </h2>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Fried Pickles </span>
                <span className="CafeMenuItemPrice"> $11.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Basked of deep fried pickles served with chipotle ranch.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Philly Eggrolls </span>
                <span className="CafeMenuItemPrice"> $12.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Roast beef, mushrooms, peppers and american cheese in a crispy
                golden eggroll(6) served with chipotle ranch.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  Tater Tot Barrels
                </span>
                <span className="CafeMenuItemPrice"> $12.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                5 Jumbo tater tots stuffed with bacon and chive, drizzled with ranch.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Boneless Wings w/ Fries </span>
                <span className="CafeMenuItemPrice"> $15.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Freshly battered chicken tenderloins fried to perfection and tossed
                in the sauce of your choice. Served with blue cheese.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Warm Bavarian Pretzels </span>
                <span className="CafeMenuItemPrice"> $12.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Hearty serving of 5 pretzel sticks served with a homemade beer cheese sauce
                and honey mustard.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Chicken Quesadilla </span>
                <span className="CafeMenuItemPrice"> $14.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
              <i> Veggie - add onions, mushrooms and peppers. <br/></i>
                Chicken, diced tomatoes, diced scallions and cheddar jack cheese.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Jumbo Chicken Wings </span>
                <span className="CafeMenuItemPrice">
                  {" "}
                  (8)$12.95 / (16)$19.95{" "}
                </span>
              </h3>
              <div className="CafeMenuItemDesc">
                <i>
                  Buffalo / Honey Hot / Garlic Parmesan / Smokey BBQ / Sesame
                  Teriyaki / Kickin Bourbon <br />{" "}
                </i>
                Served with celery, carrots, and bleu cheese.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Nachos w/ Chili or Chicken </span>
                <span className="CafeMenuItemPrice">
                  {" "}
                  $16.00 / (No Protein)$13.00{" "}
                </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Totrilla chips, cheddar cheese, diced tomatoes, jalapenos and 
                scallions served with sour cream and salsa.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Burgers & Dogs </h2>
        <h3>
          {" "}
          *Served with Fries, Chips, Cole Slaw, or Chickpea Salad. Add Onion
          Rings or Sweet Potato Fries for $1.50{" "}
        </h3>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Hot Dog </span>
                <span className="CafeMenuItemPrice"> $6.75 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                9-inch Hummel dog served on a New England style bun.
                <ul>
                  <li> Add Kraut $.50</li>
                  <li> Add Chili $2.00</li>
                  <li> Add Cheese $1.00</li>
                  <li> Add Fries $2.00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Cheeseburger </span>
                <span className="CafeMenuItemPrice"> $14.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                6oz. Angus burger or veggie burger, melted american cheese,
                lettuce and tomato served on a brioche bun.
                <ul>
                  <li> Add Bacon $2.00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Chili Cheese Dog </span>
                <span className="CafeMenuItemPrice"> $11.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Hummel dog topped with house made chili and melted cheddar
                cheese.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Truffle Burger </span>
                <span className="CafeMenuItemPrice"> $15.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                6oz. Angus burger, melted cheese, arugula, fried onion strings
                and truffle aioli on a toasted brioche bun.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Chipotle Burger </span>
                <span className="CafeMenuItemPrice"> $15.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                6oz. Angus burger, melted cheddar jack, avocado,
                lettuce and tomato with a house-made chipotle mayo.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Sandwiches & Wraps </h2>
        <h3>
          {" "}
          *Served with Fries, Chips, Cole Slaw, or Chickpea Salad. Add Onion
          Rings or Sweet Potato Fries for $1.50{" "}
        </h3>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  {" "}
                  Half Sandwich & Cup of Soup{" "}
                </span>
                <span className="CafeMenuItemPrice"> $11.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Turkey, Ham, BLT or Tuna Salad served on your choice of bread
                with lettuce and tomato.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Classic BLT </span>
                <span className="CafeMenuItemPrice"> $12.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Thick cut bacon, lettuce, tomato, and mayo served on your choice
                of bread.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Roast Beef Sandwich </span>
                <span className="CafeMenuItemPrice"> $15.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Fresh sliced roast beef on a brioche roll with swiss cheese,
                horseradish sauce, lettuce and tomato.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Deli Sandwich</span>
                <span className="CafeMenuItemPrice"> $12.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Turkey, Ham or Tuna Salad on your choice of bread with lettuce and tomato.
                <ul>
                  <li> Also served Club Style $14.95 </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  Classic Corned Beef Ruben
                </span>
                <span className="CafeMenuItemPrice">$14.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Warm corned beef or turkey, melted swiss, sauerkraut, and
                thousand island dressing served on rye bread.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">Philly Cheesesteak</span>
                <span className="CafeMenuItemPrice"> $15.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Shaved roast beef, peppers, onions, and mushrooms smothered in melted
                American cheese.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Veggie Wrap </span>
                <span className="CafeMenuItemPrice"> $12.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Cucumbers, red onion, red peppers, tomatoes, green peppers,
                hummus and feta cheese drizzled in balsamic.{" "}
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">Buffalo Chicken Wrap</span>
                <span className="CafeMenuItemPrice"> $14.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Crispy or grilled chicken, grape tomatoes, chopped celery,
                romaine and bleu cheese dressing.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">BBQ Chicken Wrap</span>
                <span className="CafeMenuItemPrice">$14.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Crispy or grilled chicken tossed in sweet and smokey BBQ sauce,
                shredded romaine and diced tomatoes.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">Chicken Caesar Wrap</span>
                <span className="CafeMenuItemPrice">$14.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Grilled chicken, caesar dressing, shredded romaine and shaved
                parmesan.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Chicken Bacon Avocado Ranch Sandwich</span>
                <span className="CafeMenuItemPrice">$15.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Grilled chicken breast on a brioche bun served with bacon, ranch dressing
                avocado, lettuce and tomato.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Fresh Catch Entrees </h2>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Maryland Crab Cakes</span>
                <span className="CafeMenuItemPrice"> $12.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                3 Large crab cakes topped with chipotle aioli and served
                with a side of cole-slaw.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Shrimp Avocado Wrap </span>
                <span className="CafeMenuItemPrice"> $15.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Large tortilla wrap with fresh shrimp, avocado, cucumber, lettuce
                and a lemon-dill aioli.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Fish & Chips </span>
                <span className="CafeMenuItemPrice"> $18.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Battered and fried cod fillets served over french fries with a
                side of cole slaw and tartar sauce.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Fish Sandwich</span>
                <span className="CafeMenuItemPrice">$15.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Fresh lightly battered cod fillet fried to perfection, lettuce,
                tomato, and tartar sauce served on a hard roll. Your choice of side.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Desserts </h2>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Fried Oreos </span>
                <span className="CafeMenuItemPrice"> $6.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Served with a chocolate syrup drizzle and whipped cream.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  {" "}
                  Brownie Ice Cream Sundae{" "}
                </span>
                <span className="CafeMenuItemPrice"> $6.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Warm brownie topped with vanilla ice cream, chocolate sauce and whipped cream.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeMenu;
