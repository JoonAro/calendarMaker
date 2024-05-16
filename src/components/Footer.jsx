import { Link } from 'react-router-dom';
import { useTheme } from './theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const whiteReplacement = theme === 'dark' ? 'text-white' : 'text-whiteReplacement-light';
  const fontDark = theme === 'dark' ? 'text-white' : 'text-fontDark-light';
  const smallBackground = theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-smallBackground-light';

  return (
    <div className={`footer ${theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-accentColor-light'}`}>
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 "> {/* Adjusted columns and added gap */}
          <div>
            <div className="header flex items-center">
              <h1 className={`text-xl font-bold mb-4 ${fontDark}`}>
                Dream Calendar
              </h1>
            </div>
            
            <Link to="/privacy" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>Privacy policy</Link>
            <Link to="/licence" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>License</Link>
            <Link to="/terms" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>Terms & conditions</Link>
          </div>
          <div className="footer-item">
            <h3 className={`text-lg font-semibold mb-4 ${fontDark}`}>
              Community
            </h3>
            <Link to="/contact" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>Feedback</Link>
            <Link to="/faq" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>FAQ</Link>
          </div>
          
          <div className="footer-item">
            <h3 className={`text-lg font-semibold mb-4 ${fontDark}`}>
              Our Information
            </h3>
            <Link to="/about" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>About us</Link>
            <Link to="/premium" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>premium</Link>
          </div>
          <div className="footer-item">
           
           
            <Link to="/premium" className={`text-lg font-semibold mb-4f ${whiteReplacement} ${fontDark}`}> </Link>
            </div>

          
        </div>
        <div className="flex justify-between items-center mt-16">
          <h3 className={fontDark}>
            © Copyright 2024 Team 3 of BCH. All rights reserved
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
