import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/Globalstyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
