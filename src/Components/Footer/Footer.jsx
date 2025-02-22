import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../Footer/Footer.css"
function Footer() {
  return (
    <>
      <div className="footer-outer-container">
        <div className="footer-inner-container">
          <div className="footer-icons-container">
            <FacebookIcon />
            <InstagramIcon />
            <YouTubeIcon />
          </div>
        </div>
      </div>

      <div className="Footer-Data">
        <div className="description">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
            <li className="copyright">&copy; 1997-2024</li>
          </ul>
          <div className="help">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div className="gift">
            <ul>
              <li>Gift Card</li>
              <li>Terms Of Use</li>
              <li>Corporate Informations</li>
            </ul>
          </div>
          <div className="media">
            <ul>
              <li>Media Center</li>
              <li>privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

