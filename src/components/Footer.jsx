import cale from '../assets/media/cale.jpg';
import ca from '../assets/media/sa.jpg';
import { Link } from 'react-router-dom';
import mastercard from '../assets/media/money/mastercard.png';
import paypal from '../assets/media/money/paypal.png';
import visa from '../assets/media/money/visa.png';  

const Footer = () => {
  return (
    <div className=' row bg-gray-800 text-white'>
      <div className='container mx-auto py-12 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16'>
          <div className='py-8'> {/* Add padding here */}
            <div className='header flex '>
              <h1 className='text-xl font-bold mb-4'>Dream Calendar</h1>
            </div>
            <p className='text-base mb-4 ml-0'>Dream calendar works to make your dreams come true by planning your day. You shape your life, you style your calendar the way you want. We are here to help you reach your goals.</p>
          </div>
          <div className=' py-8'> {/* Add padding here */}
            <h3 className='text-lg font-semibold mb-4'>Our Information</h3>
            <Link to='/contact' className='block mb-2'>Contact Us</Link>
            <Link to='/privacypolicy' className='block mb-2'>Privacy policy</Link>
            <Link to='/termsandconditions' className='block mb-2'>Terms & conditions</Link>
          </div>
          <div className='footer-item py-8'> {/* Add padding here */}
            <h3 className='text-lg font-semibold mb-4'>Community</h3>
            <p className='mb-2 text-base'>Announcements</p>
            <p className='mb-2 text-base'>Answer center</p>
            <Link to='/discussion' className='block mb-2'>Discussion boards</Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 flex items-center mt-12 '>
      
          <h3>© Copyright 2024 Dream Calendar, Inc. All rights reserved</h3>
            
          </div>
      
       <div className='col-md-6 flex items-center justify-end mt-12'>
          <img src={mastercard} alt='payimg' className=' w-16 h-10' />
          <img src={paypal} alt='payimg' className=' w-16 h-10' />
          <img src={visa} alt='payimg' className=' w-16 h-10' />
          </div>  
          </div>
        </div>
      </div>
    
  );
}

export default Footer;
