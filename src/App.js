import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    arr: [],
    friends: friends,
    status: "",
    id: "",
    score: 0,
    topScore: 0
  };

friendJumbler = (event) => {

  let id = (event.target.getAttribute("id"));
  if (this.state.arr.includes(id)) {
    
    this.setState({
      status: "Game Over",
      score: 0,
      arr: [] 
    });
    console.log("GameOver")
    //game reset empty 
    return

  }
  if(this.state.topScore < this.state.score) {
    this.setState({
      topScore: this.state.score,
    });
  
  }
  let newArr = this.state.arr;
  newArr.push(id);
  console.log(newArr);

  let cards = this.state.friends.sort(function(a, b){return 0.5 - Math.random()}); 
  this.setState({
    score: this.state.score + 1,
    arr: newArr,
    friends: cards
  });
}

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
        <Navbar
        topScore={this.state.topScore}
        score={this.state.score}>Clicky Game</Navbar>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            click={this.friendJumbler}
            
          />

        ))}
        
      </Wrapper>
    );
  }
}

export default App;
