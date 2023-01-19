import React from "react";
import Item from "../components/Item";
import { Link } from "react-router-dom";

function Index(props) {
  const loaded = () => {



    let itemList = props.items.map((item) => (
     
   

      return props.items.map((item)=>(

      <div className="itemCard" key={item._id}>
        
        <Link to={`/items/${item._id}`}>
          <div className="itemImg">
            <img src={`${item.image}`} />
          </div>
        </Link>
        
        <div className="itemData">
          <li>{item.name}</li>

          {item.condition ? (
            <div>
              Condition: <li>{item.condition}</li>
            </div>
          ) : null}
          <li>{item.zipcode}</li>
        </div>
      </div>
    ));

    return (
      <>
        {" "}
        {itemList}
      </>
    );
  };
  const loading = () => {
    <div>Loading...</div>;
  };

  return <div className="container">{props.items ? loaded() : loading}</div>;

}

export default Index;
