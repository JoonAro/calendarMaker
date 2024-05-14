import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SingleBanner = ({ bannerimage, heading }) => {
  return (
    
    <div className='relative w-full h-96 overflow-hidden '>
      <div className='absolute top-0 left-0 w-full h-full '></div>
      <img className='object-cover w-full h-full' src={bannerimage} alt='noimg' />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-white text-6xl md:text-3xl'>{heading}</h1>
      </div>
    </div>
  );
}

const Privacy = () => {
  useEffect(() => {
    // Scrolls to the top of the window when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SingleBanner
        bannerimage='https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80'
        heading="Privacy Policy"
      />
      <div className="bg-gray-100  flex items-center justify-center">
        <div className="container  p-8">
          <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
          <div className="">
            <p className="mb-4 text-base"> Calender web app, we work under Helsinki bussines colleage and the project will be ready on may 17 2023,and in this website we grantie your saftey is our main proprity  take your privacy seriously. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to keep your information secure. down below you can see in detail about our privay policy and we awill take full responsbility for any kind of cyberatack adsfasfd asdfa sdfas dfas dfa sdfa sfas dfas dfa sdfasd fas dfas df asdfasd fasdf</p>

            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p className="mb-4 text-base">We collect the following types of information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Personal Information: When you register for our calendar service, we may collect your name, email address, and other contact details.</li>
              <li>Usage Information: We collect information about how you use our calendar service, such as the events you create, the frequency of your usage, and the settings you choose.</li>
              <li>Device Information: We may collect information about the device you use to access our service, including your IP address, browser type, and operating system.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">2. How We Use Your Information</h2>
            <p className="mb-4 text-base">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing and improving our calendar service.</li>
              <li>Communicating with you about updates, new features, and promotions.</li>
              <li>Analyzing usage trends and preferences to enhance user experience.</li>
              <li>Preventing fraud and ensuring the security of our service.</li>
            </ul>

            <h2 className="text-xl font-semibold mb-2">3. Information Sharing and Disclosure</h2>
            <p className="mb-4 text-base pt-4">We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share your information with trusted third parties who assist us in operating our website, conducting our business, or servicing you If you feel your data is being licked in any kind of our compnay will take full responsbility for any kind of cyberattack.</p>

            <h2 className="text-xl font-semibold mb-2">4. Data Retention</h2>
            <p className="mb-4 text-base pt-4">We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law if you have any question regarding this matter please contact us in the page we ill we will explain the stuation .</p>
            <ul className="list-disc pl-6 mb-4">
  <li><span className="font-semibold">Account Information:</span> We retain your account information for as long as your account is active and for a reasonable period afterward in case you decide to reactivate it.</li>
  <li><span className="font-semibold">Usage Information:</span> We may retain usage information associated with your account for analytics purposes, and this data may be kept for a longer period as aggregated data.</li>
  <li><span className="font-semibold">Customer Support:</span> Information provided to customer support may be retained for as long as necessary to address your inquiry and maintain a record of the interaction.</li>
  <li><span className="font-semibold">Legal Requirements:</span> We may retain your personal information for compliance with legal obligations, resolve disputes, enforce our agreements, and protect our rights.</li>
</ul>
<p className="mb-4 text-base">If you wish to have your personal information removed from our systems, please contact us using the information provided in the "Contact Us" section below.</p>

            <h2 className="text-xl font-semibold mb-2">5. Your Choices</h2>
            <p className="mb-4 text-base">You have the right to access, correct, or delete the personal information we hold about you. You may also opt out of receiving marketing communications from us at any time.</p>

            <h2 className="text-xl font-semibold mb-2">6. Security</h2>
            <p className="mb-4 text-base">We take appropriate measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>

            <h2 className="text-xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
            <p className="mb-4 text-base">We reserve the right to update or change our Privacy Policy at any time. Any changes will be effective immediately upon posting the revised Privacy Policy on this page.</p>

            <h2 className="text-xl font-semibold mb-2">8. Contact Us</h2>
            <p className="mb-2 text-base">If you have any questions about our Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>By email: calender@gmial.com</li>
              <li>By mail: 123 pasila ,Helsinki</li>
            </ul>
            <p className="text-sm text-gray-600">Last updated: [7/5/2023]</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
