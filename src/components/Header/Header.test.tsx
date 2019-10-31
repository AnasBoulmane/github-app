import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

import style from "./Header.module.scss";

describe("<Header /> rendering test", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("renders App title message", () => {
    const wrapper = shallow(<Header />);
    const msg = <h1 className={style.AppTitle}>Explore.</h1>;
    expect(wrapper.contains(msg)).toEqual(true);
  });
});
