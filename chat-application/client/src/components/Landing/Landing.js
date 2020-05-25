import React, { Component } from "react";
// import Background from "./chat1.jpg";

// var sectionStyle = {
//   width: "100%",
//   height: "100%",
//   backgroundImage: `url(${Background})`,
// };
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">WELCOME</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
