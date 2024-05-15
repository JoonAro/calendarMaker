import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [satisfaction, setSatisfaction] = useState(3);
  const [likes, setLikes] = useState([]);
  const [dislikes, setDislikes] = useState('');
  const [otherDislikes, setOtherDislikes] = useState('');
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();

  const handleSatisfactionChange = (e) => {
    setSatisfaction(e.target.value);
  };

  const handleLikesChange = (e) => {
    const { value } = e.target;
    setLikes((prevLikes) =>
      prevLikes.includes(value)
        ? prevLikes.filter((like) => like !== value)
        : [...prevLikes, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ satisfaction, likes, dislikes, otherDislikes });
    // Reset the form
    setSatisfaction(3);
    setLikes([]);
    setDislikes('');
    setOtherDislikes('');
    // Show the modal
    setShowModal(true);
  };

  const getEmoji = (value) => {
    if (value <= 1) return '😞';
    if (value <= 2) return '🙁';
    if (value <= 3) return '😐';
    if (value <= 4) return '🙂';
    return '😊';
  };

  const closeModal = () => {
    setShowModal(false);
    navigate('/'); // Redirect to the home page
  };

  return (
    <div className="flex items-center justify-center bg-mainBackground-light min-h-screen">
      <div className="shadow-md rounded-lg p-8 mt-4 mb-4 bg-white w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Feedback Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="w-full mt-16 block text-lg font-medium mb-2">Are you satisfied with the website?</label>
            <div className="flex flex-col items-center">
              <input
                type="range"
                min="1"
                max="5"
                value={satisfaction}
                onChange={handleSatisfactionChange}
                className="w-full mb-4"
              />
              <span className="text-3xl">{getEmoji(satisfaction)}</span>
            </div>
          </div>

          <div className="mb-4">
            <label className="w-full block text-lg font-medium mb-2">What part of the website do you like?</label>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="UI"
                  checked={likes.includes('UI')}
                  onChange={handleLikesChange}
                  className="form-checkbox"
                />
                <span className="ml-2">UI</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Simplicity"
                  checked={likes.includes('Simplicity')}
                  onChange={handleLikesChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Simplicity</span>
              </label>
              <label className="w-full flex items-center">
                <input
                  type="checkbox"
                  value="Ease to Use"
                  checked={likes.includes('Ease of Use')}
                  onChange={handleLikesChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Ease to Use</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="w-full block text-lg font-medium mb-2">What part of the website do you not like?</label>
            <div className="flex flex-col space-y-2">
              <label className="w-full flex items-center">
                <input
                  type="checkbox"
                  value="UI"
                  checked={dislikes.includes('UI')}
                  onChange={(e) => setDislikes(e.target.value)}
                  className="form-checkbox"
                />
                <span className="ml-2">UI</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Simplicity"
                  checked={dislikes.includes('Simplicity')}
                  onChange={(e) => setDislikes(e.target.value)}
                  className="form-checkbox"
                />
                <span className="ml-2">Simplicity</span>
              </label>
              <label className="flex items-center w-full">
                <input
                  type="checkbox"
                  value="Ease of Use"
                  checked={dislikes.includes('Ease of Use')}
                  onChange={(e) => setDislikes(e.target.value)}
                  className="form-checkbox"
                />
                <span className="ml-2 w-full">Ease of Use</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="w-full block text-lg font-medium mb-2">Other (Please specify):</label>
            <textarea
              value={otherDislikes}
              onChange={(e) => setOtherDislikes(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Write your message here..."
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-accentColor-light text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you for your feedback!</h2>
            <button
              onClick={closeModal}
              className="bg-accentColor-light text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
