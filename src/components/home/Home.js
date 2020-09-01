import React, { Component } from "react";
import { Link } from "react-router-dom";

//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Signup from "./Signup";

export class Home extends Component {
  render() {
    return (
      <div>
        <div className="home">
          <div className="overlay" />
          <div className="landing">
            <div className="intro">
              <h1>No Ke Ola Pono o Nā Kāne</h1>
              <em>
                <h2>for the good health of men</h2>
              </em>
              <p>
                A University of Hawaii Cancer Center partnership with Ke Ola
                Mamo, the Native Hawaiian Health Care System of Oʻahu.
              </p>
            </div>
          </div>
        </div>
        <div className="kukakuka-container">
          <div className="kukakuka" id="kukakuka">
            <div className="invited">
              <h2>Kāne Kūkākūkā</h2>
              <h3>If you are a man over 18, you are invited to:</h3>
              <ul className="benefits">
                <li>Join other kāne</li>
                <li>Share your manaʻo about health</li>
                <li>Help improve health services for nā kāne</li>
                <li>Play a role in the future of your health</li>
                <li>Bring a friend to share in the learning</li>
                <li>Enjoy a light healthy meal</li>
              </ul>
              <h4>
                Sessions are held regularly throughout the islands during the
                evening hours.
              </h4>
              <Signup />
              <h4>
                For more information about this study, contact Kent at (808)
                441-8189.
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
