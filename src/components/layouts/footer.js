/* eslint-disable */

import React from "react";

let getCopyrightText = `© ${new Date().getFullYear()} | All Rights Reserved`;

function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="container-footer">
        <div className="heading">Social Media Presence</div>
        <ul className="unordered list-inline">
          <li>
            <a
              className="link"
              target="_blank"
              href="https://github.com/gautam-balamurali"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://www.linkedin.com/in/gautam-balamurali"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://twitter.com/codewithash"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
        <div id="copyrt-txt">{getCopyrightText}</div>
      </div>
    </footer>
  );
}

export default Footer;
