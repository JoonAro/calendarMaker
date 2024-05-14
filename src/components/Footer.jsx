import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from './theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const smallBackground = theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-smallBackground-light';
  const whiteReplacement = theme === 'dark' ? 'text-whiteReplacement-dark' : 'text-whiteReplacement-light';

  return (
    <footer className={`${smallBackground} py-4`}>
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