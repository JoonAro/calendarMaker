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
        <li className='ml-16'>
          <Link to="about">

            <Button variant="contained" className={`${whiteReplacement}  text-l`}>About</Button>
          </Link>
        </li>
        <li>
          <Link to="privacy">
            <Button variant="contained" className={`${whiteReplacement}  text-l`}>Privacy Policy</Button>
          </Link>
        </li>
        <li>
          <Link to="licensing">
            <Button variant="contained" className={`${whiteReplacement}  text-l`}>Licensing</Button>
          </Link>
        </li>
        <li>
          <Link to="cookies">
            <Button variant="contained" className={`${whiteReplacement}  text-l`}>Cookies</Button>
          </Link>
        </li>
        <li>
          <Link to="terms">
            <Button variant="contained" className={`${whiteReplacement}  text-l`}>Terms</Button>
          </Link>
        </li>
        <li>
          <Link to="/premium">
            <Button variant="contained" className={`${whiteReplacement}  text-l`}>Premium</Button>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;