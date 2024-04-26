import { useState } from "react";
import {db} from "../auth/firebase";
import { addDoc, collection } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";


const ContactForm = () => {
  const [name , setName] = useState('');  
  const [email , setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [sent, setSent] = useState(false);

const handleSubmit = async(e)=>{
  e.preventDefault();
  try{
      await setDoc(doc(db, "contactForm", name),
      {
        name: name,
        email: email,
        message: message
      }
    )
    setSent(true);
  }
 catch(error){
    console.log(error);
    alert('Error sending message. Try it again♥️');
 }
setName("");
setEmail("");
setMessage("");
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-mainBackground font-sans">
    <div className=" h-[100%] justify-center items-center w- [100% ] max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md  ">
      <h2 className="text-3xl text-center text-fontDark font-bold ">Contact Us</h2>
      <form className="contact" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="block text-white text-sm font-semibold" htmlFor="name">Your Name</label>
          <input 
            id="name" 
            placeholder="Your name" 
            className="w-full px-3 py-2 border rounded-lg bg-whiteReplacement" 
            value={name} onChange={(e) => setName(e.target.value)}
            required 
            type="text" 
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-semibold " htmlFor="email">Your Email</label>
          <input 
            id="email" 
            placeholder="Your email" 
            className="w-full px-3 py-2 border rounded-lg bg-whiteReplacement  " 
            value={email} onChange={(e) => setEmail(e.target.value)}
            required 
            type="email" 
          />
        </div>
        <div className="mb-2">
          <label className="block text-white text-sm font-semibold " htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            placeholder="Your message" 
            className="w-full px-3 py-2 border rounded-lg bg-whiteReplacement  " 
            value={message} onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        
          <button type="submit" className="button w-full">
            Send Message
          </button>
        {sent && <p className="flex flex-col justfy-center items-center text-fontDark">Thank you for your message❤️</p>}
        
      </form>
    </div>
    </div>
  );
}

export default ContactForm;
