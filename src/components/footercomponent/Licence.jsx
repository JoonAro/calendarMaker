import { useEffect, useState } from 'react';

// SingleBanner component to display the banner image and heading
const SingleBanner = ({ bannerimage, heading }) => {
  return (
    <div className='relative w-full h-[70vh] overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-mainBackground-light opacity-50'></div>
      <img className='w-full h-full' src={bannerimage} alt='Banner' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-white text-6xl md:text-3xl'>{heading}</h1>
      </div>
    </div>
  );
};

// License component for the content
const License = () => {
  return (
    <div className="min-h-screen py-12 px-4 flex flex-col">
      <div className="ml-16 max-w-8xl mr-16 flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center mr-16">Licensing</h1>
        <p className="mb-6 text-xs uppercase mr-16">MIT License</p>
        <p className="mb-6 text-base">
          THE LICENSING FOR DREAM CALENDAR WEBSITE IS DESIGNED TO SUPPORT ITS PURPOSE AS A CUSTOMIZABLE CALENDAR PLATFORM. DREAM CALENDAR ALLOWS USERS TO PERSONALIZE THEIR CALENDARS BY EDITING THE BACKGROUND IMAGE, ADJUSTING THE NUMBER OF DATES DISPLAYED, AND ADDING HATCHES FOR IMPORTANT EVENTS. ADDITIONALLY, USERS CAN EASILY SHARE THEIR CUSTOMIZED CALENDARS WITH LOVED ONES, FOSTERING CONNECTION AND COLLABORATION.
        </p>
        <p className="mb-6 text-base">
          UNDER OUR LICENSING TERMS, WE PROVIDE USERS WITH THE FREEDOM TO USE AND MODIFY THE CALENDAR SOFTWARE FOR THEIR PERSONAL AND PROFESSIONAL NEEDS. HOWEVER, ANY MISUSE OF OUR CODE, NAME, OR BRANDING IS STRICTLY PROHIBITED. THIS INCLUDES COPYING OUR CODE OR NAME FOR UNAUTHORIZED USE, AS WELL AS ATTEMPTING TO COPYRIGHT OUR BRAND.
        </p>
        <p className="mb-6 text-base">
          FURTHERMORE, ATTEMPTS TO CRACK THE WEBSITE TO GAIN UNLIMITED CALENDAR EDITING WITHOUT A PREMIUM PLAN ARE ALSO PROHIBITED. PREMIUM FEATURES, SUCH AS UNLIMITED CALENDAR EDITING AND SHARING OPTIONS, ARE RESERVED FOR USERS WITH PREMIUM SUBSCRIPTIONS. SHARING THE WEBSITE LINK FOR PREMIUM USERS IS ALLOWED AS PER OUR LICENSING TERMS.
        </p>
        <p className="mb-6 text-base">
          VIOLATION OF THESE RULES WILL RESULT IN CONSEQUENCES, AS THOSE RESPONSIBLE FOR SUCH ACTIONS WILL BE HELD ACCOUNTABLE FOR THEIR MISCONDUCT. WE ARE COMMITTED TO PROTECTING OUR PLATFORM AND ENSURING FAIR AND RESPECTFUL USE BY ALL USERS.
        </p>
      </div>
    </div>
  );
};

// FAQ component to wrap everything together
const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col min-h-screen'>
      <SingleBanner
        bannerimage='https://media.istockphoto.com/id/1156505186/fi/valokuva/copyleft-lisenssin-käsite.jpg?s=1024x1024&w=is&k=20&c=TweoLFh1uIDYkG-XQeJuV_FUmPSs2HU3PgiwcShbILk='
        heading="Licensing"
      />
      <License />
      <footer className="bg-mainBackground-dark mt-auto py-4">
        <div className="text-center text-white">
          &copy; 2023 Your Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
