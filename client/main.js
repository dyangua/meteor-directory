import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "./react/app";

Meteor.startup(() => {
  render(<App />, document.getElementById("app"));
});
