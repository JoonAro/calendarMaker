import { useEffect, useState } from 'react';

const SingleBanner = ({ bannerimage, heading }) => {
  return (
    <div className='relative w-full h-[70vh] overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full bg-mainBackground-light opacity-50'></div>
      <img className='w-100 h-100' src={bannerimage} alt='noimg' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-white text-6xl md:text-3xl'>{heading}</h1>
      </div>
    </div>
  );
}

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [activesection, setactivesection] = useState(0)

  const faq = [
    {
      id: 1,
      question: 'What is Dream calendar?',
      answer: 'We are a team of full-stack web developers who created a calendar web application as part of our studies at Helsinki Business College. Our goal was to design and develop a user-friendly and attractive calendar tool to help users organize their days and holidays in the own style..'
    },
    {
      id: 2,
      question: 'Why do we use it?',
      answer: 'We chose to design our calendar the way we did to offer users a unique and visually appealing experience. By customizing the background and incorporating graphical elements, we aimed to make the calendar more engaging and enjoyable to is usee.<br><br>One of the key reasons for our design choice was to allow users to personalize their calendar according to their preferences. By enabling users to select their preferred background images or patterns, we empower them to create a calendar environment that reflects their style and personality.'
    },
    {
      id: 3,
      question: 'How does it work?',
      answer: ` To get started, users need to register for an account on our platform. They can do this by providing basic information such as their email address, name, and creating a password. In this app you can design your own online advent calendar. Users can choose a calendar theme, start and end dates, style the hatches. Users can also have their own collection of calendars and share their favourite ones with others. To be able to edit and save calendars, users have to be registered. It is also possible to choose the dark mode of the app.`
    },
    {
      id: 4,
      question: 'Who are the developers of this app?',
      answer: 'It is a software development project that was created by a team of four enthusiastic full-stack web developer students at Business College in Helsinki.'
    }
  ]

  return (
    <div className='extrapage'>
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        heading="About Us"
      />

      <div className='faqcontainer px-8 pt-8'>
        {faq.map((item, index) => (
          <div className='faq bg-gray-100 rounded-lg p-4 my-4 mx-auto w-full md:w-3/4 lg:w-2/3' key={item.id}>
            <div className='faqhead flex justify-between items-center'>
              <h1 className='text-lg md:text-xl font-semibold'>{item.question}</h1>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 cursor-pointer'
                onClick={() => setactivesection(item.id === activesection ? 0 : item.id)}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d={item.id === activesection ? 'M6 18L18 6M6 6l12 12' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'} />
              </svg>
            </div>
            {activesection === item.id && (
              <div className='faqbody pt-4'>
                <p className='text-base' dangerouslySetInnerHTML={{ __html: item.answer }}></p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ;
