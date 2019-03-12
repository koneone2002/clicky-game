import React from "react";

const FriendJumbler = id => {
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
    const jumbledFriends = friends.filter(friend => friend.id !== id);
    this.setState({friends: jumbledFriends});

  }


export default FriendJumbler;