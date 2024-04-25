import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { useNavigate } from 'react-router-dom';

const CookieConsent = ({ type }) => {
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const acceptCookies = () => {
        // Set the accepted state to true
        setAccepted(true);
        // Store the acceptance in local storage or cookies
        localStorage.setItem('cookieConsent', 'accepted');
    };

    const declineCookies = () => {
        // Store the decline in local storage or cookies
        localStorage.setItem('cookieConsent', 'declined');
        // You can also take additional actions here if needed
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the user is registering or logging in
        if (type === 'register') {
            console.log('Registering...');
            // Perform your registration logic here
        } else if (type === 'login') {
            console.log('Logging in...');
            // Perform your login logic here
        }

        // Navigate to the home page or any other appropriate page
        navigate('/');
    };

    // Check if the user has previously accepted cookies
    const storedConsent = localStorage.getItem('cookieConsent');

    // If the user has already accepted, hide the consent form
    if (storedConsent === 'accepted' || accepted) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 flex justify-between">
            <p>This website uses cookies to enhance your experience.</p>
            <div>
                <button onClick={acceptCookies} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Accept</button>
                <button onClick={declineCookies} className="bg-red-500 text-white px-4 py-2 rounded-md">Decline</button>
            </div>
            {/* Prompt for user data */}
            <form onSubmit={handleSubmit} className="flex flex-col mt-4">
                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Submit</button>
            </form>
        </div>
    );
};

// Define PropTypes
CookieConsent.propTypes = {
    type: PropTypes.oneOf(['register', 'login']).isRequired // type prop is required and should be either 'register' or 'login'
};

export default CookieConsent;
