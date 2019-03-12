import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import OuterWrapper from "./components/OuterWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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






  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <OuterWrapper>
      
        <Navbar
          topScore={this.state.topScore}
          score={this.state.score}>
          
        </Navbar>
        <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            click={this.friendJumbler} 
          />
          
        ))}
        
      </Wrapper>
      <Footer />
      </OuterWrapper>
    );
  }
}

export default App;
