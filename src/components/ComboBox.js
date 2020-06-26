import React from "react";
import { InputNumber } from "antd";
import "./ComboBox.css"

function ComboBox() {
  function onChange(value) {
    console.log("changed", value);
  }
  return (
    <div className="combobox-size">
      <InputNumber className="combobox-custom" size="small" type="number" min={0} max={1000} defaultValue={0} onChange={onChange} />
    </div>
  );
}

export default ComboBox;
