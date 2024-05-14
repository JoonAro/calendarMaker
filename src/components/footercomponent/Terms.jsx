import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  

  return (
    <div className="flex items-center justify-center">
      <div className="shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
        <div className="overflow-y-auto">
          <p className="mb-4 text-base">
            Please read these terms and conditions carefully before using our calendar web application.
          </p>
          <h2 className="text-lg font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="mb-4 text-base">
            By using our calendar web application, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deserunt temporibus ipsa alias aspernatur cupiditate voluptates minus recusandae tenetur tempore, corrupti officia distinctio amet animi possimus veritatis eveniet. Necessitatibus, placeat. you agree to comply with and be bound by these terms and conditions.
          </p>
          <h2 className="text-lg font-semibold mb-2">2. Description of Service</h2>
          <p className="mb-4 text-base">
            Our calendar web application allows users to Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis cupiditate illo possimus rerum dolor, ipsum, temporibus optio dolorum facere blanditiis nostrum nemo, officiis voluptatem eos voluptates dolore doloremque porro recusandae? create, manage, and organize events, appointments, and schedules.
          </p>
          <h2 className="text-lg font-semibold mb-2">3. User Conduct</h2>
          <p className="mb-4 text-base">
            You agree to use the calendar web application only for lawful purposes and in accordance with these terms and conditions Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus numquam necessitatibus veritatis beatae alias repellendus incidunt rerum quia? Vel doloremque dolor eaque maiores officiis fuga magni voluptatum nam fugiat quas!.
          </p>
          {/* Add more sections as needed */}

          {/* Checkbox for accepting terms */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="acceptTerms"
              
              className="mr-2 cursor-pointer"
            />
            <div className="flex items-right mt-1">
                        
                        <p className="terms2">Do you accept the terms and conditions ?</p>
                    </div>
          </div>

          {/* Accept and Cancel buttons */}
          <div className="flex justify-center">
            <Link to="/" className="bg-red-500 mr-4 text-white px-4 py-2 rounded-md hover:bg-blue-600">Cancel</Link>
                    <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Continue</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
