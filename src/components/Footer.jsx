import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from './theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const accentColor = theme === 'dark' ? 'bg-accentColor-dark' : 'bg-accentColor-light';
  const whiteReplacement = theme === 'dark' ? 'text-whiteReplacement-dark' : 'text-whiteReplacement-light';

  return (
    <footer className={`${accentColor} py-4`}>
      <ul className="flex flex-wrap items-center text-sm text-gray-500">
        <li className="ml-16 mb-2"> {/* Adjusting margin for About */}
          <Link to="about" className="underline">
            <Button variant="contained" className={`${whiteReplacement} text-l`}>About</Button>
          </Link>
        </li>
        <li className=" mb-2"> {/* Adjusting margin for Privacy Policy */}
          <Link to="privacy" className="underline">
            <Button variant="contained" className={`${whiteReplacement} text-l`}>Privacy Policy</Button>
          </Link>
        </li>
        <li className="mb-2"> {/* Adjusting margin for Terms and Conditions */}
          <Link to="terms" className="underline">
            <Button variant="contained" className={`${whiteReplacement} text-l`}>Terms and conditions</Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
