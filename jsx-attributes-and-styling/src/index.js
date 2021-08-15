import React from "react";
import ReactDOM from "react-dom";

const img = " https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true">
      My Favourite Foods
    </h1>
    <div>
      <img
        alt="ramen"
        className="food-size"
        src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/2/2018/06/09225618/OishiiRamen1.jpg"
      />
      <img
        alt="tandoori"
        className="food-size"
        src="https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg"
      />
      <img
        alt="burger"
        className="food-size"
        src="https://static.toiimg.com/photo/79811787.cms"
      />

      <img alt="random" src={img} />
    </div>
  </div>,
  document.getElementById("root")
);

//Names should be camelCase in javascript file
