
import { useState } from 'react';


const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form className="form relative flex flex-col p-8 md:p-14 items-center justify-start min-h-screen bg-mainBackground" onSubmit={handleSubmit}>
     <div className='header'>
      <h1 className="text-4xl font-bold text-black mt-32 mr-28">Contact us</h1>
     </div>
     <div className="font-bold items-center pt-16 pb-4 mr-32">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      </div>
      <div className="font-bold items-center pb-4 mr-32">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>

     <div className='font-bold items-center pb-4 mr-32'>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4 mr-28 w-24 h-10">Submit</button>

    </form>
  );
};

export default Contact;
