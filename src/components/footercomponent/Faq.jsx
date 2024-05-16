import { useState } from 'react';
import { questions } from './Question';
 // Make sure to import your Footer component

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = questions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
  <container className= "mx-auto p-4 flex-grow">
    <div className='flex flex-col min-h-screen bg-mainBackground-dark mb-64'>

      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
        
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Search for a question..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {filteredQuestions.map(q => (
            <div key={q.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{q.question}</h2>
              <p className="text-base text-justify mt-2">{q.answer}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    </container>
  );
}

export default FAQ;
