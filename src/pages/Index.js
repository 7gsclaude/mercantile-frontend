import React from "react";
import Item from "../components/Item";
import { Link } from "react-router-dom";

function Index(props) {
  const loaded = () => {

     const itemList = (props.items.map((item)=>(
      <div className="index">
        <div className="itemCard" key={item._id}>
            <Link to={`/items/${item._id}`}>
              <img className="itemImg" src={`${item.image}`} />
            </Link>
            <ul>
            <Link className="index-name" to={`/items/${item._id}`}>
            <li>{item.name}</li>
            </Link>
            <li>{item.condition}</li>
            <li>{item.zipcode}</li>
            </ul>
        </div>
      </div>
   
    )))


    return (
      <div className="container">
        
        {itemList}
      </div>
    );
  };
  const loading = () => {
    <div>Loading...</div>;
  };

  return <div className="container">{props.items ? loaded() : loading}</div>;

}

export default Index;
