import ScrollToTop from "../../utils/ScrollToTop";

const CafeMenu = () => {
  ScrollToTop();
  return (
    <div className="CafeMenuContainer">
      <div className="CafeMenuPDFMessage">
        {" "}
        If you'd like to view a PDF of our menu click here.{" "}
      </div>
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
                <span className="CafeMenuItemName">Garden Salad</span>
                <span className="CafeMenuItemPrice"> $6.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Mixed greens topped with cucumbers, grape tomatoes, green
                peppers and carrots.
                <ul>
                  <li> Add Chicken $4</li>
                  <li> Add Ahi Tuna $6</li>
                  <li> Add Grilled Shrimp $6</li>
                  <li> Add Fresh Lobster $MP</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">Classic Caesar Salad</span>
                <span className="CafeMenuItemPrice"> $7.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Crisp romaine lettuce, fresh parmesan cheese, garlic croutons
                and classic Caesar dressing.
                <ul>
                  <li> Add Chicken $4</li>
                  <li> Add Ahi Tuna $6</li>
                  <li> Add Grilled Shrimp $6</li>
                  <li> Add Fresh Lobster $MP</li>
                </ul>
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
                <span className="CafeMenuItemName">
                  {" "}
                  Buffalo Chicken Salad{" "}
                </span>
                <span className="CafeMenuItemPrice"> $11.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Grilled or crispy chicken, romaine lettuce, grape tomatoes,
                cucumbers, carrots, bleu cheese crumbes and your choice of
                dressing
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
                <span className="CafeMenuItemPrice"> $5.50 </span>
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
                <span className="CafeMenuItemName"> Jalapeno Poppers </span>
                <span className="CafeMenuItemPrice"> $8.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Served with a side of ranch.{" "}
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Mozzarella Sticks </span>
                <span className="CafeMenuItemPrice"> $8.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Served with a side of mariana sauce.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Appetizers </h2>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Fried Calamari </span>
                <span className="CafeMenuItemPrice"> $10.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Served with a side of sriracha aioli and banana peppers.
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
                Five jumbo tater tots stuffed with bacon and chive, drizzled in
                ranch.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  {" "}
                  Warm Bavarian Pretzels{" "}
                </span>
                <span className="CafeMenuItemPrice"> $9.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Hearty serving of five pretzel sticks served with a homemade
                beer cheese sauce and honey mustard.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Shrimp Cocktail </span>
                <span className="CafeMenuItemPrice"> $10.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                6 jumbo shrimp served with a spicy cocktail sauce.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Quesadilla </span>
                <span className="CafeMenuItemPrice"> $10.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                <i>
                  {" "}
                  Grilled Chicken / Jerk Chicken / Shrimp / Veggie <br />{" "}
                </i>
                Fresh seasoned veggies or protein of your choice, diced
                tomatoes, diced scallions, and cheddar jack cheese.
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
                Freshly battered chicken tenderloins fried to perfection and
                tossed in the sauce of your choice. Served with a side of bleu
                cheese.
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
                  Teriyaki <br />{" "}
                </i>
                Served with celery, carrots, and bleu cheese.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Burgers & Dogs </h2>
        <h3>
          {" "}
          *Served with Fries, Chips, Cole Slaw, or Chickpea Salad. Add Onion
          Rings or Sweet Potato Fries for $1.00{" "}
        </h3>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Hot Dog </span>
                <span className="CafeMenuItemPrice"> $4.50 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                9-inch Hummel dog served on a New England style bun.
                <ul>
                  <li> Add Kraut $.50</li>
                  <li> Add Fries $1.00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Cheeseburger </span>
                <span className="CafeMenuItemPrice"> $9.95 </span>
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
                <span className="CafeMenuItemPrice"> $5.50 </span>
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
                <span className="CafeMenuItemName"> Patty Melt </span>
                <span className="CafeMenuItemPrice"> $11.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                6oz. Angus burger, melted swiss and caramelized onions served on
                rye bread.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Three Seasons Burger </span>
                <span className="CafeMenuItemPrice"> $11.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                6oz. Angus burger, melted cheddar, peppers, onions, lettuce and
                tomatoes served on a brioche roll with a sriracha aioli.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Sandwiches & Wraps </h2>
        <h3>
          {" "}
          *Served with Fries, Chips, Cole Slaw, or Chickpea Salad. Add Onion
          Rings or Sweet Potato Fries for $1.00{" "}
        </h3>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  {" "}
                  Half Sandwich & Cup of Soup{" "}
                </span>
                <span className="CafeMenuItemPrice"> $7.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Turkey or tuna salad served on your choice of bread with lettuce
                and tomato. *No side served with this item.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Classic BLT </span>
                <span className="CafeMenuItemPrice"> $8.95 </span>
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
                <span className="CafeMenuItemName"> Grilled Cheese </span>
                <span className="CafeMenuItemPrice"> $6.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                American, swiss, or cheddar cheese on your choice of bread.
                <ul>
                  <li> Add Bacon $2.00</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Deli Sandwich</span>
                <span className="CafeMenuItemPrice"> $8.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Turkey or tuna salad on your choice of bread with lettuce and
                tomato.
                <ul>
                  <li> Also served Club Style $11.95 </li>
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
                <span className="CafeMenuItemPrice">$11.95</span>
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
                <span className="CafeMenuItemPrice"> $13.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Shaved steak, peppers, onions, and mushrooms smothered in melted
                American cheese.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  {" "}
                  Chicken Bacon Ranch Sandwich
                </span>
                <span className="CafeMenuItemPrice"> $12.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Grilled chicken breast, bacon, ranch dressing, avocado, lettuce
                and tomato served on a brioche bun.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName">
                  {" "}
                  Grilled Chicken Sandwich{" "}
                </span>
                <span className="CafeMenuItemPrice"> $10.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Marinated chicken breast, lettuce, tomato and your choice of
                buffalo, BBQ, or honey mustard served on a brioche bun.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Veggie Wrap </span>
                <span className="CafeMenuItemPrice"> $9.95 </span>
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
                <span className="CafeMenuItemPrice"> $10.95</span>
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
                <span className="CafeMenuItemPrice">$10.95</span>
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
                <span className="CafeMenuItemPrice">$10.95</span>
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
                <span className="CafeMenuItemName"> Shrimp Avocado Wrap</span>
                <span className="CafeMenuItemPrice">$12.95</span>
              </h3>
              <div className="CafeMenuItemDesc">
                {" "}
                Diced jumbo shrimp served with avocado, lemon-dill aioli,
                lettuce and tomato.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Fresh Catch Entrees </h2>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Soft Tacos</span>
                <span className="CafeMenuItemPrice"> $10.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                <i> Fish / Jerk Chicken </i> <br />2 large soft tacos with your
                choice of protein, avocado, red onion, and cabbage topped with a
                cilantro lime crema. Served with fries.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Fish Sandwich </span>
                <span className="CafeMenuItemPrice"> $10.95 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Fresh lightly battered cod fillet fried to perfection, lettuce,
                tomato, and tartar sauce served on a hard roll. Your choice of
                side.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Fish & Chips </span>
                <span className="CafeMenuItemPrice"> $12.95 </span>
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
                <span className="CafeMenuItemName"> Lobster Roll</span>
                <span className="CafeMenuItemPrice">$$MP</span>
              </h3>
              <div className="CafeMenuItemDesc">
                Lump lobster claw and lobster tail in warm butter served on a buttered New England roll. Served with fries and cole slaw.
              </div>
            </div>
          </div>
        </div>
        <h2 className="CafeMenuGroupHeading"> Desserts </h2>
        <div className="CafeMenuGroup">
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> Chocolate Lava Cake </span>
                <span className="CafeMenuItemPrice"> $5.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Served with a chocolate syrup drizzle and whipped cream.
              </div>
            </div>
          </div>
          <div className="CafeMenuItem">
            <div className="CafeMenuItemText">
              <h3 className="CafeMenuItemHeading">
                <span className="CafeMenuItemName"> New York Style Cheesecake </span>
                <span className="CafeMenuItemPrice"> $5.99 </span>
              </h3>
              <div className="CafeMenuItemDesc">
                Served with a raspberry sauce drizzle and whipped cream.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeMenu;
