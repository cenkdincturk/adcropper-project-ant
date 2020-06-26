import React from "react";
import { Layout, Col, Row } from "antd";
import Buttons from "./components/Buttons.js";
import Slider from "./components/Slider.js";
import ComboBox from "./components/ComboBox";
import RadioButtons from "./components/RadioButtons";
import SearchBox from "./components/SearchBox";
import SingleDropdown from "./components/SingleDropdown";
import "./App.css";

function App() {
  const { Content } = Layout;

  return (
    <div>
      <Layout className="layout">
        <Content style={{ padding: "0" }}>
          <div className="site-layout-content">
            <Buttons />
            <Slider />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6}>
                <ComboBox />
              </Col>
              <Col className="gutter-row" span={6}>
                <RadioButtons />
              </Col>
              <Col className="gutter-row" span={6}>
                <SearchBox />
              </Col>
              <Col className="gutter-row" span={6}>
                <SingleDropdown />
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
