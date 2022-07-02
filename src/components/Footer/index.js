import React from "react";
import GithubLogo from "../../assets/GithubLogo/githublogo.png";
import LinkedinLogo from "../../assets/LinkedinLogo/linkedinlogo.jpeg";

function Footer() {
  return (
    <footer className="page-footer">
      <a href="https://github.com/KavyaMantena">
        <img src={GithubLogo} alt="Github-logo" className="logo"></img>
      </a>

      <a href="https://github.com/KavyaMantena">
        <img src={LinkedinLogo} alt="Linkedin-logo" className="logo"></img>
      </a>
    </footer>
  );
}

export default Footer;
