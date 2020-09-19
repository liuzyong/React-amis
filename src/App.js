import React from "react";
// import {
//   SchemaForm,
//   SchemaMarkupField as Field,
//   FormButtonGroup,
//   Submit,
//   Reset
// } from "@formily/antd"; // 或者 @formily/next
// import { Input } from "antd";
import "antd/dist/antd.css";
import "./styles.css";
import MyTest from "./demo/MyTest";
export default class App extends React.Component {
  render() {
    return (
      <div>
        <MyTest />
      </div>
    );
  }
}
