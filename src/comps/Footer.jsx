import React from "react";
import { SocialIcon } from "react-social-icons";
import "../css/Footer.scss";

const Footer = () => {
  return (
    <div className="box-6">
      <a href="mailto: lefodev@gmail.com">lefodev@gmail.com</a>
      <div className="social-icons-container">
        <SocialIcon
          url="https://github.com/j1yl"
          fgColor="#131313"
          bgColor="#eeeeee"
          className="social-icon"
        />
        <SocialIcon
          url="https://twitter.com/lefodev"
          fgColor="#131313"
          bgColor="#eeeeee"
          className="social-icon"
        />
      </div>
    </div>
  );
};

export default Footer;
