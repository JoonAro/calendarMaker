import { Link } from 'react-router-dom';
import { useTheme } from './theme/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const whiteReplacement = theme === 'dark' ? 'text-white' : 'text-whiteReplacement-light';
  const fontDark = theme === 'dark' ? 'text-white' : 'text-fontDark-light';
  const smallBackground = theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-smallBackground-light';

  return (

    <div className={`footer ${theme === 'dark' ? 'bg-smallBackground-dark' : 'bg-accentColor-light'} font-sans`}>
      <div className="flex flex-col justify-center items-center container mx-auto py-6 px-4 md:px-0">
        
      <div className='flex flex-row'>
    <Link to="/licence" className={`mb-2 ${whiteReplacement} ${fontDark} border-r border-slate-700 pr-2 mr-2`}>License</Link>
    <Link to="/terms" className={`mb-2 ${whiteReplacement} ${fontDark} border-r border-slate-700 pr-2 mr-2`}>Terms & conditions</Link>
    <Link to="/premium" className={`mb-2 ${whiteReplacement} ${fontDark}`}>Premium</Link>
</div>

<div className='flex flex-row'>
            <Link to="/contact" className={`block mb-2 ${whiteReplacement} ${fontDark} border-r border-slate-700 pr-2 mr-2`}>Feedback</Link>
            <Link to="/faq" className={`block mb-2 ${whiteReplacement} ${fontDark} border-r border-slate-700 pr-2 mr-2`}>FAQ</Link>
            <Link to="/about" className={`block mb-2 ${whiteReplacement} ${fontDark} border-r border-slate-700 pr-2 mr-2`}>About us</Link>
            </div>
       
        <div className="flex justify-center items-center mt-7">
          <h3 className={fontDark}>
            © 2024 Team of BCH
          </h3>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
