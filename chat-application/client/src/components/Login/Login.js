import React, { Component } from "react";
import { login } from "../UserFunctions";
import "./Login.css";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    login(user).then((res) => {
      if (typeof res !== "object") {
        if (res) {
          console.log("in here.....");
          this.props.history.push(`/profile`);
        }
      }
    });
  }

  render() {
    // return (

    //     <div className="outerContainer">
    //       <div className="innerContainer">
    //         <form onSubmit={this.onSubmit}>
    //           <h1 className="heading">
    //             <Icon name="sign-in" />
    //             LOGIN
    //           </h1>

    //           <div className="form-group">
    //             <label htmlFor="email" className="heading2">
    //               Email address
    //             </label>
    //             <input
    //               type="email"
    //               className="form-control"
    //               name="email"
    //               placeholder="Enter email"
    //               value={this.state.email}
    //               onChange={this.onChange}
    //             />
    //           </div>
    //           <div className="form-group">
    //             <label htmlFor="password" className="heading2">
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               name="password"
    //               placeholder="Password"
    //               value={this.state.password}
    //               onChange={this.onChange}
    //             />
    //           </div>
    //           <button
    //             type="submit"
    //             className="mb-3 btn btn-lg btn-primary btn-block"
    //           >
    //             Sign in
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // );
    return (
      <div>
        <img className="wave" src="img/wave.png" alt=" " />
        <div className="containerImage">
          <div className="img">
            <img src="img/profile.svg" alt=" " />
          </div>
          <div className="login-content">
            <form onSubmit={this.onSubmit}>
              <img src="img/mobile.svg" alt="" />
              <h2 className="title">LOGIN</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="fas fa-user"></i>
                </div>
                <div className="div">
                  {/* <h5 htmlFor="email">Email Address</h5> */}
                  {/* <br></br> */}
                  {/* <br></br> */}

                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  <br></br>
                </div>
              </div>
              <div className="input-div pass">
                <div className="i">
                  <i className="fas fa-lock"></i>
                </div>
                <div className="div">
                  {/* <h5 htmlFor="password">Password</h5> */}
                  <br />
                  <input
                    type="password"
                    className="input"
                    name="password"
                    vlaue={this.state.password}
                    onChange={this.onChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <br />
              <input type="submit" className="btn" value="Sign In" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
