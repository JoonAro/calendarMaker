
import cale from '../assets/media/cale.jpg';
import ca from '../assets/media/sa.jpg'
import { Link } from 'react-router-dom';



const Footer2 = () => {
  return (
    <div className='footer bg-gray-800 text-white'>
      
      <div className='container mx-auto py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          

  
  <div>
  <div className='header flex items-center'>
  <img src={ca} alt='logo' className='w-6 mb-2 mr-2' />
  <h1 className='text-xl font-bold mb-4'>Dream Calendar</h1>
</div>


   
    <p className='text-base mb-4 ml-0'>Dream calendar works to make your dreams come true by planning your day. You shape your life and your days, you style your calendar the way you want. We are here to help you reach your goals.</p>
  </div>



          <div className='footer-item'>
            <h3 className='text-lg font-semibold mb-4'>About Us</h3>
            <Link to='/about' className='block mb-2'>About us</Link>
            <Link to='/contact' className='block mb-2'>Contact us</Link>
            <Link to='/about' className='block mb-2'>About us</Link>
            <Link to='/contact' className='block mb-2'>Contact us</Link>
          </div>
          <div className='footer-item'>
            <h3 className='text-lg font-semibold mb-4'>Our Information</h3>
            <Link to='/privacypolicy' className='block mb-2'>Privacy policy</Link>
            <Link to='/termsandconditions' className='block mb-2'>Terms & conditions</Link>
            
          
          </div>
          <div className='footer-item'>
            <h3 className='text-lg font-semibold mb-4'>Community</h3>
            <p className='mb-2  text-base'>Announcements</p>
            <p className='mb-2 text-base'>Answer center</p>
           <Link to='/discussion' className='block mb-2'>Discussion</Link>
           
          </div>
          <div className='footer-item'>
            <h3 className='text-lg font-semibold mb-4'>Subscribe Now</h3>
            <p className='mb-4 text-base'>Subscribe your email for newsletter and featured news based on your interest</p>
            <div className='flex'>
              <input type='text' placeholder='Enter your email' className='w-full py-2 px-3 rounded-l focus:outline-none focus:ring focus:border-blue-300' />
              <button className='bg-blue-500 text-white px-4 rounded-r'>Subscribe</button>
            </div>
          </div>
        </div>
        <div className='flex justify-between items-center mt-12'>
          <h3>© Copyright 2024 Dream calender, Inc. All rights reserved</h3>
          <img src={cale} alt='payimg' className='w-24' />
          
        </div>
      </div>
    </div>
  );
}

export default Footer2;
