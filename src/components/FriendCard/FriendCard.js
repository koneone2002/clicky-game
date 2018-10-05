import React from "react";
import "./FriendCard.css";
//import "./FriendJumbler";

const FriendCard = props => (
  <div className="card" onClick={props.click}>
    <div className="img-container">
      <img id={props.id} alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        
      </ul>
    </div>
    
  </div>
);

export default FriendCard;
