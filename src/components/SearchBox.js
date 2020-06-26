import React from "react";
import { Input } from "antd";
import "./SearchBox.css"
import { SearchOutlined } from "@ant-design/icons";

function SearchBox() {
  return (
    <div className="searchbox">
      <Input className="input-custom" placeholder="Search..." size="middle" max length="15" suffix={<SearchOutlined />} />
    </div>
  );
}

export default SearchBox;
