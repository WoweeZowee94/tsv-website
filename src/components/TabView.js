import { useState } from "react";
import React from "react";

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
          Tab 1
        </div>
        <div
          className={toggle === 2 ? "tabs active-tab" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
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
          className={toggle === 1 ? "content active-content" : "content"}
        >
            <h1> Content 1</h1>
            <p> Culpa ex minim qui fugiat laboris est officia amet deserunt tempor nulla. Deserunt voluptate esse consequat sunt nisi dolore exercitation exercitation id sint officia. Consectetur non dolore exercitation nulla consequat id consectetur do quis consequat nisi est eu dolore. Nostrud ipsum dolor anim ea est ipsum eiusmod exercitation sint non commodo veniam aute. Nisi fugiat duis duis eiusmod non quis irure qui labore proident commodo culpa Lorem. Ullamco est amet deserunt nulla tempor non in nostrud enim est exercitation consequat.</p>
        </div>
        <div
          className={toggle === 2 ? "content active-content" : "content"}
        >
            <h1>Content 2</h1>
            <p> Ex tempor laboris eiusmod cupidatat commodo in occaecat. Laborum velit eu eu ut enim elit consectetur cillum ipsum. Velit irure est anim aute anim irure voluptate duis laboris fugiat tempor magna qui consequat. Commodo ad nisi dolore officia aliqua cillum voluptate cupidatat fugiat incididunt cupidatat laborum.</p>
        </div>
        <div
          className={toggle === 3 ? "content active-content" : "content"}
        >
            <h1>Content 3</h1>
            <p> Ipsum labore qui tempor irure reprehenderit commodo pariatur veniam. Occaecat adipisicing qui aliquip adipisicing esse excepteur fugiat fugiat id. Deserunt sunt tempor qui cupidatat amet officia officia cillum tempor. Qui laborum eu mollit duis aliquip Lorem laborum excepteur qui laborum. Mollit enim in duis nulla reprehenderit dolor.</p>
        </div>
      </div>
    </div>
  );
};

export default TabView;
