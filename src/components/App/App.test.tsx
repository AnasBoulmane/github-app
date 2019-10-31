import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App /> rendering test", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders edit message", () => {
    const wrapper = shallow(<App />);
    const msg = (
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
    );
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(msg)).toEqual(true);
  });
});
