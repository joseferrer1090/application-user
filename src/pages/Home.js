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

  dataFetch() {
    fetch(config.defaultURL + API_HASH).then(response =>
      response.json().then(data => {
        if (response.ok) {
          this.setState({
            dataList: data
          });
        }
      })
    );
  }

  componentDidMount() {
    this.dataFetch();
  }

  render() {
    const aux_data = this.state.dataList;
    return (
      <div>
        <Top />
        <div className="container">
          <p> Los datos desde el fetch </p>
          {console.log(aux_data)}
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
