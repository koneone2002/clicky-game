import React from "react";

friendJumbler = id => {
    const shuffle = (cards) => {

        let randomCards = [];
        let array = cards;

        while (array.length !==0) {
            let random = Math.floor(array.length * Math.random());
        randomCards.push(array[random]);
        array.splice(random, 1)
        }
        return randomCards;
    };
     const cards = [];

     console.log(shuffle(cards));

     
    const { friends } = this.state;
    const filteredFriends = friends.filter(friend => friend.id !== id);
    this.setState({friends: filteredFriends});

  }


export default FriendJumbler;