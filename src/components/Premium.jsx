import  { useState } from 'react';
import mastercard from '../assets/media/money/mastercard.png';
import visa from '../assets/media/money/visa.png';
import paypal from '../assets/media/money/paypal.png';




const Premium = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('');
  const [billingAddress, setBillingAddress] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-mainBackground">
    <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
      <div className="flex flex-col justify-center p-8 md:p-14">
        <h1 className="mb-3 text-4xl font-bold text-center text-fontDark">payment</h1>
        <h1 className="text-2xl font-semibold text-left text-fontRed ">Payment method</h1>
        <div className="flex items-center text-left space-x-4 mt-6 ">
  <img src={mastercard} alt="Mastercard" className="w-16 h-auto" />
  <img src={visa} alt="Visa" className="w-16 h-auto" />
  <img src={paypal} alt="PayPal" className="w-16 h-auto" />
</div>

        <h1 className="text-2xl font-semibold text-left text-fontRed mt-6 pt-4 border-b-2">payment Information</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="row">
      <div className="col-6">
              <label htmlFor="paymentMethod" className="w-full block text-sm font-semibold mb-1 ">Select Payment Method</label>
              <select id="paymentMethod" className="w-full p-2 border rounded bg ml-2" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value=""> --select--</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Visa">Visa</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
      
        <div className="col-6">
          <label htmlFor="cardNumber" className=" w-full block text-sm font-semibold    mb-1">Card Number</label>
          <input type="text" id="cardNumber" className="w-full p-2 border rounded" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </div>
        </div>


         <div className="row mt-8">
         <div className="col-6">
          <label htmlFor="expirationDate" className="w-full block text-sm font-semibold mb-1">Expiration Date</label>
          <input type="text" id="expirationDate" className="w-full p-2 border rounded" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
        </div>

        <div className="col-6">
          <label htmlFor="securityCode" className="w-full block text-sm font-semibold mb-1">Security Code</label>
          <input type="text" id="securityCode" className="w-full p-2 border rounded" value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} />
        </div>
        </div>

        <h3 className="text-lg font-semibold mb-4 mt-8 border-b-2">Billing Information</h3>

         <div className="row">
        <div className="col-6">
          <label htmlFor="fullName" className="w-full block text-sm font-semibold mb-1">Full Name</label>
          <input type="text" id="fullName" className="w-full p-2 border rounded" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div className="col-6">
          <label htmlFor="country" className="block text-sm font-semibold mb-1">Country</label>
          <input type="text" id="country" className="w-full p-2 border rounded" value={country} onChange={(e) => setCountry(e.target.value)} />
        </div>
        </div>

        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mt-4 w-full text-sm font-semibold mb-1">Phone Number</label>
          <input type="text" id="phoneNumber" className="w-full p-2 border rounded" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>

        <div className="mb-4">
          <label htmlFor="billingAddress" className="w-full mt-4block text-sm font-semibold mb-1">Billing Address</label>
          <input type="text" id="billingAddress" className="w-full p-2 border rounded" value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} />
        </div>

        <div className="row">
        
        
        
        <div className="col-6">
           <label htmlFor="state" className="block text-sm font-semibold mb-1">State</label>
            <input type="text" id="state" className="w-full p-2 border rounded" value={state} onChange={(e) => setState(e.target.value)} />
          </div>


          <div className="col-6">
            <label htmlFor="zipCode" className="block text-sm w-full font-semibold mb-1">Zip/Postal Code</label>
            <input type="text" id="zipCode" className="w-full p-2 border rounded" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
          </div>
          </div>
        
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-4">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Premium;
