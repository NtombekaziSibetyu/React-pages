import React, { Component } from "react";

class LandingRep extends Component {
  render() {
    return (
      <div>
        <h1>Welcome.</h1>
        <p>Name Surname</p>
        <div className="container">
          <div className="column">
            <div className="widget">
              <i class="fas fa-user-edit fa-3x"></i>
              <button className="widget-btn">My Profile</button>
            </div>
            <div className="widget">
              <i class="far fa-calendar-alt fa-3x"></i>
              <button className="widget-btn">Meetings</button>
            </div>
            <div className="widget">
              <i class="fas fa-pills fa-3x"></i>
              <button className="widget-btn">Medication</button>
            </div>
          </div>
          <div className="column">
            <div className="widget">
              <img
                src="data:image/png;base64,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"
                alt="logo"
                className="logo-icon"
              ></img>
              <button className="widget-btn"> Afrizen</button>
            </div>
            <div className="widget">
              <i class="fas fa-stethoscope fa-3x"></i>
              <button className="widget-btn"> Doctors</button>
            </div>
            <div className="widget">
              <i class="fas fa-film fa-3x"></i>
              <button className="widget-btn"> Media Content</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingRep;
