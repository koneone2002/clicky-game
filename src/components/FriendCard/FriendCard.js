import React from "react";
import "./FriendCard.css";
//import "./FriendJumbler";

const FriendCard = props => (
  
  <div className="card" onClick={props.click}>
    <div className="img-container">
     
      {/* <h1>{props.name}</h1>
      <p>{props.location}</p> */}
      <img id={props.id} alt={props.name} src={props.image} />
      
    </div>
  </div>
    
 
);

export default FriendCard;
