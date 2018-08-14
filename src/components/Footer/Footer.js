import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <hr />
        <footer>
          <div className="row">
            <div className="col-lg-12">
              <p>
                Jose Carlos Ferrer &copy; test for{" "}
                <a href="http://tuapplicacion.co/"> tu applicacion </a> 2018
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
