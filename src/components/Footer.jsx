
import "../styles/footerHeader.css"
import { Link } from 'react-router-dom';

// Import image files
import facebook from '../assets/media/facebook.png';
import twitter from '../assets/media/twitter.png';
import instagram from '../assets/media/instagram.png';
import whatsapp from '../assets/media/whatsapp.png';
import youtube from '../assets/media/youtube.png';

const Footer = () => {
  // Define MediaData array with imported image files
  const mediaData = [
    { href: "https://www.facebook.com", img: facebook },
    { href: "https://twitter.com", img: twitter },
    { href: "https://www.instagram.com", img: instagram },
    { href: "https://whatsapp.com", img: whatsapp },
    { href: "https://www.youtube.com/@gooddomicroprojects/", img: youtube },
  ];

  return (
    



    <div className="footer-container ">
      <div className="footer-content">
        <h className="footer-title">© 2023 All rights reserved</h>
        <nav className="footer-nav">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </nav>
        <h className="footer-title">Cookies Setting</h>
      </div>
      <div className="media-icons">
        {mediaData.map((item, index) => (
          <a href={item.href} target="_blank" key={index}>
            <img src={item.img} alt={item.title} className="media-icon" />
          </a>
        ))}
      </div>
    </div>
    
  );
}

export default Footer;
