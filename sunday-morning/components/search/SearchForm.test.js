// @flow

import * as React from "react";
import { shallow } from "enzyme";
import { Button } from "antd";

import SearchForm from "./SearchForm";

const getComponent = (props = {}) => {
  const defaultProps = {
    from: "Barcelona",
    to: "Prague",
    date: "2018-03-18",
    onSubmit: jest.fn(),
    locations: {
      edges: [
        {
          node: {
            locationId: "prague_cz",
            name: "Prague"
          }
        }
      ]
    }
  };

  return shallow(<SearchForm {...Object.assign({}, defaultProps, props)} />);
};

describe("SearchForm", () => {
  it("can submit updated values", () => {
    const onSubmit = jest.fn();
    const searchForm = getComponent({ onSubmit });
    const button = searchForm.find(Button);
    button.simulate("click");

    expect(button.props().disabled).toBe(false);
    expect(onSubmit).toHaveBeenCalledWith({
      from: "Barcelona",
      to: "Prague",
      date: "2018-03-18"
    });
  });

  it("can't submit form without from/to location", () => {
    const onSubmit = jest.fn();
    const searchForm = getComponent({ onSubmit, to: "" });
    const button = searchForm.find(Button);
    button.simulate("click");

    expect(button.props().disabled).toBe(true);
    expect(onSubmit).not.toHaveBeenCalled();
  });
});
