import  { useEffect, useState } from 'react';

const cookieStorage = {
  getItem: (item) => {
    const cookies = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
    return cookies[item];
  },
  setItem: (item, value) => {
    document.cookie = `${item}=${value};`;
  }
}

const ConsentPopup = ({ onAccept, onReject }) => {
  const handleReject = () => {
    onReject();
  }

  return (
    <div id="consent-popup" className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-green-500 p-8 rounded-lg">
        <p className="text-lg">This website uses cookies to ensure you get the best experience on our website.</p>
        <div className="flex justify-between mt-4">
          <button id="accept" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onAccept}>Accept</button>
          <button id="reject" className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600" onClick={handleReject}>Reject</button>
        </div>
      </div>
    </div>
  );
}

const Cookies = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const shouldShowPopup = () => !cookieStorage.getItem('jdc_consent');
  const saveToStorage = () => cookieStorage.setItem('jdc_consent', true);

  const acceptFn = () => {
    saveToStorage();
    setShowPopup(false);
  }

  const rejectFn = () => {
    window.location.href = 'about:blank'; // Leaves the page
  }

  useEffect(() => {
    if (shouldShowPopup() && !accepted) {
      setTimeout(() => {
        setShowPopup(true);
      }, 2000);
    }
  }, [accepted]);

  return (
    <div className="relative">
      {showPopup && <ConsentPopup onAccept={acceptFn} onReject={rejectFn} />}
      {/* Your calendar page content goes here */}
    </div>
  );
}

export default Cookies;
