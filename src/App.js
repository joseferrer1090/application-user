import React, { Component } from "react";
import Top from "./components/Top/Top";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Top />
        <div className="container">
          <p>los demas componentes</p>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
