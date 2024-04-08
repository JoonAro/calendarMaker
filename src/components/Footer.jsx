import { Link } from 'react-router-dom';
import facebook from '../assets/media/facebook.png';
import linkedin from '../assets/media/linkedin.png';
import instagram from '../assets/media/instagram.png';
import vector from '../assets/media/vector.png';

const Footer = () => {
  const mediaData = [
    { href: "https://www.facebook.com", img: facebook },
    { href: "https://www.instagram.com", img: instagram },
    { href: "https://www.linkedin.com", img: linkedin },
    { href: "https://www.youtube.com/@gooddomicroprojects/", img: vector },
  ];

  return (
    <div className="footer-container bg-accentColor text-white flex items-center h-20 ml-30">
      <div className="footer-content flex justify-start pl-20 space-x-10"> {/* Adjusted pl-20 */}
        <h className="footer-title">© 2023 All rights reserved</h>
        <nav className="footer-nav flex space-x-4">
          <Link to="/privacy" className="text-white underline">Privacy Policy</Link>
          <Link to="/terms" className="text-white underline">Terms of Service</Link>
        </nav>
        <h className="footer-title">Cookies Setting</h>
      </div>
      <div className="media-icons flex ml-auto mr-4">
        {mediaData.map((item, index) => (
          <a href={item.href} target="_blank" rel="noopener noreferrer" key={index}>
            <img src={item.img} alt={item.title} className="w-10 h-10 mr-2" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Footer;
