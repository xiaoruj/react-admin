import React, { Component } from "react";
import { connect } from "react-redux";
import { loginSync } from "@redux/actions/login";
@connect(null, { loginSync })
class Oauth extends Component {
  componentDidMount() {
    const token = this.props.location.search.split("=")[1];
    // console.log(token);
    this.props.loginSync(token);
    localStorage.setItem("user_token", token);
    this.props.history.replace("/");
  }
  render() {
    return <div>授权登录中...</div>;
  }
}
export default Oauth;
