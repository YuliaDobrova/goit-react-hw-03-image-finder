import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class AppLoader extends Component {
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="cornflowerblue"
        height={100}
        width={100}
        timeout={3000} //3 secs
        className="loader"
      />
    );
  }
}
