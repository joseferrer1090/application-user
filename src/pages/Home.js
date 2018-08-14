import React, { Component } from "react";
import Top from "../components/Top/Top";
import Footer from "../components/Footer/Footer";
import ListUsers from "../components/UserCard/UserCardList";

class Home extends Component {
  render() {
    return (
      <div>
        <Top />
        <div className="container">
          <ListUsers />
          <br />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
