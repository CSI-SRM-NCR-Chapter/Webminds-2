import React from 'react';

// Import the social media icons from FlatIcon or any other source.
// Replace 'instagramIconUrl', 'xingIconUrl', 'facebookIconUrl', and 'youtubeIconUrl' with the actual URLs of the icons.
import InstagramIcon from '../assets/instagram.png';
import FacebookIcon from "../assets/facebook.png";
import YoutubeIcon from '../assets/youtube.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-mission">
          <h4>Our Mission</h4>
          <p>Our aim is to provide a safe and comfortable journey to you. Your safe and comfortable journey only matters to us.</p>
        </div>
        <nav className="footer-navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/news">News and Events</a></li>
            <li><a href="/multimedia">Multimedia</a></li>
            <li><a href="/mission">Mission</a></li>
          </ul>
          <ul>
            <li><a href="/solar-system">Solar System</a></li>
            <li><a href="/climate-space">Climate & Space</a></li>
            <li><a href="/universe">The Universe</a></li>
          </ul>
        </nav>
        <div className="footer-social">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeIcon} alt="YouTube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
