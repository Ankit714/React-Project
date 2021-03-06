import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error("ErrorBoundary caught an error.", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      //if an error is encountered then setTimeOut will wait for 5sec(5000msec) and then set
      //redirect:true, which will then redirect to homepage(basically after 5 sec)
      setTimeout(() => this.setState({ redirect: true }), 6000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }

    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the homepage or wait five seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
