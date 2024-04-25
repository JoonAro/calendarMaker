const ContactForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-mainBackground">
    <div className=" h- [100%] justify-center items-center w- [100% ] max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md  ">
      <h2 className="text-3xl text-center text-fontDark font-bold mb-6">Contact Us</h2>
      <form action="">
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="name">Your Name</label>
          <input 
            id="name" 
            placeholder="Your name" 
            className="w-full px-3 py-2 border rounded-lg bg-whiteReplacment focus:border-blue-500" 
            required 
            type="text" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="email">Your Email</label>
          <input 
            id="email" 
            placeholder="Your email" 
            className="w-full px-3 py-2 border rounded-lg bg-whiteReplacement  " 
            required 
            type="email" 
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2" htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            placeholder="Your message" 
            className="w-full px-3 py-2 border rounded-lg bg-whiteReplacement  " 
            required
          />
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-mainBackground text-white font-semibold px-4 py-2 rounded-lg  hover:bg-smallBackground focus:outline-none">
            Send Message
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}

export default ContactForm;
