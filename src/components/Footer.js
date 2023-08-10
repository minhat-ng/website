import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
// import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a target="_blank" href="https://www.instagram.com/minh.nhat.ng/"><InstagramIcon /></a>
      {/* <a target="_blank" href="https://www.facebook.com/profile.php?id=100054024524324"><FacebookIcon /></a> */}
      <a target="_blank" href="https://github.com/mnhat-nguyen"><GitHubIcon /></a>
      <a target="_blank" href="https://www.linkedin.com/in/mnhat-nguyen/"><LinkedInIcon /></a>
      </div>
      <p> &copy; 2023 Made & Designed by Nhat Nguyen</p>
    </div>
  );
}

export default Footer;
