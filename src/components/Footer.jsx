import { Link } from 'react-router-dom';
import { useTheme } from './theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const whiteReplacement = theme === 'dark' ? 'text-white' : 'text-whiteReplacement-light';
  const fontDark = theme === 'dark' ? 'text-white' : 'text-fontDark-light';

  return (
    <div className={`footer ${theme === 'dark' ? 'bg-gray-800' : 'bg-accentColor-light'}`}>
      <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <div className="header flex items-center">
              <h1 className={`text-xl font-bold mb-4 ${fontDark}`}>
                Dream Calendar
              </h1>
            </div>
            <p className={`text-base mb-4 ml-0 ${fontDark}`}>
              Dream calendar works to make your dreams come true by planning your day. You shape your life and your days, you style your calendar the way you want. We are here to help you reach your goals.
            </p>
          </div>

          <div className="footer-item">
            <h3 className={`text-lg font-semibold mb-4 ${fontDark}`}>
              About Us
            </h3>
            <Link to="/about" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>About us</Link>
            <Link to="/contact" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>Contact us</Link>
          </div>

          <div className="footer-item">
            <h3 className={`text-lg font-semibold mb-4 ${fontDark}`}>
              Our Information
            </h3>
            <Link to="/privacypolicy" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>Privacy policy</Link>
            <Link to="/termsandconditions" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>Terms & conditions</Link>
          </div>

          <div className="footer-item">
            <h3 className={`text-lg font-semibold mb-4 ${fontDark}`}>
              Community
            </h3>
            <p className={`mb-2 text-base ${fontDark}`}>Announcements</p>
            <p className={`mb-2 text-base ${fontDark}`}>Answer center</p>
            <Link to="/discussion" className={`block mb-2 ${whiteReplacement} ${fontDark}`}>Discussion</Link>
          </div>
        </div>
        <div className="flex justify-between items-center mt-12">
          <h3 className={fontDark}>
            © Copyright 2024 Dream calendar, Inc. All rights reserved
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Footer;
