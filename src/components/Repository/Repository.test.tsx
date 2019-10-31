import { shallow } from "enzyme";
import React from "react";
import Repository from "./Repository";

import style from "./Repository.module.scss";

const props = {
  id: "MDEwOlJlcG9zaXRvcnkyMTQxMTg0MjU=",
  owner: {
    avatarUrl: "https://avatars1.githubusercontent.com/u/12468480?v=4",
    login: "Linzaer",
  },
  url: "https://github.com/Linzaer/Ultra-Light-Fast-Generic-Face-Detector-1MB",
  name: "Ultra-Light-Fast-Generic-Face-Detector-1MB",
  createdAt: "2019-10-10T07:40:48Z",
  description: " 💎 1MB轻量级人脸检测模型 (1MB lightweight face detection model)",
  stargazers: {
    totalCount: 3339,
  },
  issues: {
    totalCount: 47,
  },
};

describe("<Repository /> rendering test", () => {
  it("renders without crashing", () => {
    shallow(<Repository {...props} />);
  });

  it("renders App title message", () => {
    const wrapper = shallow(<Repository {...props} />);
    expect(wrapper.find(`.${style.Name}`).text()).toEqual(props.name);
    expect(wrapper.find(`.${style.Description}`).text()).toEqual(props.description);
  });
});
