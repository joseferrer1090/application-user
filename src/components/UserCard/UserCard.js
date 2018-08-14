import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class UserCard extends React.Component {
  render() {
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
                    <a href="#">Nombre de la persona</a>
                  </h4>
                  <small>
                    <b>email: </b>
                    emial@mail.com
                  </small>
                  <br />
                  <small>
                    <b>direction: </b>
                    direction
                  </small>
                </div>
              </div>
            </Link>
          </div>
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
                    <a href="#">Nombre de la persona</a>
                  </h4>
                  <small>
                    <b>email: </b>
                    emial@mail.com
                  </small>
                  <br />
                  <small>
                    <b>direction: </b>
                    direction
                  </small>
                </div>
              </div>
            </Link>
          </div>
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
                    <a href="#">Nombre de la persona</a>
                  </h4>
                  <small>
                    <b>email: </b>
                    emial@mail.com
                  </small>
                  <br />
                  <small>
                    <b>direction: </b>
                    direction
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
