import React, { Component } from "react";
import Top from "../components/Top/Top";
import Footer from "../components/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Top />
        <div className="container">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
