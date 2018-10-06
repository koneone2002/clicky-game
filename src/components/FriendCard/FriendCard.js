import React from "react";
import "./FriendCard.css";
//import "./FriendJumbler";

const FriendCard = props => (
  <div className="card" onClick={props.click}>
    <div className="img-container">
      <img id={props.id} src={props.image} />
    </div>
    
    
  </div>
);

export default FriendCard;
