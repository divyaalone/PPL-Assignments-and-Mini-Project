import React, { Component } from "react";
import { register } from "../UserFunctions";
import { Icon } from "semantic-ui-react";
import "./Register.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      first_name: "",
      last_name: "",
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };

    register(newUser).then((res) => {
      console.log(typeof res);
      if (typeof res == "string") {
        alert(res);
        this.props.history.push(`/login`);
      } else {
        return alert(res.msg);
      }
    });
  }

  render() {
    return (
      <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          {/* <div className="col-md-6 mt-5 mx-auto"> */}
          {/* <div className="mt-5 card card-body"> */}
          <form onSubmit={this.onSubmit}>
            <h1 className="heading">
              <Icon name="user plus" />
              REGISTER
            </h1>
            <div className="form-group">
              <label htmlFor="name" className="heading2">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="Enter your first name"
                value={this.state.first_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name" className="heading2">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Enter your lastname name"
                value={this.state.last_name}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="heading2">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                value={this.state.email}
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="heading2">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onChange}
              />
            </div>
            <button
              type="submit"
              className="mb-3 btn btn-lg btn-primary btn-block"
            >
              Register!
            </button>
          </form>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Register;
