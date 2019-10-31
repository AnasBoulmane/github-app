import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App /> rendering test", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});
