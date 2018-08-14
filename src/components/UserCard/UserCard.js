import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class UserCard extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    created: PropTypes.string,
    balance: PropTypes.string
  };
  render() {
    const { name, last_name, email, address, created, balance } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/detail/${id}">
              <div className="thumbnail clearfix">
                <img
                  src="http://placehold.it/100x100"
                  alt="ALT NAME"
                  className="pull-left span2 clearfix"
                  style={{ marginRight: 10 }}
                />
                <div className="caption">
                  <h4>
                    <p>
                      {name}
                      {last_name}
                    </p>
                  </h4>
                  <small>
                    <b>email: </b>
                    {email}
                  </small>
                  <br />
                  <small>
                    <b>direction: </b>
                    {address}
                  </small>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
