import React from "react";
import ReactDom from "react-dom";
import "./icons/importAll";
import { Slider } from "antd-mobile";

interface Props {}

export const App = (props: Props) => {
  return (
    <div>
      <svg>
        <use xlinkHref={`#add`}></use>
      </svg>
      {/* This will cause an error when using this component */}
      <Slider></Slider>
    </div>
  );
};

ReactDom.render(<App></App>, document.getElementById("app"));
