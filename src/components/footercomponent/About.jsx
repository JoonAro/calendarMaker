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
      answer: 'Dream Calendar is a web calendar application designed for creating graphical and visually appealing calendars. With Dream Calendar, you can customize every aspect of your calendar to suit your preferences. You have the freedom to choose your background, select dates, and style the hatches in any way you like. Whether you prefer a minimalist design or a vibrant and colorful layout, Dream Calendar offers the flexibility to design your calendar exactly the way you envision it. Say goodbye to standard, cookie-cutter calendars and hello to personalized, beautifully crafted schedules with Dream Calendar.'
    },
    {
      id: 2,
      question: 'Why do we use it?',
      answer: 'To choose to design our calendar the way we did to offer users a unique and visually appealing experience. By customizing the background and incorporating graphical elements, we aimed to make the calendar more engaging and enjoyable to is usee.<br><br>One of the key reasons for our design choice was to allow users to personalize their calendar according to their preferences. By enabling users to sselect is their preferred background images or patterns, we empower them to create a calendar environment that reflects their style and personality.<br><br>Additionally, our design approach allows users to easily distinguish between different days. The use of graphical elements, such as hatching, helps to visually separate days. <br><br>Furthermore, our graphical calendar design offers a refreshing departure from the standard calendar interfaces commonly seen. Instead of the traditional grid-based layout, our calendar provides a more artistic and aesthetically pleasing presentation of time. This not only adds visual interest but also makes the calendar experience more enjoyable for users.'
    },
    {
      id: 3,
      question: 'How does it work?',
      answer: `Registration:<br><br>
      To get started, users need to register for an account on our platform. They can do this by providing basic information such as their email address, name, and creating a password.<br><br>
      Limited Edition Styling:<br><br>
      Upon account verification, users can access the limited edition of styling. With this edition, users can style up to 5 calendars according to their preferences. They can choose background images or patterns, select fonts, and customize colors to personalize their calendars.<br><br>
      Upgrade to Premium:<br><br>
      For users who need more calendars and advanced features, they can upgrade to the premium subscription. The premium subscription offers unlimited calendar creation and additional features like sharable links. Users can upgrade to premium directly from their account settings.<br><br>
      Payment:<br><br>
      When users decide to upgrade to the premium subscription, they will be prompted to choose a payment plan. Payment can be made securely through various methods such as credit/debit cards, PayPal, or other payment gateways. We ensure that all payment transactions are secure and encrypted to protect users' financial information.`
    },
    {
      id: 4,
      question: 'What is the purpose of the Dream calendar?',
      answer: 'The purpose of the Dream Calendar is to provide a user-friendly and customizable calendar solution for everyone it is designed by group of four student of Helsinki Business College. The project was assigned to our team for a duration of 9 weeks, and the completion deadline is set for May 17, 2024. Our goal with the Dream Calendar project is to create a comprehensive calendar platform that meets the needs of buyer, allowing them to organize their schedules effectively and efficiently.<br><br>By offering features such as customizable styling, event creation, and sharing capabilities, we aim to enhance the scheduling experience for users.'
    },
    {
      id: 5,
      question: 'Where is the office located?',
      answer: 'The office for the team 3 Dream Calendar company is temporarly located within Helsinki Business College. The team is working remotely and collaboratively to develop the Dream Calendar web application. The team members are based in different locations, but they are connected through online communication tools and platforms to ensure effective collaboration and project management.<br><br>While the physical office location may change in the future, the team is committed to delivering the Dream Calendar project on time and meeting all project requirements.'
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
