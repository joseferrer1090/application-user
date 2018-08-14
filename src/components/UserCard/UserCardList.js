import React, { Component } from "react";
import UserCard from "./UserCard";

class UserCardList extends React.Component {
  render() {
    return (
      <div>
        <p> Lista de usuarios </p>
        <UserCard />
      </div>
    );
  }
}

export default UserCardList;
