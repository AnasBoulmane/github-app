import { shallow } from "enzyme";
import React from "react";
import List from "./";

const Sample = ({ name }: any) => <span key={name}>{name}</span>;

describe("<List /> rendering test", () => {
  it("renders without crashing", () => {
    shallow(<List entries={[]} render={Sample} />);
  });

  it("using render props", () => {
    const entries = [{ name: "SampleTest" }];
    const wrapper = shallow(<List entries={entries} render={Sample} />);
    expect(wrapper.contains(Sample({ name: "SampleTest" }))).toEqual(true);
  });

  it("using component props", () => {
    const entries = [{ name: "SampleTest" }];
    const wrapper = shallow(<List entries={entries} component={Sample} />);
    expect(wrapper.contains(Sample({ name: "SampleTest" }))).toEqual(true);
  });

  it("using children", () => {
    const entries = [{ name: "SampleTest" }];
    const wrapper = shallow(<List entries={entries}>{Sample}</List>);
    expect(wrapper.contains(Sample({ name: "SampleTest" }))).toEqual(true);
  });
});
