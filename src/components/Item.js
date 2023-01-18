import { Link, useParams } from "react-router-dom";
import React from "react";

function Item(props) {
  console.log(props);
  // if (props.wanted === "true") {
  return (
    <div className="itemCard">
      <Link to={`/items/${props.item._id}`}>
        <div className="itemImg">
          <img src={`${props.item.image}`} />
        </div>
      </Link>
      <div className="itemData"><li>{props.item.name}</li></div>
      <div className="itemData"> Condition: <li>{props.item.condition}</li></div>
    </div>
  );
  // } else {
  //   return(
  //     <div className="itemCard">
  //     OFFERED:
  //     <Link to="/items/:id">

  //       <div className="itemImg">IMAGE GOES HERE</div>
  //     </Link>
  //     <div className="itemData">
  //       <li>Item Name</li>
  //       <li>Item tags</li>
  //       <li>Items wanted</li>
  //     </div>
  //   </div>
  //   )
  // }
}

export default Item;
