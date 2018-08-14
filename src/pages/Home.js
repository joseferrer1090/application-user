import React, { Component } from "react";
import Top from "../components/Top/Top";
import Footer from "../components/Footer/Footer";
import config from "../services/config";

const API_HASH = "6de6abfedb24f889e0b5f675edc50deb";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
  }

  dataFetch = () => {
    fetch(config.defaultURL + API_HASH)
      .then(res => res.json())
      .then(res => {
        this.setState({
          dataList: result
        });
      });
  };

  componentDidMount() {
    this.dataFetch();
    console.log(this.state.dataList);
  }

  render() {
    return (
      <div>
        <Top />
        <div className="container">
          <p> Los datos desde el fetch </p>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
