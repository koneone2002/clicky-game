import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: [],
    name: "",
    id: "",
    score: 0,
    topScore: 0
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    }); 
  };


 // state at beginning should have both score and Top Score set to 0

  // if user successfully clicks a card that hasn't been clicked yet jumble cards

  // score ++

  // if user clicks card that has already been clicked end game
  // alert user they guessed incorrectly, if score is > Current Top Score save score 
  // reset game



  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar>Clicky Game</Navbar>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // onChange={this.handleInputChange}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
