import React from "react";
import { Radio } from "antd";
import "./RadioButtons.css"


class RadioButtons extends React.Component {
  state = {
    value: 1,
    disabled: true,
  };

  //If radioButtons click

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="radio-button">
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={1}></Radio>
        <Radio value={2}></Radio>
        <Radio defaultChecked={false} disabled={this.state.disabled}></Radio>
      </Radio.Group>
    </div>
    )
  }
}

export default RadioButtons;
