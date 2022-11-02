import React from "react";
import "../Footer/Footer.scss";

function Footer(props) {
  return (
    <div className="footer">
      <ul>
        <p>Digital Agency</p>
        <li>Building digital products, brands & experience</li>
      </ul>
      <ul>
        <p>Resources</p>
        <li>Guides</li>
        <li>Blog</li>
        <li>Cuistomer Stories</li>
        <li>Glossery</li>
      </ul>
      <ul>
        <p>Company</p>
        <li>About Us</li>
        <li>Careers</li>
        <li>Partners</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <p>Social Media</p>
        <li>LinkedIn</li>
        <li>Facebook</li>
        <li>Instagram</li>
      </ul>
    </div>
  );
}

export default Footer;
