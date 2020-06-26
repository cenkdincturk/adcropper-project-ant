import React from "react";

import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";
import "rc-banner-anim/assets/index.css";
import "./Slider.css";
const BgElement = Element.BgElement;
class Slider extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user" autoPlay>
        <Element prefixCls="banner-user-elem" key="0">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: "rgb(64, 145, 159)",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Adcropper
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            Adcropper Slider 1
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="1">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: "rgb(175, 133, 51)",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Adcropper
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            Adcropper Slider 2
          </TweenOne>
        </Element>
        <Element prefixCls="banner-user-elem" key="2">
          <BgElement
            key="bg"
            className="bg"
            style={{
              background: "#9e1068",
            }}
          />
          <TweenOne
            className="banner-user-title"
            animation={{ y: 30, opacity: 0, type: "from" }}
          >
            Adcropper
          </TweenOne>
          <TweenOne
            className="banner-user-text"
            animation={{ y: 30, opacity: 0, type: "from", delay: 100 }}
          >
            Adcropper Slider 3
          </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}

export default Slider;
