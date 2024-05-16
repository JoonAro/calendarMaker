import { useEffect, useState } from 'react';

const cookieStorage = {
  getItem: (item) => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[item];
  },
  setItem: (item, value) => {
    document.cookie = `${item}=${value};path=/;`;
  }
}

const ConsentPopup = ({ onAccept, onReject }) => {
  const handleReject = () => {
    onReject();
  }

  return (
    <div id="consent-popup" className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-smallBackground-light p-4 rounded-lg">
        <p className="text-lg">This website uses cookies to ensure you get the best experience on our website.</p>
        <div className="flex  mt-4">
          <button id="accept" className="bg-mainBackground-light text-white py-2 px-4 rounded hover:bg-accentColor-light mr-8" onClick={onAccept}>Accept</button>
          <button id="reject" className="bg-mainBackground-light text-white py-2 px-4 rounded hover:bg-accentColor-light" onClick={handleReject}>Reject</button>
        </div>
      </div>
    </div>
  );
}

const Cookies = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);

  const shouldShowPopup = () => !cookieStorage.getItem('jdc_consent');
  const saveToStorage = (value) => cookieStorage.setItem('jdc_consent', value);

  const acceptFn = () => {
    saveToStorage('accepted');
    setShowPopup(false);
    setConsentGiven(true);
  }

  const rejectFn = () => {
    saveToStorage('rejected');
    setShowPopup(false);
    setConsentGiven(true);
  }

  useEffect(() => {
    if (shouldShowPopup() && !consentGiven) {
      setTimeout(() => {
        setShowPopup(true);
      }, 2000);
    }
  }, [consentGiven]);

  return (
    <div className="relative">
      {showPopup && <ConsentPopup onAccept={acceptFn} onReject={rejectFn} />}
      {/* Your calendar page content goes here */}
    </div>
  );
}

export default Cookies;
